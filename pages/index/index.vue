<template>
	<view>
		<tourism v-if="PageCur=='tourism'" :products="Products" :elements="Elements"></tourism>
		<team v-if="PageCur=='team'" :teams="Teams" :config="Config"></team>
		<user v-if="PageCur=='user'" :user="User" :config="Config"></user>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="tourism">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/tourism' + [PageCur=='tourism'?'':'gray'] + '.png'"></image>
				</view>
				<view :class="PageCur=='tourism'?'text-f06c7a':'text-gray'">酱梓</view>
			</view>
			<view class="action" @click="NavChange" data-cur="team">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/team' + [PageCur=='team'?'':'gray'] + '.png'"></image>
				</view>
				<view :class="PageCur=='team'?'text-f06c7a':'text-gray'">团队</view>
			</view>
			<view class="action" @click="NavChange" data-cur="user">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/user' + [PageCur=='user'?'':'gray'] + '.png'"></image>
				</view>
				<view :class="PageCur=='user'?'text-f06c7a':'text-gray'">用户</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { getProductsOfRecommend,team,getUserInfo } from '../../utils/api.js'
	export default {
		methods: {
			// 底部导航
			NavChange: async function(e) {
				let cur = e.currentTarget.dataset.cur
				this.PageCur = e.currentTarget.dataset.cur
			},
		},
		data() {
			return {
				PageCur: 'tourism',
				Elements: [{
						title: '门店经理',
						name: '￥3980',
						color: 'green',
						cuIcon: 'selection',
						type: 'store'
					},
					{
						title: '酱梓玩家',
						name: '￥999',
						color: 'cyan',
						cuIcon: 'group',
						type: 'player'
					}
				],
				Products: [],
				Teams: null,
				User: null,
				Config: null
			}
		},
		async onLoad() {
			let token = uni.getStorageSync('access_token') || '';
			if (!token) {
				return false;
			}
			// 获取站点配置
			this.Config = uni.getStorageSync('site_config')
			
			// 获取用户信息
			let userResponse = await getUserInfo();
			if (userResponse.statusCode === 200) {
				//console.log('加载用户信息...');
				this.User = userResponse.data;
			}
			// 获取首页推荐商品
			let recommendResponse = await getProductsOfRecommend({page:1})
			if(recommendResponse.statusCode === 200){
				//console.log('加载推荐商品');
				this.Products = recommendResponse.data.data
			}
			// 加载团队信息
			let teamResponse = await team();
			if(teamResponse.statusCode === 200){
				//console.log('加载团队信息');
				this.Teams = teamResponse.data
			}else{
				this.Teams = {};
			}
		}
	}
</script>

<style>
</style>
