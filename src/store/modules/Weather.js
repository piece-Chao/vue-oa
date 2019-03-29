import api from '../../api/api'
import * as types from '../mutationsType'

const state = {
  weatherMes: '',
  todayWeather: '',
  showWeather: false
}

const mutations = {
  [types.GET_WEATHER_MES]: (state, payload) => {
    if (payload) {
      state.weatherMes = payload
      if (Array.isArray(payload.forecast) && payload.forecast.length > 0) {
        state.todayWeather = payload.forecast[0]
      }
    }
  },

  [types.TOGGLE_WEATHER]: (state, payload) => {
    state.showWeather = payload
  }
}

const actions = {
  reqWeatherMes: ({commit}, payload) => {
    api.request({
      methods: 'GET',
      api: 'https://www.apiopen.top/weatherApi?city=' + payload,
      onSuccess: (res) => {
        if (res) {
          commit('getWeatherMes', res)
        } else {
          window.alert('未获取到相关数据')
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
