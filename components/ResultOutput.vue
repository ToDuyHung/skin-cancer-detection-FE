<template>
  <div id="output">
    <h4>Diagnosis Result:</h4>
    {{ result == [] ? '' : result[0][0]['label'] }}
    <Chart 
      :def="def"
      :data="result[0]"
  ></Chart>
  </div>
</template>

<script>
import Chart from 'vue-chartless'
export default {
  components: {
      Chart
    },
  props: {
    result: {
      type: Array,
      default: () => {return []},
    }
  },
    data: () => ({
        def : {
            type : 'pie'
        }
    })
}
</script>
<style scoped>
#output {
  border: 2px solid;
  text-align: center;
}
</style>