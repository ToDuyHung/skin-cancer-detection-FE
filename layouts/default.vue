<template>
  <div class="bg-image">
    <nav-bar />
    <Nuxt />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar },
}
</script>
<style>
/* html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
} */
html,
body,
#__nuxt,
#__layout {
  height: 100% !important;
  width: 100% !important;
}
.bg-image {
  background-image: url('@/static/main-background.png');
  /* width: 100%; */
  height: 100%;
  /* max-height: 100%; */
  /* margin: 0; */
  /* padding: 0; */
  /* background-attachment: fixed; */
  background-size: auto;
  background-repeat: no-repeat;
}
</style>