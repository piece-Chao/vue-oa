import api from '../../api/api'
import self from '../../main'
import router from '../../router/index'

const state = {
  userName: 'admin',
  pwd: '123456'
}

const actions = {
  user_login: (context, payload) => {
    if ((payload.userName !== context.state.userName) || (payload.pwd !==context.state.pwd)) {
      self.$message({
        message: '请输入正确的账号或密码'
      })
      return
    }
    api.request({
      methods: 'POST',
      api: 'http://mc.data/api-dev/login',
      params: {
        userName: payload.userName,
        pwd: payload.pwd
      },
      onSuccess: () => {
        router.push({name: 'Home'})
      },
      errCodes: {}
    })
  }
}

export default {
  state,
  actions
}
