<template>
  <div>
    <b-container class="mx-auto mt-5">
      <!-- <template #header> Dermatology Aided System </template> -->
      <!-- <template #lead> ASBASD </template> -->
      <b-row class="mx-auto">
        <b-col cols="8">
          <h1 style="font-size: 4em; font-weight: normal">
            Dermatology Aided System
          </h1>
          <p class="info-text">
            A machine learning tool that helps doctors and patients in
            diagnosing skin diseases.
          </p>
          <p class="info-text">
            Note that this system can not replace the need of real
            dermatologist.
          </p>
        </b-col>
        <b-col cols="4">
          <b-img src="default-skin-thumbnail.png" fluid></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.info-text {
  font-weight: normal;
  font-size: 1.25em;
}
</style>