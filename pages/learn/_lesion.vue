
<template>
  <div>
    <b-container>
      <h1 style="text-align: center">{{ lesion.name }}</h1>
      <h1 style="text-align: center">{{ lesion.vn_name }}</h1>
      <b-row>
        <b-col cols="8">
          <b-table
            responsive
            :items="items"
            thead-class="header"
            bordered
            striped
          >
            <template #cell(field)="data">
              <b>{{ data.value }} </b>
            </template>
          </b-table>
        </b-col>
        <b-col cols="4">
          <b-img :src="lesion.images[0]" fluid-grow></b-img>
        </b-col>
      </b-row>
      <hr />
      <h3>Một số hình ảnh thực tế</h3>
      <b-row>
        <b-col v-for="(img, idx) in lesion.images" :key="idx">
          <expandable-image
            :id="`myImg${idx}`"
            :src="img"
            close-on-background-click
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data: () => {
    return {}
  },
  computed: {
    ...mapGetters('lesions', ['getLesion']),
    lesion() {
      return this.getLesion(this.$route.params.lesion)
    },
    items() {
      return [
        {
          field: 'Mô tả',
          info: this.lesion.description,
        },
        {
          field: 'Nguy Cơ',
          info: this.lesion.risk,
        },
        {
          field: 'Tuổi',
          info: this.lesion.age,
        },
        {
          field: 'Giới tính',
          info: this.lesion.gender,
        },
        {
          field: 'Vùng da tổn thương',
          info: this.lesion.localization,
        },
      ]
    },
  },
}
</script>
<style scoped>
</style>
<style>
.header {
  display: none;
}

.my-border {
  border: 1px solid;
}
</style>