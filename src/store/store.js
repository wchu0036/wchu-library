import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    role: null
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status
    },
    setRole(state, role) {
      state.role = role
    }
  },
  actions: {
    login({ commit }, role) {
      console.log(role)
      commit('setAuthentication', true)
      commit('setRole', role)
    },
    logout({ commit }) {
      commit('setAuthentication', false)
      commit('setRole', null)
    }
  }
})
