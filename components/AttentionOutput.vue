<template>
  <div id="output">
    <h4>Attention Image:</h4>
    <b-img :src="result[1]" alt="Input Img" height="300" width="300" />
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
<style scoped>
#output {
  /* border: 2px solid; */
  text-align: center;
}
</style>