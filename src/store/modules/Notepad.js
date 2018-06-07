import * as types from '../mutationsType'
import api from '../../api/api'

const state = {
  notepadList: []
}

const mutations = {
  [types.GET_NOTE_PAD_DATA]: (state, payload) => {
    state.notepadList = payload
  },

  [types.DELETE_NOTE_PAD_DATA]: (state, payload) => {
    state.notepadList.splice(payload, 1)
  }
}

const actions = {
  reqNotePadList: ({commit}) => {
    api.request({
      type: 'GET',
      api: 'http://mc.data/api-dev/notepad',
      onSuccess: (res) => {
        commit('getNotePadData', res.notepadList)
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
