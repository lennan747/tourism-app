<template>
	<view>
		<view class="cu-list margin">
			<view class="cu-item flex justify-between bg-white margin-top-sm" v-for="(item,index) in withdrawList">
				<view class="margin" v-if="item.status == 'by'">
					<view>申请提现金额:{{item.application_amount}}￥</view>
					<view>申请提现日期:{{item.application_date}}￥</view>
					<view>实到金额:{{item.transfer_amount}}￥</view>
					<view>实到日期:{{item.transfer_date}}</view>
					<view>提现费率:{{item.handling_fee}}%</view>
					<view class="text-red">提现成功</view>
				</view>
				<view class="margin" v-if="item.status == 'Application'">
					<view>申请提现金额:{{item.application_amount}}￥</view>
					<view>申请提现日期:{{item.application_date}}￥</view>
					<view class="text-red">审核中</view>
				</view>
				<view class="margin" v-if="item.status == 'Refuse'">
					<view>申请提现金额:{{item.application_amount}}￥</view>
					<view>申请提现日期:{{item.application_date}}￥</view>
					<view class="text-red">拒绝理由:{{item.reason}}</view>
					<view class="text-red">拒绝</view>
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white tabbar border foot">
			<navigator class="bg-red submit" url="/pages/user/reflectdo">提现</navigator>
		</view>
	</view>
</template>

<script>
	import {
		withdraws
	} from '../../utils/api.js'
	export default {

		data() {
			return {
				withdrawList: {},
				status: {
					Application: '审核',
					by: '通过',
					Refuse: '拒绝'
				},
			};
		},

		async onLoad(options) {
			let response = await withdraws();
			uni.removeStorageSync('withdrawed');
			Object.keys(response).forEach(function(key){
				if(response[key].status == 'Application'){
					uni.setStorageSync('withdrawed',response[key]);
				}
			})
			this.withdrawList = response;
		},
		methods: {

		},
	}
</script>

<style>
</style>
