<template>
  <b-form ref="form" @submit.prevent>
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
      required
    ></b-form-file>
    <img :src="imgBase64" alt="Input Img" height="300" width="300" />
    </b-form-group>
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
        // console.log(this.imgBase64)
        this.$emit('update:img', this.imgBase64)
      }
    },
  },
  methods: {
    isValid() {
      return this.$refs.form.reportValidity()
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