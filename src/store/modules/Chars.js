import * as types from '../mutationsType'
import api from '../../api/api'

const state = {
  chartData: []
}

const mutations = {
  [types.CHARS_ROW_DATA]: (state, payload) => {
    state.chartData = payload.chartData
  }
}

const actions = {
  getCharsRowData: ({commit}) => {
    api.request({
      methods: 'GET',
      api: 'http://mc.data/api-dev/chars',
      onSuccess: (res) => {
        console.log(res)
        commit('charsRowData', res)
      },
      errCodes: {}
    })
  }
}

export default {
  state,
  mutations,
  actions
}
