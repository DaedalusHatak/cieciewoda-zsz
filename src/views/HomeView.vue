<template>
	<v-container class="bg-aqua">
		<HeaderBackground v-bind:heading="start">
			<p class="text-h6 mt-16 pt-16"> Cięcie materiału metodą Abrasive WaterJet(AWJ). </p>
			<p class="text-h6 pa-12"
				>Cięcie metalu, płytek, granitu, drewna, tworzyw sztucznych o grubości
				nie przekraczającej 200mm.</p
			></HeaderBackground
		></v-container
	>
	<v-container><CarouselText /></v-container>
</template>

<script setup>
// Components
import CarouselText from '../components/CarouselText.vue';
import HeaderBackground from '../components/HeaderBackground.vue';
const start = 'Profesjonalne cięcie wodą!';
</script>
<style lang="scss" scoped >
.background{

min-height:100vh;
h1{
  padding-bottom: 4em !important;
}
}
.v-container {
	padding: 0;
	margin: 0;
	max-width: 100%;
}
.bg-aqua {
	background-color: aqua;
}
</style>
