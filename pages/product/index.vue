<template>
	<view>
		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="2000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill"></image>
					<!-- <video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video> -->
				</view>
			</swiper-item>
		</swiper>
		
		<view class="bg-white margin">
			<view class="text-left text-black text-lg padding-top-sm padding-left">{{ product.title }}</view>
			<view class="text-left text-red text-sm padding-top-sm padding-left">¥{{ product.price }}</view>
			<view class="text-left text-sm padding-top-sm padding-left padding-bottom-sm">销量{{ product.sold_count }}</view>
		</view>
		<view class="bg-white margin">
			
			<view class="cu-form-group">
				<view class='padding-sm flex flex-wrap'>
					<view class="padding-xs" v-for="(item,index) in SkuList" :key="index">
						<view class='cu-tag' :class="'line-red'" @tap="checkSku" :data-sku="item.id" :data-name="item.title" :data-price="item.price">{{item.title}}</view>
					</view>
				</view>
			</view>
			
			<!-- <view class="cu-form-group">
				<view class="title">出发日期</view>
				<picker mode="date" :value="date" start="2019-09-01" end="2019-11-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view> -->
			
			<view class="cu-form-group">
				<view class="title">备注</view>
				<input placeholder="输入备注" name="input" v-model="mark"></input>
				<!-- <text class='cuIcon-locationfill text-orange'></text> -->
			</view>
			
		</view>
		
		<view class="bg-white margin">
			<scroll-view scroll-x class="bg-white nav text-center">
				<view class="cu-item" :class="index==TabCur?'text-blue cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect" :data-id="index">
					{{item.title}}
				</view>
			</scroll-view>
			<view v-for="(item,index) in tabList" :key="index" v-if="index==TabCur" class="text-center">
				<view v-html="item.content"></view>
			</view>
		</view>
		<!-- 未购买 购买按钮 -->
		<view class="cu-bar bg-white tabbar border foot" style="z-index: 800;">
			<view class="bg-red submit" @tap="showModal()">立即订购</view>
		</view>

		<view class="cu-modal" :class="dialogModal" style="z-index: 900;">
			<view class="cu-dialog">
				<view class="cu-bar bg-f06c7a justify-end">
					<input class="basis-lg" placeholder="请输入验证码" v-model="captchaCode" placeholder-style="color: rgba(255,255,255,0.8);" />
					<image class="basis-sm pic-captcha margin-right" @click="getCaptchaCode()" :src="captcha.imageContent"></image>
				</view>
				<view class="cu-bar bg-f06c7a justify-end">
					<view class="action">
						<button class="cu-btn bg-f06c7a margin-left" @tap="hideModal">确定</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		orderaptcha,
		productOrder,
		getProductsOfDetails,
	} from '../../utils/api.js'
	export default {
		data() {
			return {
				dialogModal: false,
				captchaCode: "",
				captcha: {},
				cardCur: 0,
				TabCur: 0,
				dotStyle: false,
				date: '2019-09-09',
				product: {
					'title': null
				},
				swiperList: [],
				tabList: {},
				SkuList: [],
				SkuId: null,
				amount: 1,
				mark: ''
			}
		},
		async onLoad(RouterOptions) {
			// 获取选择的类型
			this.id = RouterOptions.id;
			
			// 获取商品信息
			let productResponse = await getProductsOfDetails({id: this.id});
			
			// 获取成功
			if(productResponse.statusCode === 200){
				//console.log(productResponse);
				this.product = productResponse.data;
				this.swiperList = productResponse.data['image']
				this.tabList = [
					{title: '商品详情','content': productResponse.data.product_detail},
					{title: '行程详情','content': productResponse.data.journey_detail},
					{title: '价格详情','content': productResponse.data.cost_detail}
				]
				this.SkuList = productResponse.data.sku.data
				this.product.title = this.SkuList[0].title;
				this.product.price = this.SkuList[0].price;
				this.SkuId = this.SkuList[0].id;
			}
			
			this.TowerSwiper('swiperList');
		},
		onShow() {
			
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			checkSku(e) {
				//console.log(e);
				this.product.title = e.target.dataset.name;
				this.product.price = e.target.dataset.price;
				this.SkuId = e.target.dataset.sku;
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			async showModal() {
				//console.log('打开模态窗');
				// 验证表单提交信息
				if(!this.SkuId){
					uni.showToast({
						title: '请选择商品',
						icon: "none"
					});
					
					return false;
				}
				
				// 获取验证码
				let captchaResponse = await orderaptcha();
				// 创建验证码成功
				if(captchaResponse.statusCode === 201){
					this.captcha = {
						key: captchaResponse.data.captcha_key,
						imageContent: captchaResponse.data.captcha_image_content,
						expiredAt: Date.parse(captchaResponse.data.expired_at)
					}
				}
				this.dialogModal = 'show';
			},
			async hideModal() {
				// 创建订单
				let orderResponse = await productOrder({
					captcha_key: this.captcha.key,
					captcha_code:this.captchaCode,
					remark: this.remark,
					type: 'product',
					items: [{
						sku_id: this.SkuId,
						amount: this.amount,
						// departure_time: this.date,
					}]
				});
				
				// 订单创建成功
				if(orderResponse.statusCode === 201){
					//console.log(orderResponse);
					uni.showToast({
						title: '下单成功',
						icon: "success"
					});
					uni.navigateTo({
						url: '/pages/user/orders'
					})
				}
				this.dialogModal = false;
			},
			async getCaptchaCode() {
				// 获取验证码
				let captchaResponse = await orderaptcha();
				// 创建验证码成功
				if(captchaResponse.statusCode === 201){
					this.captcha = {
						key: captchaResponse.data.captcha_key,
						imageContent: captchaResponse.data.captcha_image_content,
						expiredAt: Date.parse(captchaResponse.data.expired_at)
					}
				}
			}
		}
	}
</script>

<style>
	
	page{
		height: 100%;
	}
	
	.bg-f06c7a {
		background-color: #f06c7a;
		color: #ffffff;
		height: 100%;
	}
	
	.pic-captcha {
		height: 10vw;
	}
</style>
