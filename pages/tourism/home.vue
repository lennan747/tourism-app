<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<image 
			src="/static/componentBg.png"
			mode="widthFix" 
			class="response">
			 </image>
			<view class="nav-list">
				<navigator hover-class="none" 
				:url="'/pages/tourism/join?type=' + item.type" 
				class="nav-li" 
				navigateTo 
				:class="'bg-'+item.color"
				:style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" 
				v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-title text-blue"></text>旅游
				</view>
			</view>
			<view class="padding-lr-xl text-center">
				<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" 
				style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
					<view>泰国七日游</view>
				</view>
			</view>
			<view class="padding-lr-xl text-center">
				<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" 
				style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
					<view>泰国七日游</view>
				</view>
			</view>
			<view class="padding-lr-xl text-center">
				<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" 
				style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
					<view>泰国七日游</view>
				</view>
			</view>
			<view class="padding-lr-xl text-center">
				<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" 
				style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
					<view>泰国七日游</view>
				</view>
			</view>
			<view class="padding-lr-xl text-center">
				<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" 
				style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
					<view>泰国七日游</view>
				</view>
			</view>
			
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '门店经理',
						name: '￥3980',
						color: 'cyan',
						cuIcon: 'selection',
						type: 'store'
					},
					{
						title: '酱紫玩家',
						name: '￥999',
						color: 'blue',
						cuIcon: 'group',
						type: 'player'
					}
				],
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
