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
	import { getProductsOfRecommend } from '../../utils/api.js'
	import { mapMutations } from 'vuex'
	export default {
		methods: {
			NavChange: function(e) {
				let cur = e.currentTarget.dataset.cur
				if(cur == 'team'){
					// 获取团队信息
					console.log('team');
				}
				
				if(cur == 'user'){
					// 获取用户信息
					console.log('user');
				}
				
				if(cur == 'tourism'){
					// 获取首页推荐
					console.log('user');
				}
				this.PageCur = e.currentTarget.dataset.cur
			},
		},
		data() {
			return {
				PageCur: 'tourism',
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
			// 获取首页推荐商品
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
