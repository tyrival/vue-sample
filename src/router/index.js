import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	/*mode: 'history',*/
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	}]
})

/**
 * 全局路由守护，当token不存在时，可自动跳转到登陆页
 */
// router.beforeEach((to, from, next) => {
// 	if (to.path !== "/login" && !store.state.token) {
// 		next("/login")
// 	} else {
// 		next()
// 	}
// })

export default router
