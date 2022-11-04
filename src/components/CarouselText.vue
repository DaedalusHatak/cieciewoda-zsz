<template>
	<v-carousel
		hide-delimiters
		:show-arrows="false"
		height="auto"
		class="maximum"
		cycle
		:interval="12000"
	>
		<v-carousel-item>
      <h2>Stół, służący do obróbki elementów: 3x2m</h2>
    </v-carousel-item>

		<v-carousel-item>
      <h2>Maksymalna grubość materiału: 200mm</h2>
      </v-carousel-item>
      
		<v-carousel-item>
      <h2>Maksymalny zakres obrotu głowicy: 360⁰</h2>
    </v-carousel-item>

		<v-carousel-item>
      <h2>Maksymalny kąt położenia głowicy: 60⁰</h2>
    </v-carousel-item>
	</v-carousel>
</template>

<script setup></script>
<style scoped>
.v-carousel {
	margin: 0 auto;
}
.v-carousel-item {
	padding: 1em 0;
	transition: 12s !important;
}
</style>
