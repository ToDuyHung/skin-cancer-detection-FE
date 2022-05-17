<template>
  <div>
    <div class="input-form">
      <skin-input-form @resultRecieved="onResultRecieved"></skin-input-form>
    </div>
    <div class="output">
      <skin-output-form :result="result"></skin-output-form>
      <!-- <result-output :result="result"></result-output>
      <attention-output :result="result"></attention-output> -->
    </div>
  </div>
</template>

<script>
// import ResultOutput from '~/components/ResultOutput.vue'
// import AttentionOutput from '~/components/AttentionOutput.vue'
import SkinInputForm from '~/components/SkinInputForm.vue'
import SkinOutputForm from '~/components/SkinOutputForm.vue'
export default {
  components: { SkinInputForm, SkinOutputForm},
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
  width: 900px;
  height: 500px;
  margin: auto;
  margin-top: 20px;
}
</style>