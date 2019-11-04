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
      iss_coordinates: {},
      timer: "",
      iss_marker: null,
      iss_icon: L.icon({
        iconUrl: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/12/international-space-station-transparent-background.png?fit=817%2C325",
        iconSize: [50, 50],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
      }),
      iss_popup: L.popup()
        .setLatLng()
    }
  },
  created() {
    this.fetchPosition();
    this.timer = setInterval(this.fetchPosition, 3000);
  },
  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  methods: {

    fetchPosition(){
      if (this.iss_marker){
        this.myMap.removeLayer(this.iss_marker)
      }
      fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(res => {
        this.iss_coordinates = res.iss_position
        this.iss_marker = L.marker([this.iss_coordinates.latitude, this.iss_coordinates.longitude], {icon: this.iss_icon}).addTo(this.myMap)
      })
    }
  },
  mounted () {

    this.myMap = L.map('mapid', {center: [0, 0], zoom: 2});

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
