<template>
  <v-container class="bg-aqua">
		<HeaderBackground v-bind:heading="start"></HeaderBackground
		></v-container
	>
  <v-container>
    <h1>This is an about page</h1>
  </v-container>

</template>
<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
const start = "Kontakt";
</script>