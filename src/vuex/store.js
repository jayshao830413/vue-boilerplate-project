import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
	isLogin: false
}

const mutations = {
	userLoggedIn (state) {
		debugger
		state.isLogin = true
	}
}
export default new Vuex.Store({
  state,
  mutations
})
