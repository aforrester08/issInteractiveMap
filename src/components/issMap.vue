<template lang="html">
  <div class="">
    <ul>
      <li>The ISS is arguably the most expensive single item ever built. As of 2010, the cost of the station is believed to be $150 billion.</li>
      <li>On average the ISS travels at 27,724 kilometres (17,227 mi) per hour.</li>
      <li>The space station completes 15.5 orbits a day, which means the crew members on board the station experience a sunrise or sunset every 92 minutes.</li>
      <li>Approximately 3.3 million lines of computer code on the ground supports over 1.8 million lines of flight software code for the ISS.</li>
    </ul>
    <div id="mapid">
      <LMap ref="myMap">
      </LMap>
    </div>
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
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
      eu_icon: L.icon({
        iconUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
        iconSize: [50, 35],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
      usa_icon: L.icon({
        iconUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        iconSize: [50, 35],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
      jpn_icon: L.icon({
        iconUrl: "https://restcountries.eu/data/jpn.svg",
        iconSize: [50, 35],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
      russia_icon: L.icon({
        iconUrl: "https://restcountries.eu/data/rus.svg",
        iconSize: [50, 35],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
      kaz_icon: L.icon({
        iconUrl: "https://restcountries.eu/data/kaz.svg",
        iconSize: [50, 50],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
      can_icon: L.icon({
        iconUrl: "https://restcountries.eu/data/can.svg",
        iconSize: [50, 35],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),


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
        this.iss_marker = L.marker([this.iss_coordinates.latitude, this.iss_coordinates.longitude], {icon: this.iss_icon}).addTo(this.myMap);
      })
    }
  },
  mounted () {

    this.myMap = L.map('mapid', {center: [20, 0], zoom: 2.5});

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
      accessToken: process.env.VUE_APP_API_KEY
    }).addTo(this.myMap);

    //EU
    L.marker([50.83333333, 4], {icon: this.eu_icon}).addTo(this.myMap)

    //USA
    L.marker([38, -97], {icon: this.usa_icon}).addTo(this.myMap)

    //Canada
    L.marker([60, -95], {icon: this.can_icon}).addTo(this.myMap)

    //RUSSIA
    L.marker([60, 100], {icon: this.russia_icon}).addTo(this.myMap)

    //KAZAKSTAN
    L.marker([48, 68], {icon: this.kaz_icon}).addTo(this.myMap)

    //JAPAN
    L.marker([36, 138], {icon: this.jpn_icon}).addTo(this.myMap)



  }
}

</script>

<style lang="css" scoped>
#mapid { height: 600px; }
</style>
