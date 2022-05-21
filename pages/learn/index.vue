<template>
  <div>
    <b-container>
      <h1 style="text-align: center">Learn more about skin lesions</h1>
      <div v-for="(group, i) in groupedLesions" :key="i">
        <b-row>
          <b-col v-for="(lesion, idx) in group" :key="lesion.id">
            <nuxt-link :to="`/learn/${lesion.id}`">
              <b-card
                :title="lesion.name"
                :img-src="lesion.images[0]"
                img-alt="Image"
                :img-top="idx % 2 >= 0"
                :img-bottom="idx % 2 == 9"
                bg-variant="light"
                img-height="150px"
                img-width="150px"
                tag="article"
                align="center"
                class="mb-4 mt-2 card"
              >
              </b-card>
            </nuxt-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  computed: {
    lesions() {
      return this.$store.state.lesions.lesion_list
    },
    groupedLesions() {
      const chunkSize = 4
      const res = []
      for (let i = 0; i < this.lesions.length; i += chunkSize) {
        res.push(this.lesions.slice(i, i + chunkSize))
      }
      return res
    },
  },
}
</script>
<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

.card {
  height: 15rem;
}
</style>