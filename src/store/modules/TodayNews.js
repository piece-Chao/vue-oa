import api from '../../api/api'
import * as types from '../mutationsType'

const state = {
  todayNews: Object.create(null)
}

const mutations = {
  [types.GET_TODAY_NEWS_LIST]: (state, payload) => {
    state.todayNews = payload
  }
}

const actions = {
  reqTodayNewsList ({commit}) {
    api.request({
      type: 'GET',
      api: 'https://www.apiopen.top/journalismApi',
      other: true,
      onSuccess: (res) => {
        console.log(res)
        commit('getTodayNewsList', res)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
