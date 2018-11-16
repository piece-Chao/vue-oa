const actions = {
  saveUserInfo: (context, payload) => {
    window.localStorage.setItem('oaDataItem', JSON.stringify(payload))
  }
}

export default {
  actions
}
