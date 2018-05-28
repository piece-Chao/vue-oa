import { Loading } from 'element-ui'
import Vue from 'vue'

export default {
  request ({
    methods = 'GET',
    api = '',
    param = {},
    onSuccess: successCb = res => {},
    onErr: errCb = err => {
      console.log(err)
      new Vue().$message({
        message: '请求失败'
      })
    },
    errCodes = {}
  }) {
    let params = {
      b: param,
      c: {}
    }
    let vue = new Vue()
    console.log('Request URL:' + api, param)
    let load = Loading.service({text: '正在获取数据' })
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
