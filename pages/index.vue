<template>
  <div>
    <div class="input-form">
      <skin-input-form></skin-input-form>
    </div>
    <div class="output">
      <result-output @resultRecieved="onResultRecieved"></result-output>
    </div>
  </div>
</template>

<script>
import ResultOutput from '~/components/ResultOutput.vue'
import SkinInputForm from '~/components/SkinInputForm.vue'
export default {
  components: { SkinInputForm, ResultOutput },
  data() {
    return {
      result: '',
    }
  },
  methods: {
    onResultRecieved(result) {
      this.result = result
    },
  },
}
</script>

<style scoped>
.input-form {
  display: block;
  width: 900px;
  /* height: 500px; */
  margin: auto;
}
.output {
  display: block;
  width: 300px;
  height: 500px;
  margin: auto;
  margin-top: 20px;
}
</style>