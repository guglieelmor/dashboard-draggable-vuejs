import Vue from 'vue'
import VueRouter from 'vue-router'
import HighchartsVue from 'highcharts-vue'
import store from './store/store'

import Highcharts from 'highcharts'
import darkUnica from "highcharts/themes/dark-unica";


import Home from './components/home/Home.vue'

import "halfmoon/css/halfmoon.min.css"
import "halfmoon/css/halfmoon-variables.min.css"

Vue.use(VueRouter);

// darkUnica(Highcharts);
Vue.use(HighchartsVue)

new Vue({
  store,
  el: '#app',
  render: h => h(Home)
})
