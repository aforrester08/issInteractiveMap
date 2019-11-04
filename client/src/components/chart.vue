<template lang="html">
  <GChart
  type="ColumnChart"
  :data="chartData"
  :options="chartOptions"
  />
</template>

<script>

export default {

  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Vehicle', 'Speed km/h'],
        ['ISS', 27576],
        ['Aeroplane', 928.8],
        ['Train', 349.2],
        ['Car', 486]
      ],
      chartOptions: {
        chart: {
          title: 'Speed by Vehicle'

        }
      }
    }
  }
}

</script>

<style lang="css" scoped>
</style>
