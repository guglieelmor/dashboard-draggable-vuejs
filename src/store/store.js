import Vue from "vue";

import Vuex from "vuex";

import darkUnica from "highcharts/themes/dark-unica";
import Highcharts from 'highcharts'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataChart: [],
    filter: ''
  },
  mutations:{
    SET_DATACHART(state, obj){
      state.dataChart = obj
    },
    SET_CONFIG(state, obj){
      console.log(obj)
    },
    DARK_MODE(state, obj){
      if(obj){
        darkUnica(Highcharts);

        if (document.body.classList.contains("dark-mode")) {
          document.body.classList.remove("dark-mode");
        } else {
          document.body.classList.add("dark-mode");
        }

      }
    }
  }
})
