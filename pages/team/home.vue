<template name="team">
	<view>
		<view class="bg-img padding-sm" style="background-image: url('/static/componentBg.png')">
			<view class="flex justify-center padding-bottom-sm">
				<view class="padding-sm">
					<view class="bg-gradual-green padding radius text-center shadow-blur">
						<view class="text-sm">普通客户</view>
						<view class="margin-top-sm text-Abc">29</view>
					</view>
				</view>
				<view class="padding-sm">
					<view class="bg-gradual-blue padding radius text-center shadow-blur">
						<view class="text-sm">门店经理</view>
						<view class="margin-top-sm text-Abc">1</view>
					</view>
				</view>
				<view class="padding-sm">
					<view class="bg-gradual-purple padding radius text-center shadow-blur">
						<view class="text-sm">部门经理</view>
						<view class="margin-top-sm text-Abc">0</view>
					</view>
				</view>
			</view>
			<scroll-view scroll-x class="padding response cu-steps steps-bottom" :scroll-into-view="'scroll-2'"
			 scroll-with-animation>
				<view class="cu-item padding-lr-xl" :class="index>0?'':'text-green'" v-for="(item,index) in 3" :key="index" :id="'scroll-' + index">
					门店经理 {{index + 1}} <text class="num" :data-index="index + 1"></text>
				</view>
			</scroll-view>
		</view>
		<scroll-view scroll-x class="bg-green nav text-center">
			<view class="cu-item" :class="0==TabCur?'text-white cur':''" @tap="tabSelect" data-id="0">
				<text class="cuIcon-camerafill"></text> 普通客户
			</view>
			<view class="cu-item" :class="1==TabCur?'text-white cur':''" @tap="tabSelect" data-id="1">
				<text class="cuIcon-upstagefill"></text> 门店经理
			</view>
			<view class="cu-item" :class="2==TabCur?'text-white cur':''" @tap="tabSelect" data-id="2">
				<text class="cuIcon-clothesfill"></text> 部门经理
			</view>
		</scroll-view>
	
		<scroll-view scroll-y class="page">
			<view v-for="(item,index) in 10" :key="index" v-if="index==TabCur" class="cu-list menu sm-border card-menu margin-top">
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题 + {{index}}</text>
					</view>
				</view>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		name:"team",
		data(){
			return {
				TabCur: 0,
				scrollLeft: 0,
				menuArrow: false
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
