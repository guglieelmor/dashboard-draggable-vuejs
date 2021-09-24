import Vue from 'vue'
import VueRouter from 'vue-router'
import HighchartsVue from 'highcharts-vue'

import Home from './components/home/Home.vue'

import "halfmoon/css/halfmoon.min.css"
import "halfmoon/css/halfmoon-variables.min.css"

Vue.use(VueRouter)
Vue.use(HighchartsVue)

new Vue({
  el: '#app',
  render: h => h(Home)
})
