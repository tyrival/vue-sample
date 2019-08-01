import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import './assets/styles/common/element-override/index.scss'
import ajax from './plugin/ajax'
import router from './router'
import store from './store'
import App from './App'
import "./fonts/iconfont.css"

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)
Vue.prototype.ajax = ajax

const app = new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')

/**
 * 屏蔽右键菜单
 * @returns {boolean}
 */
// document.oncontextmenu = function () {
// 	return false
// }
