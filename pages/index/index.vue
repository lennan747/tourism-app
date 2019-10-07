<template>
	<view>
		<tourism v-if="PageCur=='tourism'" :products="Products" :elements="Elements"></tourism>
		<team v-if="PageCur=='team'"></team>
		<user v-if="PageCur=='user'"></user>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="tourism">
				<view class='cuIcon-cu-image'>
					<image :src="'/static/tabbar/tourism' + [PageCur=='tourism'?'':'gray'] + '.png'"></image>
				</view>
				<view :class="PageCur=='tourism'?'text-f06c7a':'text-gray'">酱紫</view>
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
	import { getUserInfo,getProductsOfRecommend } from '../../utils/api.js'
	import { mapMutations } from 'vuex'
	export default {
		methods: {
			...mapMutations(['user']),
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
		},
		data() {
			return {
				PageCur: 'tourism',
				UserInfo: {},
				Products: [],
				Elements: [{
						title: '门店经理',
						name: '￥3980',
						color: 'green',
						cuIcon: 'selection',
						type: 'store'
					},
					{
						title: '酱紫玩家',
						name: '￥999',
						color: 'cyan',
						cuIcon: 'group',
						type: 'player'
					}
				]
			}
		},
		async onLoad() {
			// 获取用户信息
			let userResponse = await getUserInfo();
			if(userResponse.statusCode === 200){
				this.UserInfo = userResponse.data
			}
			
			// 获取首页信息
			let recommendResponse = await getProductsOfRecommend({page:1})
			if(recommendResponse.statusCode === 200){
				console.log(recommendResponse.data);
				this.Products = recommendResponse.data.data
			}
		}
	}
</script>

<style>
</style>
