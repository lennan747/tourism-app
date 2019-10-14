<template>
	<view>
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<!-- <view class="cu-bar bg-white justify-end">
					<view class="content">Modal标题</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view> -->
				<view class="padding-xl">
					开发中
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				modalName: 'Modal'
			}
		}
	}
</script>

<style>
</style>
