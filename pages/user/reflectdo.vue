<template>
	<view>		
		<view>
			<form class="padding margin">
				<view class="cu-form-group margin">
					<view class="title">可提现金额</view>
					<input placeholder="200" name="input"></input>
				</view>
				<view class="cu-form-group margin">
					<view class="title">提现账户</view>
					<picker @change="PickerChange" :value="index" :range="banks">
						<view class="picker">
							<!-- {{index>-1?picker[index]:'微信/支付宝/银行卡'}} -->
							{{ banks[index]['id']}}
						</view>
					</picker>
				</view>
				<navigator class="text-right margin padding-lr text-red text-shadow" url="/pages/user/bankcards"> <text>提现账户管理</text></navigator>
				<view>
					<view class="bg-red round text-center padding-sm margin">申请提现</view>
				</view>
			</form>
		</view>
		<view class="text-left padding-lr margin text-sm text-center text-gray">
			<view class="padding-bottom-sm text-center text-red">提现须知</view>
			<view class="padding-bottom-sm text-center">每次提现不得超过2000</view>
			<view class="padding-bottom-sm text-center">请选择可用提现账户</view>
			<view class="padding-bottom-sm text-center">每月12日可提现</view>
		</view>
	</view>
</template>

<script>
	import { bankList } from '../../utils/api.js'
	export default {
		date() {
			return {
				banks: {},
				index: 0
			}
		},
		async onShow(){
			// 获取用户提现方式
			await this.loadData()
		},
		methods:{
			// 加载银行卡
			async loadData() {
				let response = await bankList();
				if(response){
					this.banks = response.data;
					console.log(this.banks);
				}
			},
			PickerChange(e) {
				console.log(e)
				//this.index = e.detail.value
			}
		}
	}
</script>

<style>
</style>
