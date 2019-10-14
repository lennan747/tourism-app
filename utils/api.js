// 网路请求
import request from '../common/request/request.js'

let api_host = '';

if(process.env.NODE_ENV === 'development'){
    console.log('开发环境')
	api_host = 'http://tourism.cam/api/'
}else{
    console.log('生产环境')
	api_host = 'http://mb.jiangzi20.com/api/'
}
// 全局配置
request.setConfig({
	baseUrl: api_host,
})

// 设置请求拦截器
request.interceptors.request(config => {
	// return Promise.reject('error from request interceptors'); // 向外层抛出错误，用catch捕获
	return config; // 返回修改后的配置，如未修改也需添加这行
})

// 设置响应拦截器
request.interceptors.response(res => {
	// 401 验证失败
	
	if(res.statusCode === 401){
		uni.showToast({
			title: '登录失败',
			icon: "none"
		});
	}
	
	if (res.statusCode === 422) {
		uni.showToast({
			title: '请登录',
			icon: "none"
		});
	}
	
	if(res.statusCode === 422){
		uni.showToast({
			title: res.data.message,
			icon: "none"
		});
	}
	
	if(res.statusCode === 429 ){
		uni.showToast({
			title: '请求次数过多，请稍后请求',
			icon: "none"
		});
	}
	// return false;    // 阻止返回,页面不会接收返回值
	// return {message: '自定义值，来自拦截器'};   // 返回您自定义的值，将覆盖原始返回值
	// return Promise.reject('error from response interceptors') // 向外层抛出错误，用catch捕获
	return res; // 原样返回
})


export function setParent(parentId) {
	return uni.setStorageSync('parent_id', parentId)
}

// 提现列表
export async function withdraws() {
	try{
	    let response = await request.get('withdraw',{
		    header: {
			    'Authorization': 'Bearer ' + await getToken()
		    }
		})
		
		if(response.statusCode == 200){
			return response.data;
		}
	}catch(e){
		//TODO handle the exception
	}
}

// 提现
export async function createWithdraw(datas) {
	try{
		let response = await request.post('withdraw',{
			header: {
				'Authorization': 'Bearer ' + await getToken()
			},
			data: {
				application_amount: datas.application_amount,
				bank_card_id: datas.bank_card_id
			}
		})
		
		if(response.statusCode == 201){
			uni.showToast({
				icon: 'success',
				title: '提现成功'
			})
			return response;
		}
		
		if(response.statusCode != 201){
			uni.showToast({
				icon: 'none',
				title: response.data.message
			})
			return false
		}
	}catch(e){
		//TODO handle the exception
	}	
}

// 获取银行卡列表
export async function bankList () {
	try{
		let response = await request.get('bank/card',{
			header: {
				'Authorization': 'Bearer ' + await getToken()
			}
		})
		
		if(response.statusCode != 200){
			uni.showToast({
				icon: 'none',
				title: '银行卡获取失败'
			})
			return false;
		}
		return response.data;
	}catch(e){
		//TODO handle the exception
	}
}


// 添加银行卡
export async function deletBankCard (id) {
	try{
		let response = await request.delete('bank/card/'+id,{
			header: {
				'Authorization': 'Bearer ' + await getToken()
			}
		})
		if(response.statusCode == 204){
			uni.showToast({
				icon: 'none',
				title: '删除银行卡成功'
			})
			return true;
		}
		return false;
	}catch(e){
		//TODO handle the exception
	}
}

// 添加银行卡
export async function createBankCard (datas) {
	try{
		let response = await request.post('bank/card',{
			data: {
				type: datas.type,
				name: datas.name,
				card_name: datas.card_name,
				account: datas.account
			},
			header: {
				'Authorization': 'Bearer ' + await getToken()
			}
		})
		if(response.statusCode != 201){
			uni.showToast({
				icon: 'none',
				title: '添加银行卡失败'
			})
			return false;
		}
		return true;
	}catch(e){
		//TODO handle the exception
	}
}

// 修改银行卡
export async function editBankCard (datas) {

	try{
		let response = await request.put('bank/card/'+datas.id,{
			data: {
				type: datas.type,
				name: datas.name,
				card_name: datas.card_name,
				account: datas.account
			},
			header: {
				'Authorization': 'Bearer ' + await getToken()
			}
		})
		if(response.statusCode != 200){
			uni.showToast({
				icon: 'none',
				title: '添加银行卡失败'
			})
			return false;
		}
		return true;
	}catch(e){
		//TODO handle the exception
	}
}
// 商品详情
export async function getProductsOfDetails (datas) {
	try{
		let response = await request.get('products/'+ datas.id + '?include=sku')
		return response;
	}catch(e){
		//TODO handle the exception
	}
}

// 获取当前用户的团队信息
export async function team () {
	try{
		let response = await request.get('team',{
			header: {
				'Authorization': 'Bearer ' + await getToken()
			}
		})
		
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}


// 创建旅游订单
export async function productOrder (datas) {
	//console.log(datas);
	try{
		let response = await request.post('order/store-product',{
			header: {
				'Authorization': 'Bearer ' + await getToken()
			},
			data: {
				captcha_key: datas.captcha_key,
				captcha_code: datas.captcha_code,
				type: datas.type,
				remark: datas.remark,
				items: datas.items
			}
		})
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
}

// 获取推荐商品
export async function getProductsOfRecommend (datas) {
	let response = await request.get('products/recommend',{
		data: {
			page: datas.page ? datas.page : 1
		}
	})
	
	return response;
}

// 用户商品订单
export async function getTourismOrder () {
	let response = await request.get('order/tourism',{
		header: {
			'Authorization': 'Bearer ' + await getToken()
		}
	})
	
	return response;
}

// 获取会员订单
export async function getMemberOrderInfo () {
	let response = await request.get('user/member/order/info',{
		header: {
			'Authorization': 'Bearer ' + await getToken()
		}
	})
	
	return response;
}

// 获取用户信息
export async function getUserInfo() {	
	let response = await request.get('user', {
		header: {
			'Authorization': 'Bearer ' + await getToken()
		}
	})
	// 成功
	if(response.statusCode === 200){
		uni.setStorageSync('user_info',response.data)
	}
	return response;
}

// 创建会员订单
export async function memberOrder (datas) {
	//console.log(datas);
	try{
		let response = await request.post('order/store-member',{
			header: {
				'Authorization': 'Bearer ' + await getToken()
			},
			data: {
				captcha_key: datas.captcha_key,
				captcha_code: datas.captcha_code,
				type: datas.type
			}
		})
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e)
	}
}

// 获取订单验证码
export async function orderaptcha() {
	try{
		let response = await request.get('order/captcha', {
			header: {
				'Authorization': 'Bearer ' + await getToken()
			}
		})
		
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}

// 登录
export async function login(datas) {
	try{
		let response = await request.post('authorizations',{
			data: {
				phone: datas.phone,
				password: datas.password
			}
		})
		// 登录成功，保存token
		if(response.statusCode === 200){
			setToken(response.data.access_token,response.data.expires_in)
		}
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}

// 移除token
export function removeToken() {
	return uni.removeStorageSync('access_token')
}

// 设置token,设置过期时间
export function setToken(access_token,expires_in) {
	let access_token_expired_at = uni.setStorageSync('access_token_expired_at',new Date().getTime() + expires_in * 1000);
	let access_token_true = uni.setStorageSync('access_token', access_token);
	return access_token_expired_at && access_token_true;
}

// 获取token
export async function getToken() {
	let accessToken = uni.getStorageSync('access_token')
	let expiredAt   = uni.getStorageSync('access_token_expired_at')
	// 如果 token 过期了，则调用刷新方法
	if (accessToken && new Date().getTime() > expiredAt) {
		let response = await refreshToken(accessToken);
		if (response.statusCode === 200) {
			accessToken = response.data.access_token
		} else {
			// 刷新失败了，重新调用登录
			uni.reLaunch({
				url: 'pages/login/login'
			});
			return false;
		}
	}
	return accessToken;
}

// 刷新token, 利用旧access_token换新access_token
export async function refreshToken(accessToken) {
	let response = await request.put('authorizations/current', {
		header: {
			'Authorization': 'Bearer ' + accessToken
		}
	})
	
	// 200 刷新token成功
	if (response.statusCode === 200) {
		setToken(response.data.access_token,response.data.expires_in)
	}

	return response;
}

export async function register (datas) {
	try{
		let response = await request.post('users', {
			data: {
				invite_code: datas.invite_code,
				password: datas.password,
				verification_key: datas.verification_key,
				verification_code: datas.verification_code
			}
		})
		
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}

export async function verificationCodes (datas) {
	try{
		let response = await request.post('verificationCodes', {
			data: {
				captcha_key: datas.captcha_key,
				captcha_code: datas.captcha_code
			}
		})
		
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}

// 获取图片注册验证码
export async function registercaptcha (datas) {
	try{
		let response = await request.post('captchas', {
			data: {
				phone: datas.phoneNumber
			}
		})
		
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}

// 获取app配置
export async function appConfig () {
	try{
		let response = await request.get('config')
		return response;
	}catch(e){
		//TODO handle the exception
		console.log(e);
	}
}
