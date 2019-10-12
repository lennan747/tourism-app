<template>
	<view>
		<form class="padding margin">
			<view class="cu-form-group margin">
				<view class="title">提现方式</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'微信/支付宝/银行卡'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group margin">
				<view class="title">姓名</view>
				<input placeholder="真实姓名" name="input" v-model="name"></input>
			</view>
			<view class="cu-form-group margin">
				<view class="title">账户名称</view>
				<input placeholder="银行名称/微信号昵称/支付宝昵称" name="input" v-model="card_name"></input>
			</view>
			<view class="cu-form-group margin">
				<view class="title">账户号</view>
				<input placeholder="银行卡号/微信号/支付宝账号" name="input" v-model="account"></input>
			</view>
		</form>
		<view class="padding flex flex-direction">
			<button class="cu-btn bg-red margin-tb-sm lg" v-if="editType=='add'" @tap="save">保存银行卡</button>
			<button class="cu-btn bg-red margin-tb-sm lg" v-if="editType=='edit'" @tap="edit">修改银行卡</button>
		</view>
	</view>
</template>

<script>
	import { createBankCard,editBankCard } from '../../utils/api.js'
	export default {
		data() {
			return {
				index: -1,
				picker: ['微信', '支付宝', '银行卡'],
				picker_s: ['wechat','alipay','bank'],
				editType:'edit',
				id:'',
				name:'',
				card_name:'',
				account:'',
				type: ''
			};
		},
		methods: {
			PickerChange(e) {
				//console.log(e)
				this.index = e.detail.value
			},
			onCancel(e) {
				console.log(e)
			},
			va(){
				let data={
					"type":this.picker_s[this.index],
					"name":this.name,
					"card_name":this.card_name,
					"account":this.account,
					}
				if(this.editType=='edit'){
					data.id = this.id
				}
				console.log(data.type)
				//return false;
				if(data.tyep == -1){
					uni.showToast({title:'请输入选择体现方式',icon:'none'});
					return false;
				}
				if(!data.name){
					uni.showToast({title:'请输入姓名',icon:'none'});
					return false;
				}
				if(!data.card_name){
					uni.showToast({title:'请输入账户名称名称',icon:'none'});
					return false;
				}
				if(!data.account){
					uni.showToast({title:'请输入账户号',icon:'none'});
					return false;
				}
				
				return data;
			},
			async edit(){
				let data = this.va();
				console.log(data);
				if(!data){
					return false;
				}
				
				uni.showLoading({
					title:'正在提交'
				})
				
				if(await editBankCard(data)){
					uni.hideLoading();
					uni.showToast({
						icon: 'success',
						title: '修改成功'
					})
					uni.navigateBack();
				}
			},
			async save(){
				let data = this.va();
				
				if(!data){
					return false;
				}
				
				uni.showLoading({
					title:'正在提交'
				})
				
				if(await createBankCard(data)){
					uni.hideLoading();
					uni.showToast({
						icon: 'success',
						title: '添加成功'
					})
					uni.navigateBack();
				};
			}
		},
		onLoad(e) {
			//获取传递过来的参数
			this.editType = e.type;
			if(e.type=='edit'){
				uni.getStorage({
					key:'bank',
					success: (e) => {
						this.id = e.data.id;
						this.type = e.data.type;
						this.name = e.data.name;
						this.card_name = e.data.card_name;
						this.account = e.data.account;
						if(e.data.type == 'wechat'){
							this.index = 0
						}
						if(e.data.type == 'alipay'){
							this.index = 1
						}
						if(e.data.type == 'bank'){
							this.index = 2
						}
					}
				})
			}
			
		},
	};
</script>
<style>
</style>
