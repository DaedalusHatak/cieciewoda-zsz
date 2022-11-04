<template>
	<v-row class="text-h6 align-center justify-start text-left">
		<v-col
			class="pl-8 d-flex d-sm-column flex-row align-center"
			cols="12"
			md="5"
		>
			<v-container>
				<slot></slot>
				<p class="text-body-1">Ciesielska 2</p>
				<p><b>15-544 Białystok</b></p>
				<p class="my-4">
					<a href="tel:+48 732 721 521">{{ number }}</a>
				</p>
				<p class="">
					<a class="break text-sx-body-1" :href="`mailto:${mail}`">{{
						mail.toUpperCase()
					}}
				</a></p></v-container>
			<v-container>
				<v-img class="" eager contain :src="'../assets/' + img"></v-img>
			</v-container>
		</v-col>

		<v-col cols="12" md="7" id="map" class="pa-0 map text-center">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.3891827501825!2d23.2020292!3d53.121159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffec8520e4bdf%3A0x19b740786f22f481!2sCiesielska%202%2C%2015-544%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1667473493413!5m2!1spl!2spl"
				width="100%"
				height="500px"
				style="border: 0"
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
		</v-col>
	</v-row>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	number: {
		type: String,
	},
	mail: {
		type: String,
	},
	firm: {
		type: String,
	},
	img: {
		type: Image,
	},
});
</script>
<style scoped lang="scss">
div {
	padding-right: 0 !important;
	margin: 0 !important;
}
.v-row {
	min-height: 500px;
	.v-img {
		max-height: 300px !important;
	}
}
a {
	font-size: medium;
	color: #e25a00;
	text-decoration: none;
}
</style>
