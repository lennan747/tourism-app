<template>
	<view>
		<view class="padding margin bg-red " v-if="!show">
			<view v-if="this.date != parseInt(this.withdraw_date)" class="text-center">
				<view>今天不是提现日期</view>
			</view>
			<view v-if="withdrawed">
				<view class="text-center">审核中...</view>
				<view>提现金额:{{ withdrawed.application_amount}}￥</view>
				<view>提现日期:{{ withdrawed.application_date}}</view>
			</view>
		</view>
		<view v-if="show">
			<form class="padding margin">
				<view class="cu-form-group margin flex justify-center" style="background-color: #F1F1F1;">
					<view class="cu-capsule round">
						<view class='cu-tag bg-red'>
							费率
						</view>
						<view class="cu-tag line-red">
							{{ bank_rate }}%
						</view>
					</view>
					<view class="cu-capsule round">
						<view class='cu-tag bg-red '>
							到账
						</view>
						<view class="cu-tag line-red">
							{{ actual_amount < 1 ? 0 : actual_amount }}￥
						</view>
					</view>
				</view>
				<view class="cu-form-group margin">
					<view class="title">提现金额</view>
					<input placeholder="0.00" name="input" @input="ActualAmount" :value="application_amount"></input>
				</view>
				<view class="text-right margin padding-lr text-shadow">
					你的余额为:
					<text class="text-red text-shadow">{{ you_amount }}￥</text>，可提现<text class="text-red text-shadow"> {{ can_amount }}￥</text>
				</view>
				<view class="cu-form-group margin">
					<view class="title">提现账户</view>
					<picker @change="PickerChange" :value="index" range-key="account" :range="banks">
						<view class="picker">
							<!-- {{index>-1?picker[index]:'微信/支付宝/银行卡'}} -->
							{{ type[banks[index].type]}} {{ banks[index].account }}
						</view>
					</picker>
				</view>
				<navigator class="text-right margin padding-lr text-red text-shadow" url="/pages/user/bankcards"> <text>提现账户管理</text></navigator>
				<view>
					<view class="bg-red round text-center padding-sm margin" @tap="withdraw">申请提现</view>
				</view>
			</form>
		</view>
		<view class="text-left padding-lr margin text-sm text-center text-gray">
			<view class="padding-bottom-sm text-center text-red">提现须知</view>
			<view class="padding-bottom-sm text-center">每次提现不得超过{{ withdraw_amount }}￥</view>
			<view class="padding-bottom-sm text-center">每月{{ bank_rate }}日可提现</view>
			<view class="padding-bottom-sm text-center">提现费率为 {{ bank_rate }}%</view>
			<view class="padding-bottom-sm text-center">提现金额必须大于1块</view>
			<view class="padding-bottom-sm text-center">请选择可用提现账户</view>
		</view>
	</view>
</template>

<script>
	import {
		bankList,
		createWithdraw
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				banks: [{
					account: '111'
				}, {
					account: '111'
				}],
				type: {
					wechat: '微信',
					alipay: '支付宝',
					bank: '银行卡',
				},
				index: 0,
				bank_rate: 0,
				withdraw_date: 0,
				date: 0,
				withdraw_amount: 0,
				userInfo: {},
				can_amount: 0,
				you_amount: 0,
				actual_amount: 0,
				application_amount: '',
				numList: [{
					name: '申请'
				}, {
					name: '审核'
				}, {
					name: '结果'
				}, ],
				withdrawed: false,
				show: true,
			}
		},
		async onShow() {
			//获取当前的日期
			this.date = new Date().getDate();
			//console.log(this.date);
			// 从缓存中获取系统配置
			let appConfig = uni.getStorageSync('site_config');
			//console.log(appConfig);
			// 从缓存中获取用户信息
			let userInfo = uni.getStorageSync('user_info');
			// 从缓存中获取提现信息
			let withdrawed = uni.getStorageSync('withdrawed');
			console.log(withdrawed);
			// 提现费率
			this.bank_rate = appConfig.bank_rate.value;
			// 提现日期
			this.withdraw_date = appConfig.withdraw_date.value;
			// 系统最大提现金额
			this.withdraw_amount = parseInt(appConfig.withdraw_amount.value);
			// 用户最大提现金额
			this.you_amount = parseInt(userInfo.money);
			if (this.you_amount > this.withdraw_amount) {
				this.can_amount = this.withdraw_amount;
			} else {
				this.can_amount = this.you_amount;
			}
			
			// 存在申请提现
			if(withdrawed){
				this.withdrawed = withdrawed;
				this.show = false;
				return;
			}
			
			// 当前日期不能提现
			//console.log(parseInt(this.withdraw_date));
			if (this.date != parseInt(this.withdraw_date)) {
				this.show = false;
				return;
			}
			
			await this.loadData()
		
		},
		methods: {
			// 加载银行卡
			async loadData() {
				let response = await bankList();
				if (response) {
					this.banks = response.data;
					console.log(this.banks);
				}
			},
			PickerChange(e) {
				console.log(e)
				this.index = e.detail.value
			},
			ActualAmount(e) {
				if(e.detail.value == '' || e.detail.value <= 0){
					this.actual_amoun = 0;
					this.application_amount = 0;
					return;
				}
				
				let application_amount = parseInt(e.detail.value);
				this.actual_amount = (application_amount - (application_amount * ((this.bank_rate) / 100))).toFixed(2);
				this.application_amount = application_amount;
			},
			async withdraw() {
				console.log(this.application_amount);
				let exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
				if (this.application_amount == null || this.application_amount == '' || this.application_amount < 1) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的金额！'
					})
					return false;
				}
				if (!exp.test(this.application_amount)) {
					uni.showToast({
						icon: 'none',
						title: '请输入正确的金额格式！'
					})
					return false;
				}
				
				if (this.application_amount > this.you_amount || this.application_amount > this.can_amount) {
					uni.showToast({
						icon: 'none',
						title: '超出可提现金额'
					})
					return false;
				}
				let response = await createWithdraw({
					application_amount: this.application_amount,
					bank_card_id: this.banks[this.index].id
				});
				console.log(response);
				if (response) {
					this.withdrawed = response.data.withdraw;
					this.show = false;
					uni.setStorageSync('withdrawed',this.withdrawed);
				}
			}
		}
	}
</script>

<style>
</style>
