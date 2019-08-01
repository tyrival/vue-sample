import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import CONST from '../config/const'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 身份验证token
		token: "",
	},
	mutations: {
		// TOKEN保存
		[CONST.MUTATIONS.SET_TOKEN](state, payload) {
			_.set(state, "token", payload)
		},
	}
})
