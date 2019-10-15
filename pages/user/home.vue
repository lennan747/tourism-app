<template name="user">
	<view>
		<view class="bg-gradual-green padding shadow-blur">
			<view class="flex solid-bottom align-center">
				<view class="padding-sm margin-xs radius">
					<view class="cu-avatar xl round margin" :style="`background-image: url(${userInfo.avatar})`"></view>
					<view class="text-center text-sm round bg-white text-green">{{ userInfo.name }}</view>
				</view>
				<view class="padding-top-sm padding-bottom-sm margin-xs">
					<view class="cu-capsule round line-white">
						<view class='cu-tag bg-white text-green'>
							我的余额
						</view>
						<view class="cu-tag line-white">
							<text class="text-price text-white">{{ userInfo.money }}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
					<navigator :url="item.url">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
					</navigator>
				</view>
			</view>
		</view>
		<scroll-view scroll-y class="page">
			<view v-for="(item,index) in 2" :key="index" v-if="index==TabCur" class="cu-list menu sm-border card-menu margin-top">
				<view class="cu-item" :class="menuArrow?'arrow':''" @tap="go(0)">
					<view class="content">
						<!-- <image src="/static/logo.png" class="png" mode="aspectFit"></image> -->
						<text class="text-grey">关于我们</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''" @tap="go(1)">
					<view class="content">
						<!-- <image src="/static/logo.png" class="png" mode="aspectFit"></image> -->
						<text class="text-grey">联系客服</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''" @tap="go(2)">
					<view class="content">
						<!-- <image src="/static/logo.png" class="png" mode="aspectFit"></image> -->
						<text class="text-grey">商务合作</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''" @tap="go(3)">
					<view class="content">
						<!-- <image src="/static/logo.png" class="png" mode="aspectFit"></image> -->
						<text class="text-grey">帮助中心</text>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "user",
		props: ['user','config'],
		data() {
			return {
				TabCur: 0,
				gridCol: 3,
				gridBorder: false,
				menuArrow: true,
				goList:['/pages/aboutUs','/pages/consumer','/pages/businessCooperation','/pages/help'],
				cuIconList: [{
					cuIcon: 'goodsnewfill',
					color: 'orange',
					badge: false,
					name: '订单',
					url: '/pages/user/orders',
				}, {
					cuIcon: 'profilefill',
					color: 'yellow',
					badge: false,
					name: '提现',
					url: '/pages/user/reflects',
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: false,
					name: '通知',
					url: '/pages/user/notices',
				}],
			}
		},
		computed:{
			// 用户信息 
			userInfo: function () {
				return this.user
			}
		},
		methods:{
			// 导航
			go(n){
				uni.navigateTo({
					url:this.goList[n]
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
