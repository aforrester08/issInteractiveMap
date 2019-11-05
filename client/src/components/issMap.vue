<template lang="html">
  <div class="">
    <ul>
      <li>The ISS is arguably the most expensive single item ever built. As of 2010, the cost of the station is believed to be $150 billion.</li>
      <li>On average the ISS travels at 27,724 kilometres (17,227 mi) per hour.</li>
      <li>The space station completes 15.5 orbits a day, which means the crew members on board the station experience a sunrise or sunset every 92 minutes.</li>
      <li>Approximately 3.3 million lines of computer code on the ground supports over 1.8 million lines of flight software code for the ISS.</li>
    </ul>
    <div id="mapid">
      <LMap
      :center="[20, 0]"
      :zoom=2>
      <LTileLayer :url="'https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png'"> </LTileLayer>

      <LMarker
      :lat-lng="[iss_coordinates.latitude, iss_coordinates.longitude]"
      :icon="iss_icon">

    </LMarker>

    <LMarker
    :lat-lng="[48, 68]"
    :icon="kaz_icon">
    <LPopup>
      <h1>Baikonur Cosmodrome</h1>
      <p>Baikonur is the first and largest space port built by the Soviet Union in the 1950s.
        Today it is responsible for all manned launches to the ISS.
      </p>
    </LPopup>
  </LMarker>

    <div v-for="country in icons">
      <LMarker
      :lat-lng="country.info.coords"
      :icon="convertIcon(country)"
      >
      <LPopup>
        <h1>{{country.info.name}}</h1>
        <ul>
          <li>No. of Visitors: {{country.info.visitors}}</li>
          <li>Amount Contributed: {{country.info.contributed}}</li>
          <li>Current Members Onboard: {{country.info.on_board}}</li>
        </ul>
      </LPopup>
    </LMarker>
  </div>
</LMap>
</div>
</div>

</template>

<script>
import {LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import iconService from '../services/iconService.js'


export default {
  name: "issmap",
  data(){
    return {
      icons: [],
      iss_coordinates: {
        latitude: 0,
        longitude: 0
      },
      timer: "",
      iss_icon: L.icon({
        iconUrl: "https://i2.wp.com/freepngimages.com/wp-content/uploads/2015/12/international-space-station-transparent-background.png?fit=817%2C325",
        iconSize: [50, 50],
        iconAnchor: [0, 0],
        popupAnchor: [0, 0],
      }),
      kaz_icon: L.icon({
        iconUrl: "https://restcountries.eu/data/kaz.svg",
        iconSize: [50, 50],
        iconAnchor: [0, 0],
        popupAnchor: [0, 0],
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
    LMarker,
    LPopup
  },
  mounted() {
    this.fetchPosition();
    this.fetchData();
  },

  methods: {

    convertIcon(country) {
      return L.icon(country.icon)
    },

    fetchData(){
      iconService.getIcons()
      .then(icons => this.icons = icons)
    },

    fetchPosition(){
      if (this.iss_marker){
        this.myMap.removeLayer(this.iss_marker)
      }
      fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(res => {
        this.iss_coordinates = res.iss_position
      })
    }
  }

}

</script>

<style lang="css" scoped>
#mapid { height: 600px; width: 1100px }
</style>
