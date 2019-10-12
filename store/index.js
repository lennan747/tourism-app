import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken, setParent } from '../utils/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		parantId: 0,
		config: {},
		teams: {},
		uesrOrders: false,
		bankList: false
	},
	mutations:{
		parant (state, pid) {
			state.parantId = pid;
			setParent(pid);
		},
		login(state, token) {
			state.hasLogin = true;
			setToken(token);
		},
		logout(state) {
			state.hasLogin = false;
			removeToken();
		},
		user(state, userInfo){
			state.userInfo = userInfo
		},
		config(state,config){
			state.config = config
		},
		teams(state,team){
			state.teams = team
		},
		userOrders(state,orders){
			state.uesrOrders = orders
		},
		bankList(state,banks){
			state.bankList = banks
		}
	}
})

export default store