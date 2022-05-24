<template>
  <div id="output">
    <h4>Prediction:</h4>
    <nuxt-link
      v-if="result != []"
      :to="`/learn/${lesion.id}`"
      class="bigtext"
      >{{ lesion.name }}</nuxt-link
    >
    <Chart :def="def" :data="result[0]"></Chart>
  </div>
</template>

<script>
import Chart from 'vue-chartless'
import { mapGetters } from 'vuex'
export default {
  components: {
    Chart,
  },
  props: {
    result: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data: () => ({
    def: {
      type: 'pie',
    },
  }),
  computed: {
    ...mapGetters({
      getLesion: 'lesions/getLesion',
    }),
    lesion() {
      return this.getLesion(this.result[0][0].label)
    },
  },
}
</script>
<style scoped>
#output {
  /* border: 2px solid; */
  text-align: center;
}
a {
  color: #0060b6;
  text-decoration: none;
}

a:hover {
  color: #00a0c6;
  text-decoration: none;
  cursor: pointer;
}
.bigtext {
  font-size: 20px;
}
</style>