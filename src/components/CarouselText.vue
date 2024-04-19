<template>
	<v-carousel
		hide-delimiters
		:show-arrows="false"
		height="auto"
		class="maximum"
		:touch="false"
		cycle
		:interval="12000"
	>
		<v-carousel-item>
      <h3>Stół, służący do obróbki elementów: 3x2m</h3>
    </v-carousel-item>

		<v-carousel-item>
      <h3>Maksymalna grubość materiału: 200mm</h3>
      </v-carousel-item>
      
		<v-carousel-item>
      <h3>Maksymalny zakres obrotu głowicy: 360⁰</h3>
    </v-carousel-item>

		<v-carousel-item>
      <h3>Maksymalny kąt położenia głowicy: 60⁰</h3>
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
h2{
	user-select: none;
}
</style>
