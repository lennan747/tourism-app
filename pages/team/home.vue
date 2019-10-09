<template name="team">
	<view>
		<view class="bg-img padding-sm" style="background-image: url('/static/componentBg.png')">
			
			<view class="flex justify-center padding-bottom-sm">
				<view class="padding-sm">
					<view class="bg-gradual-purple padding radius text-center shadow-blur">
						<view class="text-sm">等级</view>
						<view class="margin-top-sm text-Abc">{{ upgrade[userInfo.identity] }}</view>
					</view>
				</view>
			</view>
			
			<view class="flex justify-center padding-bottom-sm">
				<view v-if="upgrade[userInfo.identity] != 'player'" class="padding-sm">
					<view class="bg-gradual-blue padding radius text-center shadow-blur">
						<view class="text-sm">团队奖励</view>
						<view class="margin-top-sm text-Abc">{{ commissionsCount.stored + commissionsCount.storet }}¥</view>
					</view>
				</view>
				<view v-if="upgrade[userInfo.identity] == 'player'" class="padding-sm">
					<view class="bg-gradual-purple padding radius text-center shadow-blur">
						<view class="text-sm">团队奖励</view>
						<view class="margin-top-sm text-Abc">{{ commissionsCount.player}}¥</view>
					</view>
				</view>
				<view class="padding-sm">
					<view class="bg-gradual-purple padding radius text-center shadow-blur">
						<view class="text-sm">收客奖励</view>
						<view class="margin-top-sm text-Abc">{{ commissionsCount.tourismd + commissionsCount.tourismt }}¥</view>
					</view>
				</view>
			
			</view>
		</view>
		<scroll-view scroll-x class="bg-green nav text-center">
			<view class="cu-item" :class="'teams' == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="teams">
				<text class="cuIcon-group"></text>人员({{ teamsCount }}人)
			</view>
			<view class="cu-item" :class="'orders' == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="orders">
				<text class="cuIcon-sort"></text>订单({{ ordersCount }}笔)
			</view>
			<view class="cu-item" :class="'commissions' == TabCur ? 'text-white cur' : ''" @tap="tabSelect" data-id="commissions">
				<text class="cuIcon-sort"></text>分成({{ commissionsCount.count }}条)
			</view>
		</scroll-view>
	
		<scroll-view scroll-y class="page">
			<view v-for="(item,index) in teamsAndOrdersList" :key="index" v-if="index==TabCur" class="cu-list menu sm-border card-menu margin-top">
				<view v-if="'teams' == index" :class="menuArrow?'arrow':''">
					<view class="content">
						<uni-collapse accordion="true">
						    <uni-collapse-item v-for="(ite,ind) in item" :title="role[ind]">
						        <view v-for="(te,nd) in ite" style="padding: 30upx;">
						            {{ te.name }}
						        </view>
						    </uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view v-if="'orders' == index" :class="menuArrow?'arrow':''">
					<view class="content">
						<uni-collapse accordion="true">
						    <uni-collapse-item v-for="(ite,ind) in item" :title="type[ind]">
						        <view class="flex justify-between" v-for="(te,nd) in ite" style="padding: 30upx;">
						            <view>{{ te.no }}</view>
									<view>{{ te.paid_at == null ? '未支付' : '已支付'}}</view>
						        </view>
						    </uni-collapse-item>
						</uni-collapse>
					</view>
				</view>
				<view v-if="'commissions' == index" :class="menuArrow?'arrow':''">
					<view class="content">
						<uni-collapse accordion="true">
						    <uni-collapse-item v-for="(ite,ind) in item" :title="commissions[ind]">
						        <view class="flex justify-between" v-for="(te,nd) in ite" style="padding: 30upx;">
						            <view>{{ te.money }}¥</view>
						        </view>
						    </uni-collapse-item>
						</uni-collapse>
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
		props: ['datas','user'],
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
				},
				type: {
					store: '购买门店经理',
					player: '购买酱紫玩家',
					tourism: '购买旅游',
					product: '购买商品'
				},
				commissions: {
					tourism_d: '直接收客',
					tourism_t: '团队收客',
					store_d: '直接门店经理',
					store_t: '团队门店经理',
					player: '酱紫玩家'
				},
				upgrade: {
					store: '门店经理',
					department: '部门经理',
					director: '运营总监'
				}
			}
		},
		computed: {
			userInfo: function(){
				return uni.getStorageSync('user_info');
			},
			// 团队与订单列表
			teamsAndOrdersList: function(){
				return this.datas
			},
			// 团队人数统计
			teamsCount: function(){
				let count = 0;
				let teams = this.datas.teams;
				if(Object.keys(teams).length == 0){
					return count;
				}				
				Object.keys(teams).forEach(function(key){
					count += teams[key].length;
			    })
				return count;
			},
			ordersCount: function() {
				let count = 0;
				let orders = this.datas.orders;
				if(Object.keys(orders).length == 0){
					return count;
				}				
				Object.keys(orders).forEach(function(key){
					count += orders[key].length;
				})
				return count;
			},
			// 分成统计
			commissionsCount: function(){
				let count = 0;
				let tourismCommissionD = 0;
				let tourismCommissionT = 0;
				let storeCommissionD = 0;
				let storeCommissionT = 0;
				let playerCommission = 0;
				let Commissions = this.datas.commissions;
				let Commission = Object;
				if(Object.keys(Commissions).length == 0){
					return {
						tourismt: 0,
						tourismd: 0,
						stored: 0,
						storet: 0,
						player: 0,
						count: 0
					}
				}
				Object.keys(Commissions).forEach(function(key){
					count += Commissions[key].length;
					Commission = Commissions[key];
					if(key == 'tourism_d'){
						console.log('tourism_d');
						Object.keys(Commission).forEach(function(k){
							console.log( Commission[k]['money']);
							tourismCommissionD = tourismCommissionD + Number(Commission[k]['money'])
						})
					}
					if(key == 'tourism_t'){
						Object.keys(Commission).forEach(function(k){
							tourismCommissionT = tourismCommissionD + Number(Commission[k]['money'])
						})
					}
					if(key == 'store_d'){
						console.log('store_d');
						Object.keys(Commission).forEach(function(k){
							console.log( Commission[k]['money']);
							storeCommissionD = tourismCommissionD + Number(Commission[k]['money'])
						})
					}
					if(key == 'store_t'){
						Object.keys(Commission).forEach(function(k){
							storeCommissionT = tourismCommissionD + Number(Commission[k]['money'])
						})
					}
					if(key == 'player'){
						Object.keys(Commission).forEach(function(k){
							playerCommission = tourismCommissionD + Number(Commission[k]['money'])
						})
					}
				})
				
				return {
					tourismt: tourismCommissionD,
					tourismd: tourismCommissionT,
					stored: storeCommissionD,
					storet: storeCommissionT,
					player: playerCommission,
					count: count
				}
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
