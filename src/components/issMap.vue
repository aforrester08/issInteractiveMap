<template lang="html">
  <div id="mapid">
    <LMap ref="myMap">
    </LMap>
  </div>


</template>

<script>
import {LMap, LTileLayer, LMarker } from 'vue2-leaflet';
// Vue.component('l-map', LMap);
// Vue.component('l-tile-layer', LTileLayer);
// Vue.component('l-marker', LMarker);

export default {
  name: "issmap",
  data(){
    return {
      // key: process.env.VUE_APP_API_KEY
    }
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  methods: {

  },
  mounted () {
    console.log("TOKEN", process.env.VUE_APP_APIKEY);
    this.myMap = L.map('mapid').setView([51.505, -0.09], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: process.env.VUE_APP_API_KEY
    }).addTo(this.myMap);
  }
}

</script>

<style lang="css" scoped>
#mapid { height: 600px; }
</style>
