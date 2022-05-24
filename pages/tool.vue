<template>
  <div>
    <div class="input-form">
      <skin-input-form @resultRecieved="onResultRecieved"></skin-input-form>
    </div>
  </div>
</template>

<script>
// import ResultOutput from '~/components/ResultOutput.vue'
// import AttentionOutput from '~/components/AttentionOutput.vue'
import { mapMutations } from 'vuex'
import SkinInputForm from '~/components/SkinInputForm.vue'
export default {
  components: { SkinInputForm },
  methods: {
    ...mapMutations({ updateResult: 'prediction/update' }),

    onResultRecieved(result) {
      this.updateResult(result)
      this.$router.push({
        name: 'result',
      })
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
</style>