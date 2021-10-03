import Vue from "vue";

import Vuex from "vuex";

import avocado from "highcharts/themes/avocado";
import darkUnica from "highcharts/themes/dark-unica";
import Highcharts from 'highcharts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataChart: [],
    filter: '',
    theme: ''
  },
  mutations:{
    SET_DATACHART(state, obj){
      state.dataChart = obj
    },
    SET_CONFIG(state, obj){
      console.log(obj)
    },
    SET_THEME(state, obj){
      state.theme = obj;

      switch (obj){
        case 1:
          document.body.classList.remove("dark-mode");
          avocado(Highcharts);
          break;
        case 2:
          document.body.classList.add("dark-mode");
          darkUnica(Highcharts);
          break;
      }
    }
  }
})
