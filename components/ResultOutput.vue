<template>
  <div id="output">
    <h4>Diagnosis Result:</h4>
    {{ result }}
  </div>
</template>
<script>
export default {
  props: {
    result: {
      type: String,
      default: '',
    },
  },
}
</script>
<style scoped>
#output {
  border: 2px solid;
  text-align: center;
}
</style>