import * as types from '../mutationsType'
import api from '../../api/api'

const state = {
  todayVideoList: []
}

const mutations = {
  [types.GET_TODAY_VIDEO_LIST]: (state, payload) => {
    console.log(payload)
    state.todayVideoList = payload
  }
}

const actions = {
  reqTodayVideoList: ({commit}) => {
    api.request({
      type: 'GET',
      api: 'https://api.apiopen.top/todayVideo',
      other: true,
      onSuccess: (res) => {
        if (res.code === 200) {
          commit('getTodayVideoList', res.result)
        }
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
