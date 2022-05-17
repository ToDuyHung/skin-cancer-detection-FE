<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="result-output">
            <result-output :result="result"
            ></result-output>
          </div>
        </b-col>
        <b-col>
          <div class="attention-output">
            <attention-output :result="result"
            ></attention-output>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AttentionOutput from '~/components/AttentionOutput.vue'
import ResultOutput from '~/components/ResultOutput.vue'
export default {
  components: { AttentionOutput, ResultOutput },
  props: {
    result: {
      type: Array,
      default: () => {return []},
    }
  }
}
</script>

<style scoped>
.img-input-form {
  display: block;
  width: 300px;
  /* height: 500px; */
  margin: auto;
  margin-right: 0;
}
.general-form {
  display: block;
  width: 400px;
  /* height: 500px; */
  margin: auto;
  margin-left: 0;
}
h3 {
  text-align: center;
}
</style>