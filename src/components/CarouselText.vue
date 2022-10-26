<template>
  <v-carousel class="maximum" cycle :interval="500">
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>
  
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>
  
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>

</script>
<style scoped>

.v-carousel{
  padding: 1em 0;
	margin:0 auto;
	max-width:1200px !important;
}
</style>