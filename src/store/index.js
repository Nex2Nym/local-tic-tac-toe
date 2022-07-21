import Vue from 'vue'
import Vuex from 'vuex'
import { settings } from './modules/settings'
import { gameBoard } from './modules/gameBoard'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    settings,
    gameBoard
  }
})