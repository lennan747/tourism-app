<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="data:image/png;base64,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"></image>
			</view>
		</view>
		<view class="form re">

			<view class="username">
				<input placeholder="请输入手机号" v-model="phoneNumber" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>

			<view class="code">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="showModal()">{{getCodeText}}</view>
				<input placeholder="请输入验证码" v-model="code" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>

			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			
			<view class="code">
				<input placeholder="邀请码" v-model="invite_code" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			
			<view class="btn" @tap="doReg">立即注册</view>
			<view class="res">
				<view @tap="toLogin">已有账号立即登录</view>
			</view>
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
	import md5 from "@/common/SDK/md5.min.js";
	import {
		registercaptcha,
		verificationCodes,
		register
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				phoneNumber: "",
				captcha: "",
				captchaCode: "",
				verificationCode: "",
				code: '',
				passwd: "",
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false,
				dialogModal: false,
				invite_code: '',
			}
		},
		onLoad() {
			console.log('onLoad');
		},
		methods: {
			// 验证密码
			isPasswd(s) {
				let patrn = /^(\w){6,20}$/;
				if (!patrn.exec(s)) return false;
				return true;
			},
			// 关闭模态框，检查图片验证情况，获取手机验证码
			hideModal() {
				// 验证手机短信验证码
				if (!this.captchaCode) {
					uni.showToast({
						icon: 'none',
						title: '请输入验证码',
						duration: 2000
					});
					return false;
				}
				// 验证码已过期
				if (new Date().getTime() > new Date(this.captcha.expiredAt).getTime()) {
					uni.showToast({
						icon: 'none',
						title: '验证码已过期',
						duration: 2000
					});
					return false;
				}
				// 获取手机验证码
				this.sendPhoneCode();
			},
			// 打开模态框，
			showModal() {
				this.getCaptchaCode();
			},
			Timer() {},
			// 重新获取验证码倒计时
			setTimer() {
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ffffff";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return;
					}
					this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;

				}, 1000)
			},
			toLogin() {
				uni.hideKeyboard()
				uni.redirectTo({
					url: '/pages/login/login'
				});
				uni.navigateBack();
			},
			// 获取手机验证码
			async sendPhoneCode() {
				try {
					let phoneCodeResponse = await verificationCodes({
						captcha_key: this.captcha.key,
						captcha_code: this.captchaCode
					})
					// console.log(phoneCodeResponse);
					if (phoneCodeResponse.statusCode === 401) {
						uni.showToast({
							icon: "none",
							title: phoneCodeResponse.data.message
						})
					}

					if (phoneCodeResponse.statusCode === 201) {
						this.verificationCode = {
							key: phoneCodeResponse.data.key,
							expiredAt: Date.parse(phoneCodeResponse.data.expired_at)
						}
						this.getCodeText = "获取中...";
						this.getCodeisWaiting = true;
						this.getCodeBtnColor = "rgba(255,255,255,0.5)";
						this.dialogModal = null
						this.setTimer();
					}

				} catch (e) {
					//TODO handle the exception
					console.log(e);
					uni.showToast({
						icon: 'none',
						title: '服务器不见了',
						duration: 2000
					});
				}
			},
			// 获取图片验证码
			async getCaptchaCode() {
				// 加载键盘
				uni.hideKeyboard()

				// 等待验证码可用
				if (this.getCodeisWaiting) {
					return;
				}

				// 正则匹配手机号
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					return false;
				}

				// 请求图片验证码
				try {
					//  调用发送发送验证码接口，参数为手机号
					uni.showLoading({
						title: '加载中'
					});

					// 获取验证码数据
					let captchaRespon = await registercaptcha({
						phoneNumber: this.phoneNumber
					});

					console.log(captchaRespon);

					// 验证错误
					if (captchaRespon.statusCode === 422) {
						uni.hideLoading();
						uni.showToast({
							icon: 'none',
							title: '该手机号已经注册',
							duration: 2000
						});
					}

					// 获取验证码成功
					if (captchaRespon.statusCode === 201) {
						this.captcha = {
							key: captchaRespon.data.captcha_key,
							imageContent: captchaRespon.data.captcha_image_content,
							expiredAt: Date.parse(captchaRespon.data.expired_at)
						}
						uni.hideLoading();
						this.dialogModal = 'show'
					}

				} catch (e) {
					//TODO handle the exception
					console.log(e);
					uni.showToast({
						icon: 'none',
						title: '服务器不见了',
						duration: 2000
					});
				}
			},
			// 注册
			async doReg() {
				uni.hideKeyboard()
				// 验证手机号
				if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))) {
					uni.showToast({
						title: '请填写正确手机号码',
						icon: "none"
					});
					return false;
				}
				// 验证密码
				if (!this.isPasswd(this.passwd)) {
					console.log();
					uni.showToast({
						title: '密码不符合规则',
						icon: "none"
					});
					return false;
				}
				// 验证验证码
				if (this.code != 1234) {
					uni.showToast({
						title: '验证码不正确',
						icon: "none"
					});
					return false;
				}

				// 提交到服务器
				try {
					uni.showLoading({
						title: '注册中'
					});
					
					// 从缓存中获取上一级，不存在给0
					if(!this.invite_code || this.invite_code == ''){
						console.log(this.invite_code);
						this.invite_code = uni.getStorageSync('invite_code') || "";
					}
				
					let registerResponse = await register({
						invite_code: this.invite_code,
						password: this.passwd,
						verification_key: this.verificationCode.key,
						verification_code: this.code,
					})

					if (registerResponse.statusCode === 422) {
						uni.showToast({
							title: '验证码或者邀请码错误',
							icon: "none"
						});
					}

					if (registerResponse.statusCode === 401) {
						uni.showToast({
							title: '验证码错误',
							icon: "none"
						});
					}

					// 注册成功
					if (registerResponse.statusCode === 201) {
						uni.hideLoading()
						uni.showToast({
							title: '注册成功',
							icon: "success"
						});
						setTimeout(function() {
							uni.navigateBack();
						}, 1000)
					}
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";

	page {
		background-color: #f06c7a;
		color: #ffffff;
		height: 100%;
	}

	.bg-f06c7a {
		background-color: #39b54a;
		color: #ffffff;
		// height: 100%;
	}

	.pic-captcha {
		height: 10vw;
	}
</style>
