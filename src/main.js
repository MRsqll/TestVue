// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import echarts from 'echarts'
import axios from 'axios'
import dfilters from './view/dFilters'
// 使mock生效
import './mock'

for (let key in dfilters) {
  Vue.filter(key, dfilters[key])
}


// 引入echarts
// Vue.prototype.$echarts = echarts

import thisTable from './view/eleComponent/index'
Vue.use(thisTable)

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$http = axios.create({
    baseURL: 'http://localhost:3333/api'
})

Vue.config.productionTip = false

let store = new Vuex.Store({
  state: {
    totalPrice: 0,
    getMoney: ''
  },
  getters: {

  },
  mutations: {
    increment (state,price) {
      state.totalPrice += price
    },
    decrement (state,price) {
      state.totalPrice -= price
    },
    getPrice (state, price) {
      state.getMoney = price
    }
  },
  actions: {

  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
