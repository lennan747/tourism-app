<template>
	<view>
		<tourism v-if="PageCur=='tourism'"></tourism>
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
	import { getUserInfo } from '../../utils/api.js'
	import { mapMutations } from 'vuex'
	export default {
		data() {
			return {
				PageCur: 'tourism',
				UserInfo: {}
			}
		},
		async onLoad() {
			//
			let userResponse = await getUserInfo();
			if(userResponse.statusCode === 200){
				this.UserInfo = userResponse.data
			}
			
		},
		methods: {
			...mapMutations(['user']),
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			},
		}
	}
</script>

<style>

</style>
