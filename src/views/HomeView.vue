<template>
	<v-container class="bgg" height="auto"  center>
		<HeaderBackground v-bind:heading="start">
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
		><h1 class="pt-5">Nasza galeria:</h1><CarouselImage
	/></v-container>
</template>


<script setup>
// Components
import CarouselText from '../components/CarouselText.vue';
import HeaderBackground from '../components/HeaderBackground.vue';
import CarouselImage from '../components/CarouselImage.vue';
const start = 'Profesjonalne cięcie wodą!';
</script>
<style lang="scss" scoped>
.bg-dark {
	color: white;
	background-color: #212121;
}
.background {	
	height: 100%;
	overflow: auto;
	min-height: 100vh;
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
.bg-aqua {
	background-color: aqua;
}
</style>
