<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<image 
			:src="indexBanner.image"
			mode="widthFix" 
			class="response shadow-lg shadow-blur">
			 </image>
			 
			<view class="nav-list margin-top">
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
			
			<view class="cu-bar bg-white color-f06c7a">
				<view class="action">
					<text class="cuIcon-title text-blue color-f06c7a"></text>旅游
				</view>
			</view>
			
			<view class="padding-lr-xl text-center" v-for="(item,index) in products">
				<navigator :url="'/pages/product/index?id=' + item.id"  navigateTo :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]">
					<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" :style="{'background-image':'url('+item.index_image+')'}">
						<view>{{item.description}}</view>
					</view>
				</navigator>
			</view>
		
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		props: ['products','elements'],
		computed:{
			indexBanner: function(){
				let site_config = uni.getStorageSync('site_config');
				//console.log(site_config);
				return site_config.index_banner;
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
	.color-f06c7a {
		color: #f06c7a;
	}
</style>
