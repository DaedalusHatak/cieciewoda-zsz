<template>
	<v-container center>
		<HeaderBackground v-bind:apex="height" v-bind:heading="start">
			<p class="text-h6 mt-16 pt-16">
				Cięcie materiału metodą Abrasive WaterJet(AWJ).
			</p>
			<p class="text-h6 pa-12"
				>Cięcie metalu, płytek, granitu, drewna, tworzyw sztucznych o grubości
				nie przekraczającej 200mm.</p
			></HeaderBackground
		></v-container
	>
	<v-container fluid class="pa-0"><CarouselText /></v-container>
	<v-container fluid class="bg-dark pa-0"
		><h3 class="pt-5">Nasza galeria:</h3><CarouselImage
	/></v-container>
</template>


<script setup>

// Components
import CarouselText from '../components/CarouselText.vue';
import HeaderBackground from '../components/HeaderBackground.vue';
import CarouselImage from '../components/CarouselImage.vue';
import { useHead } from '@vueuse/head';
useHead({
  title: 'Cięcie wodą 3D'
})

const start = 'Profesjonalne cięcie wodą!';

  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
</script>
<style lang="scss" scoped>
.bg-dark {
	color: white;
	background-color: #212121;
}

.background {	
	min-height: calc(var(--vh, 1vh) * 100);
	h1 {
		padding-bottom: 4em !important;
	}
}
.v-container {
	overflow: hidden;
	padding: 0;
	margin: 0;
	max-width: 100%;
	
}
</style>
