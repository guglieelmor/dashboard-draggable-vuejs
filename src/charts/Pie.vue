<template>

  <highcharts :options="chartOptions" ref="chart"></highcharts>

</template>

<script>
import { Chart } from 'highcharts-vue';

  export default {
    name: 'pie',
    components: {
      highcharts: Chart
    },
    data () {
      return {
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
        }
      }
    }
  }

</script>

