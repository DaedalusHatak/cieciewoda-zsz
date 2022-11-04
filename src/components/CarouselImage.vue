<template>
	<v-carousel color="#C0CA33" height="auto" :cycle="cycle" interval="100" theme="dark">
		<v-carousel-item contain eager
			><v-img  eager src="../assets/1.webp"></v-img
		></v-carousel-item>
		<v-carousel-item eager contain
			><v-img eager src="../assets/2.webp"></v-img></v-carousel-item
		><v-carousel-item contain eager
			><v-img eager src="../assets/3.webp"></v-img></v-carousel-item
		><v-carousel-item contain eager
			><v-img eager src="../assets/4.webp"></v-img></v-carousel-item
		><v-carousel-item props.value="'5'" contain eager
			><v-img    eager src="../assets/5.webp"></v-img
		></v-carousel-item>
	</v-carousel >
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	value: {
		type: String,
	},
});
let cycle;
if(props.value==="5"){
	 cycle = false;
}
else{cycle = false;}

</script>
<style scoped>
.v-carousel {
	max-width: 60vh;
	margin: 0 auto;
}
</style>
