<template>
	<view>
		<view class="cu-bar bg-white tabbar border foot">
			<view class="bg-red submit" @tap="showModal()">立即订购</view>
		</view>

		<view class="cu-modal" :class="dialogModal">
			<view class="cu-dialog">
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
		managerCaptcha
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				dialogModal: false,
				captchaCode: "",
				captcha: {}
			}
		},
		onLoad() {
		},
		methods: {
			async showModal() {
				console.log('打开模态窗');
				// 判断用用户的状态
				let captchaResponse = await managerCaptcha();
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
			hideModal() {
				this.dialogModal = false
				// 创建订单
			},
			getCaptchaCode() {

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
		height: 100%;
	}
	
	.pic-captcha {
		height: 10vw;
	}
</style>
