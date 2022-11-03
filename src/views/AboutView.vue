<template>
  <v-container class="bg-aqua">
		<HeaderBackground v-bind:heading="start"></HeaderBackground
		></v-container
	>
  <v-container>
   <ContactView v-bind:mail="mail" v-bind:number="number" v-bind:img="img"></ContactView>
  </v-container>

</template>
<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
import ContactView from '../components/ContactView.vue';
const start = "Kontakt";
const number="+48 732 721 521";
const mail="uslugiwoda3d@wp.pl";
const img ="justlogo.png";
</script>