<template lang="html">
  <div id="app">

    <h1>ISS Tracker</h1>

    <iss-map></iss-map>
    <quiz></quiz>
  </div>
</template>

<script>
import issMap from "./components/issMap.vue";
import quiz from "./components/quiz.vue"

export default {
  name: 'app',
  components: {
    'iss-map': issMap,
    'quiz': quiz
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
