import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/home/Home.vue'

import "halfmoon/css/halfmoon.min.css"
import "halfmoon/css/halfmoon-variables.min.css"
import "halfmoon/js/halfmoon"

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(Home)
})
