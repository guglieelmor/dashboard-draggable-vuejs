<template>
    <Main>

      <grid-layout :layout.sync="layout"
                 :col-num="12"
                 :row-height="30"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
                 :vertical-compact="true"
                 :use-css-transforms="true"
      >
        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   @resize="resizeEvent"
                   @resized="resizedEvent"
                   class="card"
        >
          <Charts type="chartOptions" ref="charts"></Charts>
        </grid-item>
      </grid-layout>

    </Main>
</template>

<script>
  import Main from "../Main";
  import Charts from "../../components/Charts";
  import axios from "axios";
  import VueGridLayout from 'vue-grid-layout';

  const http = axios.create();

  export default {
    name: 'home',
    components: {
      Main,
      Charts,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    mounted() {
      http.get('/MOCK_DATA.json').then(response => {
        this.$store.commit("SET_LIST", response.data);
      });
    },
    methods: {
      resizeEvent: function(i, newH, newW, newHPx, newWPx){
        // this.$refs.charts[i].chart.reflow();
        const msg = "CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx;
        console.log(msg)
        this.$refs.charts[i].chart.setSize(newWPx, newHPx);
      },
      resizedEvent: function(i, newX, newY, newHPx, newWPx){
        // this.$refs.charts[i].chart.setSize(newX * 100, newY * 80);
      },
    },
    data () {
      return {
        columns: {xss: 1, xs: 1, sm: 2, md: 2, lg: 4},
        layout: [
          {"x":0,"y":0,"w":4,"h":10,"i":"0"}
        ],
        draggable: true,
        resizable: true,
        index: 0
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
