// 网路请求
import request from '../common/request/request.js'

const api_host = 'http://tourism.cam/api/'
// 全局配置
request.setConfig({
	baseUrl: api_host,
})

// 设置请求拦截器
request.interceptors.request(config => {
	uni.showLoading({
		title: '加载中...'
	})
	// return false; // 终止请求
	// return Promise.reject('error from request interceptors'); // 向外层抛出错误，用catch捕获
	return config; // 返回修改后的配置，如未修改也需添加这行
})

// 设置响应拦截器
request.interceptors.response(res => {
	// 接收请求，执行响应操作
	// 您的逻辑......
	uni.hideLoading();
	
	// 401 验证失败
	if (res.statusCode === 401 || res.statusCode === 422) {
		uni.showToast({
			title: res.data.message,
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

export async function getProductsOfDetails (datas) {
	let response = await request.get('products/show',{
		data: {
			id: datas.id ? datas.id : 1
		}
	})
	
	return response;
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
	console.log(datas);
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
			console.log(response);
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
				parent_id: datas.parent_id,
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
