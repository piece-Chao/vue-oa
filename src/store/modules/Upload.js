import * as types from '../mutationsType'

const state = {
  fileList: [],
  imgsSrc: [],
  previewList: []
}

const mutations = {
  [types.CHANGE_FILELIST]: (state, payload) => {
    state.fileList = payload
  },

  [types.SUBMIT_UPLOAD]: (state, payload) => {
    let fileList = state.fileList
    let imgList = []
    state.previewList = []
    state.imgsSrc = []
    for (let i of fileList) {
      let type = i.raw.type.split('/')[0]
      switch (type) {
        case 'image':
          let img = new Image()
          img.src = i.url
          img.onload = () => {
            imgList.push({
              src: i.url,
              msrc: i.url,
              alt: i.file_name,
              w: 600,
              h: 600
            })
          }
          state.imgsSrc = imgList
          break
        case 'application':
          state.previewList.push(i)
          break
        default :
          state.previewList.push(i)
      }
    }
  }
}

export default {
  state,
  mutations
}
