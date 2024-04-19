<template>
	<v-container>
		<HeaderBackground v-bind:heading="start"></HeaderBackground
	></v-container>
	<v-container>
		<p class="text-h6 pa-0 py-12 text-md-h4 pa-sm-12"
			>Nasza firma świadcząca fachowe usługi „abrasive waterjet” - czyli cięcie
			strumieniem wody Gwarantuje pełen profesjonalizm, krótki czas realizacji
			zleceń oraz konkurencyjne ceny!!!</p
		>
	</v-container>
	<v-container class="py-12 dark">
		<TablePrices></TablePrices>
	</v-container>
	<v-container class=" py-12 " >
		<MaterialList></MaterialList>
	</v-container>
</template>

<script setup>
import HeaderBackground from '../components/HeaderBackground.vue';
import TablePrices from '../components/TablePrices.vue';
import MaterialList from '../components/MaterialList.vue';
import { useHead } from '@vueuse/head';
useHead({
  title: 'Usługi cięcia wodą 3D'
})
const start = 'Usługi';
</script>

<style>
.word-break{
	word-break: break-all;
}
.dark {
	background-color: #212121;
}
</style>
