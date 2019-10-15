<template>
	<view>
		<view class="margin padding radius bg-white">
			<view v-html="con"></view>
		</view>
	</view>
</template>

<script>
	export default {
		date(){
			return{
				con: '',
			}
		},
		onLoad(){
			let site_config = uni.getStorageSync('site_config');
		
			this.con = site_config.help.extra;
		}
	} 
</script>

<style>
</style>
