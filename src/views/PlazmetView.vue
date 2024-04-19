<template>
	<v-container >
		<HeaderBackground v-bind:heading="start"></HeaderBackground
	></v-container>
	<v-container class="bg-grey-lighten-2">
		<ContactView
			v-bind:mail="mail"
			v-bind:number="number"
			v-bind:img="img"
			v-bind:firm="firm"
		>
			<p class="firm text-h4 py-6"
				><b
					><v-btn
					class="text-h6 text-sm-h4"
						rounded="lg"
						color="#da251d"
						:href="`http://www.${firm}.com.pl/`"
						>{{ firm }}</v-btn
					></b
				></p
			>
		</ContactView>
	</v-container>
</template>

<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
import ContactView from '../components/ContactView.vue';
import { useHead } from '@vueuse/head';
useHead({
  title: 'Kontakt Plazmet'
})
const start = 'Plazmet';
const number = '+48 602 615 104';
const mail = 'plazmetbialystok@o2.pl';
const img = 'plazmet.png';
const firm = 'PLAZMET';
</script>

<style>
.firm a {

	color: #000;
}
</style>
