<template>
	<v-carousel eager color="#C0CA33" height="auto" theme="dark">
		<v-carousel-item contain eager
			><v-img  eager src="../assets/1.webp"></v-img
		></v-carousel-item>
		<v-carousel-item eager contain
			><v-img eager src="../assets/2.webp"></v-img></v-carousel-item
		><v-carousel-item contain eager
			><v-img eager src="../assets/3.webp"></v-img></v-carousel-item
		><v-carousel-item contain eager
			><v-img eager src="../assets/4.webp"></v-img></v-carousel-item
		><v-carousel-item contain eager
			><v-img eager src="../assets/5.webp"></v-img
		></v-carousel-item>
	</v-carousel>
</template>

<script setup></script>
<style scoped>
.v-carousel {
	max-width: 60vh;
	margin: 0 auto;
}
</style>
