/*
入口js
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import axios from "axios"

import './mock/mockServer'//加载mockServer即可

import loading from './common/imgs/loading.gif'
import './filters' //加载过滤器


// Vue.prototype.HOST='/api'
Vue.prototype.$axios = axios
axios.defaults.baseURL = "http://localhost:4000/"
axios.defaults.withCredentials = true

//注册全局组件标签
Vue.component(Button.name, Button)//<mt-button>
Vue.use(VueLazyload, { //内部自定义了一个指令lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router, //使用vue-router
  store //使用vuex
})
