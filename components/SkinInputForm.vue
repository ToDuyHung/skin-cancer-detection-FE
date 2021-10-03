<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group
    id="input-img"
    label="Skin lesion image:"
    label-for="input-1">
    <b-form-file
      id="input-1"
      v-model="file"
      :state="Boolean(file)"
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      accept="image/*"
      style="text-align: left"
    ></b-form-file>
    <img :src="imgBase64" alt="Input Img" height="300" width="300" />
    </b-form-group>
    <b-button
      type="submit"
      variant="info"
      pill
      block
      class="w-50 mx-auto mt-1"
      >Submit</b-button
    >
    </div>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      imgBase64: 'default-skin-thumbnail.png',
    }
  },
  watch: {
    file(val) {
      if (!val) {
        this.imgBase64 = 'default-skin-thumbnail.png'
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(val)
      reader.onload = (event) => {
        this.imgBase64 = event.target.result
      }
    },
  },
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
img {
  border: 1px solid;
  border-radius: 5px;
  margin-top: 2px;
  padding: 5px;
}
#input-img {
  font-weight: bold;
  text-align: center;
}
</style>