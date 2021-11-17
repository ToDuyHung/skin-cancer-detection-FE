<template>
  <div>
    <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <div class="input-form">
          <image-input-form @resultRecieved="onResultRecieved"></image-input-form>
        </div>
      </b-col>
      <b-col>
        <div class="general-form">
          <general-input-form @resultRecieved="onResultRecieved"></general-input-form>
        </div>
      </b-col>
    </b-row>


    </b-container>
  </div>
</template>

<script>
import ImageInputForm from '~/components/ImageInputForm.vue'
import GeneralInputForm from '~/components/GeneralInputForm.vue'
export default {
  components: { ImageInputForm, GeneralInputForm }
}
</script>

<style scoped>
.input-form {
  display: block;
  width: 300px;
  /* height: 500px; */
  margin: auto;
}
.general-form{
  display: block;
  width: 300px;
  /* height: 500px; */
  margin: auto;
}
</style>