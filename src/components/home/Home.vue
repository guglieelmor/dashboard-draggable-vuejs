<template>
    <Main>
      <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"

      >

        <grid-item v-for="item in layout"
           :x="item.x"
           :y="item.y"
           :w="item.w"
           :h="item.h"
           :i="item.i"
           :key="item.i"
           class="card"
        >
<!--          {{ item.x }} {{ item.y }} {{ item.w }} {{ item.h }}-->
<!--          <Pie></Pie>-->
          <highcharts :options="chartOptions" :callback="reflow"></highcharts>
        </grid-item>
      </grid-layout>
    </Main>

</template>

<script>
  import Main from "../Main";
  import Pie from "../../charts/Pie";
  import { Chart } from 'highcharts-vue'
  import VueGridLayout from 'vue-grid-layout';

  export default {
    name: 'home',
    components: {
      Main,
      Pie,
      highcharts: Chart,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    methods:{
      reflow(){
        console.log('asdklfnasldnaskldn');
      }
    },
    data () {
      return {
        columns: {xss: 1, xs: 1, sm: 2, md: 2, lg: 4},
        chartOptions: {
          chart: {
            type: 'spline'
          },
          title: {
            text: 'Sin chart'
          },
          series: [{
            data: [10, 0, 8, 2, 6, 4, 5, 5],
            color: '#6fcd98'
          }]
        },
        layout: [
          {"x":0,"y":0,"w":4,"h":10,"i":"0"}
        ]
      }
    }
  }
</script>

<style>
  .card {
    margin: 0;
    padding: 10px;
  }
</style>
