<template>
  <div>
    <h3>Input Patient Data</h3>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="img-input-form">
            <image-input-form></image-input-form>
          </div>
        </b-col>
        <b-col>
          <div class="general-form">
            <general-input-form></general-input-form>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-button
      type="submit"
      variant="info"
      pill
      block
      class="w-25 mx-auto"
      @click="onSubmit"
      >Submit</b-button
    >
  </div>
</template>

<script>
import ImageInputForm from '~/components/ImageInputForm.vue'
import GeneralInputForm from '~/components/GeneralInputForm.vue'
export default {
  components: { ImageInputForm, GeneralInputForm },
  methods: {
    async onSubmit() {
      const res = await this.$axios.$post('/predict', {
        img: this.imgBase64.split(',')[1],
      })
      this.$emit('resultRecieved', res)
    },
  },
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