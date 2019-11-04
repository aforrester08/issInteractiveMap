<template lang="html">
  <div id="app">

    <h1>ISS Tracker</h1>

    <iss-map></iss-map>
  </div>
</template>

<script>
import issMap from "./components/issMap.vue";

export default {
  name: 'app',
  components: {
    'iss-map': issMap
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
