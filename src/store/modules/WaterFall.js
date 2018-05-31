import * as types from '../mutationsType'
import api from '../../api/api'

const state = {
  imagesList: []
}

const mutations = {
  [types.GET_WATER_FALL_DATA]: (state, payload) => {
    state.imagesList.push(...payload)
  },

  [types.CLEAR_WATER_FALL_DATA]: (state) => {
    state.imagesList = []
  }
}

const actions = {
  reqImagesDate: ({commit}) => {
    api.request({
      methods: 'GET',
      api: 'http://mc.data/api-dev/waterfall',
      onSuccess:(res) => {
        commit('getWaterFallDate', res.waterData)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
