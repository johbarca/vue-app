import axios from 'axios'

export const http = axios.create({
  //   baseURL: 'http://localhost:3000'
  baseURL: '/api'
})

const httpPlugin = {}

httpPlugin.install = function (Vue, options) {

  Vue.prototype.$http = http
}
export default httpPlugin
