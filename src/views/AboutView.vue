<template>
	<v-container>
		<HeaderBackground v-bind:heading="start"></HeaderBackground
	></v-container>
	<v-container class="bg-grey-lighten-2">
		<ContactView
		 	v-model="theme.global.name.value"
			v-bind:on-change="watching()"
		v-bind:mail="mail"
			v-bind:number="number"
			v-bind:img="theme.global.name.value == 'dark' ? img=img1 : img=img2"
		></ContactView>
	</v-container>
</template>

<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
import ContactView from '../components/ContactView.vue';
import { useTheme } from 'vuetify';
import { watch } from 'vue';
import { useHead } from '@vueuse/head';
useHead({
  title: 'Kontakt cięcie wodą'
})
const start = 'Kontakt';
const number = '+48 732 721 521';
const mail = 'uslugiwoda3d@wp.pl';
const theme = useTheme();
let img;
const img1 ='justlogowhite.png';
const img2 = 'justlogo.png';
watch(watching);

function watching()
{
	if(theme.global.name.value==='dark'){
	img=img1;
	
}
else{
	img=img2;
}
console.log(theme.global.name.value);
}
</script>
