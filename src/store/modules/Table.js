import * as types from '../mutationsType'
import api from '../../api/api'

const state = {
  tableData: []
}

const mutations = {
  [types.TABLE_DATA]: (state, payload) => {
    state.tableData = payload.tableData
  }
}

const actions = {
  getTableData: ({commit}) => {
    api.request({
      methods: 'GET',
      api: 'http://mc.data/api-dev/table',
      onSuccess: (res) => {
        commit('tableData', res)
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
