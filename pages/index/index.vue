<template>
	<view>
		<tourism v-if="PageCur=='tourism'" :products="Products" :elements="Elements"></tourism>
		<team v-if="PageCur=='team'" :datas="Teams"></team>
		<user v-if="PageCur=='user'" :datas="User"></user>
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
	import { getProductsOfRecommend,team } from '../../utils/api.js'
	import { mapMutations } from 'vuex'
	export default {
		methods: {
			...mapMutations(['teams','userInfo']),
			NavChange: async function(e) {
				let cur = e.currentTarget.dataset.cur
				if(cur == 'team'){
					// 获取app配置
					if (Object.keys(this.$store.state.teams).length == 0) {
						uni.showLoading({
							title: '加载中...'
						})
						let teamResponse = await team();
						if(teamResponse.statusCode !== 200){
							uni.showToast({
								title: '暂无团队',
								icon: "none"
							});
							return false;
						}else{
							this.teams(teamResponse.data);
							this.Teams = teamResponse.data
						}
						uni.hideLoading();
					}
					this.Teams = this.$store.state.teams;
				}
				
				if(cur == 'user'){
					// 获取用户信息
					//console.log(this.$store.state.userInfo);
					this.User = uni.getStorageSync('user_info');
				}
				
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
				User: null
			}
		},
		async onLoad() {
			// 获取首页推荐商品
			let recommendResponse = await getProductsOfRecommend({page:1})
			if(recommendResponse.statusCode === 200){
				console.log('加载首页推荐商品');
				this.Products = recommendResponse.data.data
			}
		}
	}
</script>

<style>
</style>
