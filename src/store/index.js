import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as mutations from './mutations'
import * as actions from './actions'
import Banner from './modules/Banner'
import Table from './modules/Table'
import Chars from './modules/Chars'
import Login from './modules/Login'

Vue.use(Vuex)

const logger = createLogger({
  collapsed: false
})

export default new Vuex.Store({
  mutations,
  actions,
  modules: {
    Banner,
    Table,
    Chars,
    Login
  },
  plugins: process.env.NODE_ENV !== 'production' ? [logger] : []
})
