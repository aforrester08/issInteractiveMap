<template lang="html">
  <div id="app">

    <h1>International Space Station Tracker</h1>
    <h2>Click icons for detailed information <h3>:</h3></h2>
    <iss-map></iss-map>
    <chart class=""></chart>
    <quiz></quiz>

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

h3{
  color: salmon;
  display: inline;
}

h2{
  font-size: 10px;
}

h1{
  font-style: OCR A std;
  color: white;
  text-align: center;
  font-size: 50px;
}

#app{
  justify-content: center;
}

iss-map {
  display: flex;
  justify-content: center;
}

</style>
