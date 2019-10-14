<template name="team">
	<view>
		<view v-if="nullTeam">
			<view class="bg-gradual-green padding shadow-blur">
				<view class="flex solid-bottom align-center">
					<view class="margin padding-lr text-sm">
						<view class="text-center" @click="erweima">
							<view class="text-red cuIcon-qrcode" style="font-size: 100upx;"></view>
							<view class="text-sm">推广二维码</view>
						</view>
					</view>
					<view class="text-sm radius">
						<view class="padding-lr">
							<view class="text-sm margin-tb-sm"><text class="padding-sm text-red">邀请码</text><text>{{teams.invite_code.code}}</text></view>
							<view class="text-sm margin-tb-sm" v-if="userInfo.parent"><text class="padding-sm text-red">邀请人</text><text>{{ userInfo.parent.name}}</text></view>
						</view>
					</view>
				</view>
				<view class="cu-list grid col-3 no-border">
					<view class="cu-item">
						<view class="nav-title text-red">{{ upgrade[userInfo.identity] }}</view>
						<view class="margin-top-sm text-sm text-black">你的等级</view>
					</view>
					<view class="cu-item" v-if="upgrade[userInfo.identity] != 'player'">
						<view class="nav-title text-red">¥{{ commissionsCount.store_d + commissionsCount.store_t }}</view>
						<view class="margin-top-sm text-sm text-black">团队奖励</view>
					</view>
					<view class="cu-item" v-if="upgrade[userInfo.identity] == 'player'">
						<view class="nav-title text-red">¥{{ commissionsCount.player}}</view>
						<view class="margin-top-sm text-sm text-black">团队奖励</view>
					</view>
					<view class="cu-item">
						<view class="nav-title text-red">¥{{ commissionsCount.tourism_d + commissionsCount.tourism_t }}</view>
						<view class="margin-top-sm text-sm text-black">收客奖励</view>
					</view>
					
				</view>
			</view>

			<scroll-view scroll-x class="bg-white nav text-center">
				<view class="cu-item" :class="'teams' == TabCur ? 'text-red cur' : ''" @tap="tabSelect" data-id="teams">
					<text class="cuIcon-group"></text>人员({{ teamsCount }}人)
				</view>
				<view class="cu-item" :class="'orders' == TabCur ? 'text-red cur' : ''" @tap="tabSelect" data-id="orders">
					<text class="cuIcon-sort"></text>订单({{ ordersCount }}笔)
				</view>
				<view class="cu-item" :class="'commissions' == TabCur ? 'text-red cur' : ''" @tap="tabSelect" data-id="commissions">
					<text class="cuIcon-selectionfill"></text>奖励({{ commissionsCount.count }}条)
				</view>
			</scroll-view>
			<scroll-view scroll-y class="page">
				<view v-for="(item,index) in teamsAndOrdersAndCommissionsList" :key="index" v-if="index==TabCur" class="cu-list menu sm-border card-menu margin-top">
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
									<view class="flex justify-between" style="padding: 30upx;">
										<view class="text-sm">订单用户</view>
										<view class="text-sm">订单号</view>
										<view class="text-sm">支付状态</view>
									</view>
									<view class="flex justify-between" v-for="(te,nd) in ite" style="padding: 30upx;">
										<view class="text-sm">{{ te.user_name}}</view>
										<view class="text-sm">{{ te.no }}</view>
										<view class="text-sm">{{ te.paid_at == null ? '未支付' : '已支付'}}</view>
									</view>
								</uni-collapse-item>
							</uni-collapse>
						</view>
					</view>
					<view v-if="'commissions' == index" :class="menuArrow?'arrow':''">
						<view class="content">
							<uni-collapse accordion="true">
								<uni-collapse-item v-for="(ite,ind) in item" :title="commissions[ind]+'('+ commissionsCount[ind] +'¥)'">
									<view class="flex justify-between" style="padding: 30upx;">
										<view class="text-sm">订单号</view>
										<view class="text-sm">奖励</view>
									</view>
									<view class="flex justify-between" v-for="(te,nd) in ite" style="padding: 30upx;">
										<view>{{ te.no }}</view>
										<view>{{ te.money }}¥</view>
									</view>
								</uni-collapse-item>
							</uni-collapse>
						</view>
					</view>
				</view>
				<view class="cu-tabbar-height"></view>
			</scroll-view>
			<view class="cu-modal" :class="qrShow=='Image'?'show':''">
				<view class="cu-dialog bg-white">
					<view class="margin">
						<image :src="qrData" style="width: 640upx;height: 1008upx;"></image>
					</view>
					<view class="cu-bar bg-white">
						<view class="action margin-0 flex-sub  solid-left" @tap="guanbi">关闭</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<view class="cu-modal" :class="modalName=='Modal'?'show':''">
				<view class="cu-dialog">
					<view class="cu-bar bg-white justify-end">
						<view class="content">你还没团队</view>
						<view class="action" @tap="hideModal">
							<text class="cuIcon-close"></text>
						</view>
					</view>
					<view class="padding-xl bg-white">
						<view class="flex justify-between">
							<view class="margin-left padding-sm text-center bg-red radius" @tap="go(0)">成为门店经理</view>
							<view class="margin-right padding-sm text-center bg-red radius" @tap="go(1)">成为酱紫玩家</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import canvas_x from '../../components/mg-h5hb/common/canvas_x.js'
	export default {
		name: "team",
		props: ['teams', 'config'],
		data() {
			return {
				modalName: 'Modal',
				qrShow: null,
				qrData: null,
				canvasId: 'default_PosterCanvasId',
				val: "",
				TabCur: 'teams',
				scrollLeft: 0,
				menuArrow: false,
				role: {
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
					director: '运营总监',
					player: '酱紫玩家'
				},
				bgUrl: '',
				goList:['/pages/tourism/join?type=store','/pages/tourism/join?type=player','/pages/index/index'],
			}
		},
		computed: {
			// 时候有团队
			nullTeam: function() {
				console.log(this.teams);
				return Object.keys(this.teams).length == 0 ? false : true;
			},
			// 从缓存中获取用户信息
			userInfo: function() {
				return uni.getStorageSync('user_info');
			},
			// 团队与订单列表
			teamsAndOrdersAndCommissionsList: function() {
				return this.teams
			},
			// 团队人数统计
			teamsCount: function() {
				let count = 0;
				let teams = this.teams.teams;
				if (Object.keys(teams).length == 0) {
					return count;
				}
				Object.keys(teams).forEach(function(key) {
					count += teams[key].length;
				})
				return count;
			},
			// 团队订单统计
			ordersCount: function() {
				let count = 0;
				let orders = this.teams.orders;
				if (Object.keys(orders).length == 0) {
					return count;
				}
				Object.keys(orders).forEach(function(key) {
					count += orders[key].length;
				})
				return count;
			},
			// 分成统计
			commissionsCount: function() {
				let count = 0;
				let tourismCommissionD = 0;
				let tourismCommissionT = 0;
				let storeCommissionD = 0;
				let storeCommissionT = 0;
				let playerCommission = 0;
				let Commissions = this.teams.commissions;
				let Commission = Object;
				if (Object.keys(Commissions).length == 0) {
					return {
						tourism_t: 0,
						tourism_d: 0,
						store_d: 0,
						store_t: 0,
						player: 0,
						count: 0
					}
				}
				Object.keys(Commissions).forEach(function(key) {
					count += Commissions[key].length;
					Commission = Commissions[key];
					if (key == 'tourism_d') {
						//console.log('tourism_d');
						Object.keys(Commission).forEach(function(k) {
							//console.log( Commission[k]['money']);
							tourismCommissionD = tourismCommissionD + Number(Commission[k]['money'])
						})
					}
					if (key == 'tourism_t') {
						Object.keys(Commission).forEach(function(k) {
							tourismCommissionT = tourismCommissionT + Number(Commission[k]['money'])
						})
					}
					if (key == 'store_d') {
						//console.log('store_d');
						Object.keys(Commission).forEach(function(k) {
							//console.log( Commission[k]['money']);
							storeCommissionD = storeCommissionD + Number(Commission[k]['money'])
						})
					}
					if (key == 'store_t') {
						Object.keys(Commission).forEach(function(k) {
							storeCommissionT = storeCommissionT + Number(Commission[k]['money'])
						})
					}
					if (key == 'player') {
						Object.keys(Commission).forEach(function(k) {
							playerCommission = playerCommission + Number(Commission[k]['money'])
						})
					}
				})

				return {
					tourism_d: tourismCommissionD,
					tourism_t: tourismCommissionT,
					store_d: storeCommissionD,
					store_t: storeCommissionT,
					player: playerCommission,
					count: count
				}
			}
		},
		methods: {
			hideModal(e) {
				this.modalName = null
			},
			tabSelect: function (e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			go: function(i){
				uni.navigateTo({
					url:this.goList[i]
				})
			},
			guanbi: function() {
				this.qrShow = false;
			},
			erweima: function() {
				this.qrShow = 'Image';
				if (process.env.NODE_ENV === 'development') {
					console.log('开发环境')
					this.bgUrl= '/h/static/bgshare.jpg'
				} else {
					console.log('生产环境')
					let site_config = uni.getStorageSync('site_config')
					this.bgUrl = site_config.share_poster_bg.image
				}
				canvas_x.makeImage({
					type: 'url',
					parts: [{
							type: 'image',
							url: this.bgUrl,
							//url: site_config.share_poster_bg.image,
							width: 640,
							height: 1008,
							// backgroundSize:680,
						},
						{
							type: 'qrcode',
							text: this.teams.invite_code.url,
							x: 270,
							y: 780,
							width: 120,
							height: 120,
							padding: 5,
							background: '#fff',
							level: 3
						},
						{
							type: 'text',
							text: '酱梓旅行',
							textAlign: 'center',
							lineAlign: 'TOP',
							x: 0,
							y: 717,
							color: 'black',
							size: '20px',
							// bold: true
						}
					],
					width: 640,
					height: 1008
				}, (err, data) => {
					this.qrData = data;
				})
			}
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
