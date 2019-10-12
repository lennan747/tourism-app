<template>
	<view>
		<view class="cu-list menu-avatar margin">
			<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in bankList" :key="index"
			 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
				<view class="cu-avatar lg bg-white" :style="[{backgroundImage:'url(/static/'+ item.type +'.png)'}]"></view>
				<view class="content">
					<view class="text-xxl padding-lr">{{item.account}}</view>
					<view class="flex justify-between margin-top-sm text-gray">
						 <text class="margin-left">{{ item.card_name }}</text>
						 <text class="margin-right">{{ item.name }}</text>
				    </view>
				</view>
				<!-- <view class="action">
					<view class="text-grey text-xs"></view>
					<view class="sm">{{item.name}}</view>
				</view> -->
				<view class="move">
					<view class="bg-grey" @tap.stop="edit(item)">修改</view>
					<view class="bg-red" @tap.stop="del(item.id,index)">操作</view>
				</view>
			</view>
			<view class="padding-lr margin-top-sm text-center text-gray"><text>标签向左滑动操作</text></view>
		</view>
		<view class="cu-bar bg-white tabbar border foot">
			<view class="bg-red submit" @tap="add">新增银行卡</view>
		</view>
	</view>
</template>
<script>
	import { bankList,deletBankCard } from '../../utils/api.js'
	export default {
		data() {
			return {
				modalName: null,
				isSelect:false,
				listTouchStart: 0,
				listTouchDirection: null,
				bankList: {}
			};
		},
		async onShow() {
			await this.loadData()
		},
		onLoad() {
	
		},
		methods:{
			// 加载银行卡
			async loadData() {
				let response = await bankList();
				if(response){
					this.bankList = response.data;
					console.log(this.bankList);
				}
			},
			
			// 编辑银行卡
			edit(row){
				uni.setStorage({
					key:'bank',
					data:row,
					success() {
						uni.navigateTo({
							url:"/pages/user/editcard?type=edit"
						})
					}
				});
				
			},
			// 添加银行卡
			add(){
				uni.navigateTo({
					url:"/pages/user/editcard?type=add"
				})
			},
			
			async del(id,index){
				uni.showModal({
					title: '删除提示',
					content: '你将删除这张银行卡嘛',
					success: async (res)=>{
						if (res.confirm) {
							await deletBankCard(id);
							await this.loadData();
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});			
			},
			select(row){
				//是否需要返回地址(从订单确认页跳过来选收货地址)
				if(!this.isSelect){
					return ;
				}
				uni.setStorage({
					key:'selectAddress',
					data:row,
					success() {
						uni.navigateBack();
					}
				})
			},
			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},
			
			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},
			
			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
</style>
