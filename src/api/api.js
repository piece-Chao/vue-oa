import { Loading } from 'element-ui'
import Vue from 'vue'
let vue = new Vue()

export default {
  request ({
    methods = 'GET',
    api = '',
    param = {},
    onSuccess: successCb = res => {},
    onErr: errCb = err => {
      console.log(err)
      vue.$message({
        message: '请求失败'
      })
    },
    errCodes = {}
  }) {
    let params = {
      b: param,
      c: {}
    }
    console.log('Request URL:' + api, param)
    let load = Loading.service({ spinner: 'responseImg', background: 'rgba(255, 255, 255, 0)', fullscreen: false })
    vue.$http(api, methods, JSON.stringify(params)).then(res => {
      console.log('Response URL: ' + api, res.data)
      let { data, msg, code } = res.data
      if (msg) {
        successCb(data)
      } else {
        if (code in errCodes) {
          let msg = '请求失败'
          msg = errCodes[code]
          vue.$message({
            message: msg
          })
        }
      }
      load.close()
    },
    err => {
      load.close()
      errCb(err)
    })
  }
}
