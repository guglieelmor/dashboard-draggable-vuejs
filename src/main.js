import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes } from './router/router'
import store from './store/store'
import axios from './axios/axios'

import "halfmoon/css/halfmoon.min.css"
import "halfmoon/css/halfmoon-variables.min.css"

import App from './App';

Vue.prototype.$http = axios;

Vue.use(VueRouter);

const router = new VueRouter({ routes })

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})
