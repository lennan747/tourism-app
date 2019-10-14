<template>
	<view>
		<view class="padding">
			<view class="margin bg-white radius">
			<view class="text-center margin-tb-sm padding-top-sm text-xl">
				<text @longtap="tel">{{ consumerHotline }}</text>
			</view>
			<view class="text-center padding-bottom-sm text-sm text-gray">长按拨打电话</view>
			</view>
			<view class="margin bg-white radius">
				<view class="padding">
					<image :src="wechat"></image>
				</view>
				<view class="text-center padding-bottom-sm text-sm text-gray">长按识别</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		date(){
			return{
				consumerHotline: '',
				wechat: '',
			}
		},
		onLoad(){
			let site_config = uni.getStorageSync('site_config');
			console.log(site_config);
			this.consumerHotline = site_config.consumer_hotline.value;
			this.wechat = site_config.wechat.image;
		},
		methods:{
			tel(e){
				uni.makePhoneCall({
				    phoneNumber: this.consumerHotline //仅为示例
				});
			}
		}
	} 
</script>

<style>
</style>
