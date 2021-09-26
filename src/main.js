import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import axios from './axios/axios';

import Home from './components/home/Home.vue'

import "halfmoon/css/halfmoon.min.css"
import "halfmoon/css/halfmoon-variables.min.css"

Vue.use(VueRouter);


Vue.prototype.$http = axios;

new Vue({
  store,
  el: '#app',
  render: h => h(Home)
})
