import axios from 'axios'
import store from '../store/index'
import API from "../config/api"
import CONST from "../config/const"
import {Message} from 'element-ui'

/**
 * http request 拦截器
 * 统一注入token到请求头
 */
axios.interceptors.request.use(
		config => {
			if (store.state.token && !config.headers[CONST.AJAX.TOKEN]) {
				config.headers[CONST.AJAX.TOKEN] = store.state.token
			}
			return config
		},
		error => {
			return Promise.reject(error)
		},
)

/**
 * http response 拦截器
 * 统一处理token以及返回的错误消息
 */
axios.interceptors.response.use(
		response => {
			// 当向服务端发送请求时，更新token
			if (response.request.responseURL.indexOf(API.SERVER_URL) === 0) {
				store.commit(CONST.MUTATIONS.SET_TOKEN, response.headers[CONST.AJAX.TOKEN] || null)
				let data = response && response.data
				if (data && data.success === false) {
					Message({
						type: "error",
						dangerouslyUseHTMLString: true,
						message: `<strong>错误 ${data.errorCode}</strong> : ${data.message}`
					})
				}
				return data
			} else {
				return response
			}
		},
		error => {
			let data = error && error.response && error.response.data
			if (data) {
				Message({
					type: "error",
					dangerouslyUseHTMLString: true,
					message: data.status ? `<strong>错误 ${data.status}</strong> : ${data.message}` : data
				})
				return Promise.reject(error.response)
			} else {
				Message({
					type: "error",
					dangerouslyUseHTMLString: true,
					message: '服务器无响应，请联系管理员。'
				})
				return Promise.reject()
			}
		},
)

export default axios
