<template>
  <div id="pie" class="charts"></div>
</template>
<script>
import { mapState } from 'vuex'
import Highcharts from 'highcharts';

export default {
  name: "Pie",
  chart: {},
  props: {
    type: String
  },
  computed: mapState({
    dataChart: state => state.dataChart
  }),
  watch:{
    dataChart(){
      this.data()
    }
  },
  methods:{
    data(){
      this.graph()
    },
    graph(){
      this.chart = Highcharts.chart('pie', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: null
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: 'Chrome',
            y: 61.41,
            sliced: true,
            selected: true
          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Edge',
            y: 4.67
          }, {
            name: 'Safari',
            y: 4.18
          }, {
            name: 'Other',
            y: 7.05
          }]
        }]
      });
    },
  }
}
</script>
<style scoped>
.charts{
  width: 100%;
  height: 100%;
}
</style>
