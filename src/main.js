/*
入口js
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// Vue.prototype.HOST='/api'
import Axios from "axios"
Vue.prototype.$axios = Axios
Axios.defaults.baseURL = "http://localhost:4000/"
new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用vue-router
  store //使用vuex
})
