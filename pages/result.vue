<template>
  <b-container>
    <div v-if="result.length > 0">
      <h1 style="text-align: center">Result</h1>
      <div class="output">
        <skin-output-form :result="result"></skin-output-form>
      </div>
    </div>
    <div v-else>
      <h1 style="text-align: center">
        Sorry, something went wrong. No result found.
      </h1>
    </div>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import SkinOutputForm from '~/components/SkinOutputForm.vue'
export default {
  components: { SkinOutputForm },
  computed: {
    ...mapGetters({
      result: 'prediction/getResult',
    }),
  },
}
</script>
<style scoped>
.output {
  display: block;
  width: 900px;
  height: 500px;
  margin: auto;
  margin-top: 20px;
}
</style>