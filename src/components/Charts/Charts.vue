<template>
  <Column v-if="this.type == 'column'" ref="graph"></Column>
  <Pie v-else-if="this.type == 'pie'" ref="graph"></Pie>
  <Combo v-else-if="this.type == 'combo'" ref="graph"></Combo>
</template>
<script>
import Column from './Column';
import Pie from './Pie';
import Combo from './Combo';

export default {
  name: "Charts",
  props: ['type'],
  components: {
    Column,
    Pie,
    Combo
  }
}
</script>
<style>
  .charts{
    width: 100%;
    height: 100%;
  }
</style>
