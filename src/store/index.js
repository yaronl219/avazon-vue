import Vue from 'vue'
import Vuex from 'vuex'
import bookModule from './modules/bookModules'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bookModule
  }
})
