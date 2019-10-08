import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken, setParent } from '../utils/api.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userInfo: {},
		parantId: 0,
		config: {}
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
		}
	}
})

export default store