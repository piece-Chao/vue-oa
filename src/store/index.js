import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import * as mutations from './mutations'
import * as actions from './actions'
import Banner from './modules/Banner'
import Table from './modules/Table'
import Chars from './modules/Chars'
import Login from './modules/Login'
import WaterFall from './modules/WaterFall'
import Notepad from './modules/Notepad'
import Upload from './modules/Upload'
import UserSetUp from './modules/UserSetUp'
import TodayVideo from './modules/TodayVideo'
import TodayNews from './modules/TodayNews'
import Weather from './modules/Weather'

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
    Login,
    WaterFall,
    Notepad,
    Upload,
    UserSetUp,
    TodayVideo,
    TodayNews,
    Weather
  },
  plugins: process.env.NODE_ENV !== 'production' ? [logger] : []
})
