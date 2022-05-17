<template>
  <div>
    <h3>Input Patient Data</h3>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="img-input-form">
            <image-input-form
              ref="imgForm"
              @update:img="img = $event"
            ></image-input-form>
          </div>
        </b-col>
        <b-col>
          <div class="general-form">
            <general-input-form
              ref="clinicalForm"
              @update:clinical-data="clinicalData = $event"
            ></general-input-form>
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
  data() {
    return {
      img: 'default-skin-thumbnail.png',
      clinicalData: {
        age: null,
        gender: 'male',
        localization: 'abdomen',
      },
    }
  },
  methods: {
    // async
    async onSubmit() {
      if (this.$refs.imgForm.isValid() && this.$refs.clinicalForm.isValid()) {
        const res = await this.$axios.$post('/predict', {
          img: this.img.split(',')[1],
          age: this.clinicalData.age,
          gender: this.clinicalData.gender,
          localization: this.clinicalData.localization,
        })
        
        this.$emit('resultRecieved', res)
        // this.$emit('resultRecieved', 'nv')
      }
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