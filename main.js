import Vue from 'vue'
import store from './store'
import App from './App'

// 酱紫
import tourism from './pages/tourism/home.vue'
Vue.component('tourism',tourism)

// 团队
import team from './pages/team/home.vue'
Vue.component('team',team)

// 个人中心
import user from './pages/user/home.vue'
Vue.component('user',user)

// 导航栏
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import uniCollapse from './components/uni-collapse/uni-collapse.vue'
Vue.component('uni-collapse', uniCollapse)

import uniCollapseItem from './components/uni-collapse-item/uni-collapse-item.vue'
Vue.component('uni-collapse-item', uniCollapseItem)

import uniList from './components/uni-list/uni-list.vue'
Vue.component('uni-list', uniList)

import uniListItem from './components/uni-list-item/uni-list-item.vue'
Vue.component('uni-list-item', uniListItem)

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store;

const app = new Vue({
    ...App
})
app.$mount()
