<template>
  <div class="nav-bar mb-3">
    <b-navbar>
      <b-navbar-brand to="/" tag="h1" class="ml-3"
        >Skin Disease Detection</b-navbar-brand
      >
      <b-navbar-nav class="ml-auto mr-3">
        <b-nav-item to="/tool" :active="currentTab == 'tool'" class="mr-2"
          >Tool</b-nav-item
        >
        <b-nav-item to="/learn" :active="currentTab == 'learn'" class="mr-2"
          >Learn</b-nav-item
        >
        <b-nav-item to="/about" :active="currentTab == 'about'" class=""
          >About</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
export default {
  computed: {
    currentTab() {
      return this.$route.name
    },
  },
}
</script>
<style scoped>
.nav-bar {
  -webkit-box-shadow: 4px 6px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 10px -4px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  font-weight: bold;
  font-size: 17px;
  /* border: 2px solid; */
}
</style>