<template>
  <div class="nav-bar">
    <b-navbar>
      <nuxt-link to="/">
        <b-navbar-brand tag="h1">Skin Disease Detection</b-navbar-brand>
      </nuxt-link>
      <b-navbar-nav class="ml-auto">
        <b-nav-item>About</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<style scoped>
.nav-bar {
  -webkit-box-shadow: 4px 6px 10px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 6px 10px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 4px 6px 10px -4px rgba(0, 0, 0, 0.75);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  /* border: 2px solid; */
}
</style>