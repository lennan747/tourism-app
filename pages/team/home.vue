<template name="team">
	<view>
		<view class="bg-img padding-sm" style="background-image: url('/static/componentBg.png')">
			<view class="flex justify-center padding-bottom-sm">
				<view class="padding-sm">
					<view class="bg-gradual-purple padding radius text-center shadow-blur">
						<view class="text-sm">团队人数</view>
						<view class="margin-top-sm text-Abc">1</view>
					</view>
				</view>
			
				<view class="padding-sm">
					<view class="bg-gradual-blue padding radius text-center shadow-blur">
						<view class="text-sm">团队奖励</view>
						<view class="margin-top-sm text-Abc">0</view>
					</view>
				</view>
				
				<view class="padding-sm">
					<view class="bg-gradual-purple padding radius text-center shadow-blur">
						<view class="text-sm">收客奖励</view>
						<view class="margin-top-sm text-Abc">1</view>
					</view>
				</view>
			
			</view>
			<!-- <scroll-view scroll-x class="padding response cu-steps steps-bottom" :scroll-into-view="'scroll-2'"
			 scroll-with-animation>
				<view class="cu-item padding-lr-xl" :class="index>0?'':'text-green'" v-for="(item,index) in 3" :key="index" :id="'scroll-' + index">
					门店经理 {{index + 1}} <text class="num" :data-index="index + 1"></text>
				</view>
			</scroll-view> -->
		</view>
		<scroll-view scroll-x class="bg-green nav text-center">
			<view class="cu-item" :class="'teams' == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="teams">
				<text class="cuIcon-camerafill"></text> 团队人员
			</view>
			<view class="cu-item" :class="'orders' == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="orders">
				<text class="cuIcon-upstagefill"></text> 团队订单
			</view>
		</scroll-view>
	
		<scroll-view scroll-y class="page">
			<view v-for="(item,index) in teamsList" :key="index" v-if="index==TabCur" class="cu-list menu sm-border card-menu margin-top">
				<view v-if="'teams' == index" :class="menuArrow?'arrow':''">
					<view class="content">
						<uni-collapse accordion="true">
						    <uni-collapse-item v-for="(ite,ind) in item" :title="role[ind]">
						        <view v-for="(te,nd) in ite" style="padding: 30upx;">
						            {{ te.phone }}
						        </view>
						    </uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view v-else :class="menuArrow?'arrow':''">
					<view class="content">
						{{ index }}
					</view>
				</view>
				
				<!-- <view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view> -->
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
	
</template>

<script>
	export default{
		name:"team",
		props: ['datas'],
		data(){
			return {
				TabCur: 'teams',
				scrollLeft: 0,
				menuArrow: false,
				role:{
					ordinary: '普通客户',
					store: '门店经理',
					department: '部门经理',
					director: '运营总监',
					player: '酱紫玩家'
				}
			}
		},
		computed: {
			teamsList: function(){
				return this.datas
			}
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
