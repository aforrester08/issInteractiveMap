<template lang="html">
  <div class="">
    <h2>Space walks</h2>
    <ul>
      <li>There have been 221 space walks at the International Space Station.</li>
      <li>There have been 167 space walks in US spacesuits.</li>
      <li>There have been 54 space walks in  Russian spacesuits.</li>
    </ul>

    <GChart
    type="ColumnChart"
    :data="chartData"
    :options="chartOptions"
    />
  </div>
</template>

<script>

export default {

  data () {
    return {
      chartData: [
        ['Year', 'Number of Space walks'],
        ['1998', 3],
        ['1999', 1],
        ['2000', 9],
        ['2001', 18],
        ['2002', 18],
        ['2003', 2],
        ['2004', 5],
        ['2005', 7],
        ['2006', 14],
        ['2007', 23],
        ['2008', 19],
        ['2009', 17],
        ['2010', 15],
        ['2011', 10],
        ['2012', 5],
        ['2013', 11],
        ['2014', 7],
        ['2015', 7],
        ['2016', 4],
        ['2017', 10],
        ['2018', 8],
        ['2019', 8]
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
