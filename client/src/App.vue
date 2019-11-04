<template lang="html">
  <div id="app">

    <h1>ISS Tracker</h1>

    <iss-map></iss-map>
    <chart></chart>
  </div>
</template>

<script>
import issMap from "./components/issMap.vue";
import chart from "./components/chart.vue";

export default {
  name: 'app',
  components: {
    'iss-map': issMap,
    'chart': chart
  },
  data(){
    return {
      // mymap: null
    }
  }
}
</script>

<style lang="css" scoped>
</style>
