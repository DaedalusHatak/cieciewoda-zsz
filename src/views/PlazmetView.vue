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
const start = "Plazmet";
const number="+48 602 615 104";
const mail="plazmetbialystok@o2.pl";
const img ="plazmet.png";
</script>