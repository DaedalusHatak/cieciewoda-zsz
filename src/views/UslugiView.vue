<template>
	<v-container class="bg-aqua">
		<HeaderBackground v-bind:heading="start"></HeaderBackground
	></v-container>
	<v-container>
		<p class="text-h5 text-md-h4 pa-12"
			>Nasza firma świadcząca fachowe usługi „abrasive waterjet” - czyli cięcie
			strumieniem wody Gwarantuje pełen profesjonalizm, krótki czas realizacji
			zleceń oraz konkurencyjne ceny!!!</p
		>
	</v-container>
	<v-container class="py-12 dark">
		<TablePrices></TablePrices>
	</v-container>
	<v-container class="white">
		<MaterialList></MaterialList>
	</v-container>
</template>

<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
import TablePrices from '../components/TablePrices.vue';
import MaterialList from '../components/MaterialList.vue';
const start = 'Usługi';
</script>

<style>
.dark {
	background-color: #212121;
}
</style>
