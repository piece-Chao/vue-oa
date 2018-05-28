import * as types from '../mutationsType'
import api from '../../api/api'

const state = {
  ImageData: []
}

const mutations = {
  [types.BANNER_DATA]: (state, payload) => {
    state.ImageData = payload.ImgItem
  }
}

const actions = {
  getImageData: ({commit}) => {
    api.request({
      methods: 'GET',
      api: 'http://mc.data/api-dev/banner',
      onSuccess: (res) => {
        commit('bannerData', res)
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
