<template>
    <Main>

      <grid-layout :layout.sync="layout"
                 :col-num="48"
                 :row-height="40"
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
          <Charts :type="item.g" ref="charts"></Charts>
        </grid-item>
      </grid-layout>

    </Main>
</template>

<script>
  import Main from "../Main";
  import Charts from "../../components/Charts";
  import 'halfmoon/js/halfmoon';
  import VueGridLayout from 'vue-grid-layout';

  export default {
    name: 'home',
    components: {
      Main,
      Charts,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem
    },
    mounted() {
      try{

        this.$http.get('/REQUEST_API_CONFIG.json').then(response => {
          this.$store.commit("SET_CONFIG", response.data);
          this.$store.commit("DARK_MODE", response.data.dark_mode);
          this.layout = response.data.layout;
          this.columns = response.data.columns;
        });

        this.$http.get('/REQUEST_API_DATA.json').then(response => {
          this.$store.commit("SET_DATACHART", response.data);
        });

      } catch(err){
        console.log(err);

      }
    },
    methods: {
      resizeEvent: function(i, newH, newW, newHPx, newWPx){
        // this.$refs.charts[i].chart.setSize(newWPx, newHPx);
       // this.$refs.charts[i].$children[i].chart.setSize(newWPx, newHPx);
        this.$refs.charts[i].$refs.graph.chart.setSize(newWPx, newHPx);
        console.log(i, newH, newW, newHPx, newWPx)
      },
      resizedEvent: function(i, newX, newY, newHPx, newWPx){
        // this.$refs.charts[i].chart.setSize(newX * 100, newY * 80);
      }
    },
    data () {
      return {
        columns: {},
        layout: [],
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
