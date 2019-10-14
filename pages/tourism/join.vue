<template>
	<view>
		<view v-if="type == 'store'" class="margin bg-white">
			<view v-html="managerIntroduction"></view>
		</view>
		<view v-if="type == 'player'" class="margin bg-white">
			<view v-html="playerIntroduction"></view>
		</view>
		
		<!-- 未购买 购买按钮 -->
		<view class="cu-bar bg-white tabbar border foot" v-if="memberOrderStatus == 'CanBePurchased'" style="z-index: 700;">
			<view class="bg-red submit" @tap="showModal()">立即订购</view>
		</view>
		<!-- 已购买 审核中 -->
		<view class="cu-bar bg-white tabbar border foot" v-if="memberOrderStatus == 'UndeReview'" style="z-index: 700;">
			<view class="bg-red submit">{{tip}}</view>
		</view>

		<view class="cu-modal" :class="dialogModal" style="z-index: 900;">
			<view class="cu-dialog bg-f06c7a">
				<view class="cu-bar bg-f06c7a justify-end">
					<input class="basis-lg" placeholder="请输入验证码" v-model="captchaCode" placeholder-style="color: rgba(255,255,255,0.8);" />
					<image class="basis-sm pic-captcha margin-right" @click="getCaptchaCode()" :src="captcha.imageContent"></image>
				</view>
				<view class="cu-bar bg-f06c7a justify-end">
					<view class="action">
						<button class="cu-btn bg-f06c7a margin-left" @tap="hideModal">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		orderaptcha,
		memberOrder,
		getMemberOrderInfo,
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				dialogModal: false,
				captchaCode: "",
				captcha: {},
				type: 'store',
				memberOrderInfo: {},
				memberOrderStatus: 'NotBuying',
				tip: '11',
				siteConfig: {},
			}
		},
		computed: {
		    managerIntroduction () {
		      return this.siteConfig.manager.extra
		    },
			playerIntroduction () {
			  return this.siteConfig.player.extra
			}
		},
		async onLoad(RouterOptions) {
			//console.log(this.siteConfig);
			// 获取选择的类型
			this.type = RouterOptions.type;
			
			// 获取会员订单信息
			let memberOrderInfoResponse = await getMemberOrderInfo();
			
			// 获取成功
			if(memberOrderInfoResponse.statusCode === 200){
				this.memberOrderInfo = memberOrderInfoResponse.data;
			}
			
			// 当前用户没有会员类型订单，可以购买
			if(!this.memberOrderInfo){
				this.memberOrderStatus = 'CanBePurchased';
			}
			
			// 当前用户有会员订单,审核中
			if(this.memberOrderInfo && this.memberOrderInfo.pay_status == 'unpaid'){
				this.tip = this.memberOrderInfo.type == 'player' ? '您已购买酱紫玩家，审核中' : '您已购买门店经理，审核中';
				this.memberOrderStatus = 'UndeReview';
			}
			
		},
		onShow() {
			this.siteConfig = uni.getStorageSync('site_config');
		},
		methods: {
			async showModal() {
				console.log('打开模态窗');
				// 获取验证码
				let captchaResponse = await orderaptcha();
				// 创建验证码成功
				if(captchaResponse.statusCode === 201){
					this.captcha = {
						key: captchaResponse.data.captcha_key,
						imageContent: captchaResponse.data.captcha_image_content,
						expiredAt: Date.parse(captchaResponse.data.expired_at)
					}
				}
				this.dialogModal = 'show';
			},
			async hideModal() {
				if(this.captchaCode == ''){
					uni.showToast({
						icon: 'none',
						title: '请输入验证码'
					})	
					return false;
				}
				
				// 创建订单
				let orderResponse = await memberOrder({
					captcha_key: this.captcha.key,
					captcha_code:this.captchaCode,
					type: this.type
				});
				
				// 订单创建成功
				if(orderResponse.statusCode === 201){
					this.memberOrderInfo = orderResponse.data;
					this.memberOrderStatus = 'UndeReview';
					this.tip = orderResponse.data.type == 'player' ? '您已购买酱紫玩家，审核中' : '您已购买门店经理，审核中';
					this.dialogModal = false;
				}
			},
			async getCaptchaCode() {
				// 获取验证码
				let captchaResponse = await orderaptcha();
				// 创建验证码成功
				if(captchaResponse.statusCode === 201){
					this.captcha = {
						key: captchaResponse.data.captcha_key,
						imageContent: captchaResponse.data.captcha_image_content,
						expiredAt: Date.parse(captchaResponse.data.expired_at)
					}
				}
			}
		}
	}
</script>

<style>
	
	page{
		height: 100%;
	}
	
	.bg-f06c7a {
		background-color: #f06c7a;
		color: #ffffff;
	}
	
	.pic-captcha {
		height: 10vw;
	}
</style>
