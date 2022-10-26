<template>
  <v-carousel  hide-delimiters :show-arrows="false" height="auto" class=" maximum" cycle :interval="7000">
    <v-carousel-item
    ><h2>Tekst</h2></v-carousel-item>
  
    <v-carousel-item
    ><h2>Tekst</h2></v-carousel-item>
  
    <v-carousel-item
    ><h2>Tekst</h2></v-carousel-item>
  </v-carousel>
</template>

<script setup>

</script>
<style scoped>
.maximum{
  background-color: aqua;
  max-height:100%;
}
.v-carousel{
  
  
	margin:0 auto;
	max-width:1200px !important;
}
.v-carousel-item{
  padding: 1em 0;
  transition: 7s !important;
}
</style>