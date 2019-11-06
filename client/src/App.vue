<template lang="html">
  <div id="app">

    <h1>ISS Tracker</h1>

    <iss-map></iss-map>
    <quiz></quiz>
    <chart></chart>
  </div>
</template>

<script>
import issMap from "./components/issMap.vue";
import quiz from "./components/quiz.vue"
import chart from "./components/chart.vue";

export default {
  name: 'app',
  components: {
    'iss-map': issMap,
    'quiz': quiz,
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

h1{
  font-style: OCR A std;
  color: white
}

#app{

}

iss-map {
  display: flex;
  justify-content: center;
}

</style>
