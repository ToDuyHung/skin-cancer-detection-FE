<template>
  <div>
    <b-form @submit.prevent="onSubmit">
      <b-form-file
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        accept="image/*"
      ></b-form-file>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div class="mt-3">Selected file:</div>
    <b-img id="blah" :src="imgBase64" alt="input img" fluid-grow></b-img>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      imgBase64: '#',
    }
  },
  watch: {
    file(val) {
      if (!val) {
        this.imgBase64 = '#'
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
      alert(res)
    },
  },
}
</script>
