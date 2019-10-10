<script>
	import Vue from 'vue'
	import {
		appConfig,
		getUserInfo
	} from 'utils/api.js'
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			...mapMutations(['config', 'user'])
		},
		onLaunch: function() {
			// // 获取设备信息
			// uni.getSystemInfo({
			// 	success: function(e) {
			// 		// #ifndef MP
			// 		Vue.prototype.StatusBar = e.statusBarHeight;
			// 		if (e.platform == 'android') {
			// 			Vue.prototype.CustomBar = e.statusBarHeight + 50;
			// 		} else {
			// 			Vue.prototype.CustomBar = e.statusBarHeight + 45;
			// 		};
			// 		// #endif
			// 		// #ifdef MP-WEIXIN
			// 		Vue.prototype.StatusBar = e.statusBarHeight;
			// 		let custom = wx.getMenuButtonBoundingClientRect();
			// 		Vue.prototype.Custom = custom;
			// 		Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			// 		// #endif       
			// 		// #ifdef MP-ALIPAY
			// 		Vue.prototype.StatusBar = e.statusBarHeight;
			// 		Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
			// 		// #endif
			// 	}
			// })
		},
		onShow: async function(RouterOptions) {
			try {
				uni.showLoading({
					title: '加载中...'
				})
				
				// 处理用户来源 pid不存在且有pid
				let invite_code = RouterOptions.query ? RouterOptions.query.invite_code : false;
				let storage_invite_code = uni.getStorageSync('invite_code');
				if (!storage_invite_code && invite_code) {
					console.log('no parent, need save!');
					uni.setStorageSync('invite_code', invite_code)
				}
				
				// 获取app配置
				if (Object.keys(this.$store.state.config).length == 0) {
					let configResponse = await appConfig();
					if (configResponse.statusCode == 200) {
						console.log('加载app配置...');
						this.config(configResponse.data);
					}
				}
				
				// 获取用户信息
				if (Object.keys(this.$store.state.userInfo).length == 0) {
					let userResponse = await getUserInfo();
					if (userResponse.statusCode === 200) {
						console.log('加载用户信息...');
						this.user(userResponse.data);
					}
				}
				
				// 判断登录状态
				let token = uni.getStorageSync('access_token') || '';
				if (!token) {
					console.log('登录...');
					uni.hideLoading();
					uni.reLaunch({
						url: '/pages/login/login'
					});
					return false;
				}
				// 登录成功
				uni.hideLoading();
				uni.showToast({
					title: '登录成功',
					icon: "none"
				});
			} catch (e) {
				console.log(e);
				uni.hideLoading();
			}
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/static/iconfont/font.scss";
	@import "colorui/main.css";
	@import "colorui/icon.css";

	.text-f06c7a {
		color: #f06c7a;
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url('./static/back.png');
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}

	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}

	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}

	.text-light {
		font-weight: 300;
	}

	@keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}

	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}

		60% {
			transform: translateY(40upx);
		}

		100% {
			transform: translateY(0px);
		}
	}
</style>
