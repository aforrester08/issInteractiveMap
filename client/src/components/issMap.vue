<template lang="html">
  <div class="">
    <div id="mapid">

      <LMap
      :center="[20, 0]"
      :zoom="2.5"
      :maxZoom="2.5"
      :minZoom="2.5">
      <LTileLayer :url="'https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png'"> </LTileLayer>

      <LMarker
      :lat-lng="[iss_coordinates.latitude, iss_coordinates.longitude]"
      :icon="iss_icon">
      <LPopup>
        <h1>ISS</h1>
        <p>The International Space Station (ISS) is a habitable human-made satellite that orbits Earth at an altitude of between 330 km (205mi) and 435 km (270 mi).</p>
        <p>The ISS completes 15.2 orbits a day or an orbit every 92 minutes.</p>
        <p>It took 3.3 million lines of code on the ground and 1.8 million lines of onboard flight software to keep the ISS stable</p>
        <ul>
          <li>Velocity: 17,227mph</li>
          <li>Cost: $150,000,000,000</li>
          <li>Weight: 500,000kg</li>
          <li>Altitude: 250,000m </li>
        </ul>
      </LPopup>
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
        iconAnchor: [30, 0],
        popupAnchor: [0, 0],
      }),
      kaz_icon: L.icon({
        iconUrl: "https://restcountries.eu/data/kaz.svg",
        iconSize: [50, 50],
        iconAnchor: [25, 10],
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


#mapid { height: 700px; width: 1500px }

#map {
  display: flex;
  justify-content: center;
}

</style>
