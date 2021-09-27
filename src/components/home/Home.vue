<template>
    <Main>

      <grid-layout :layout.sync="layout"
                 :col-num="48"
                 :row-height="40"
                 :is-draggable="draggable"
                 :is-resizable="resizable"
                 :vertical-compact="true"
                 :responsive="responsive"
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
          <Charts :type="item.g" :key="item.i" ref="charts"></Charts>
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
          this.$store.commit("SET_DARK_MODE", response.data.dark_mode);
          this.layout = response.data.layout;
          this.columns = response.data.columns;

          console.log("response =>", response.data.layout);
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

        var Chart = this.$refs.charts.sort((a, b) => {
          if (a.$vnode.key > b.$vnode.key){
            return 1;
          } else if (a.$vnode.key < b.$vnode.key){
            return -1;
          }
          return 0;
        });

        Chart[parseInt(i)].$refs.graph.chart.setSize(newWPx - 20, newHPx - 20);

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
        responsive: true,
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
