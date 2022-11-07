<template>
	<v-row class="mx-auto bg-white">
		<v-col
			class="pl-sm-8 px-0  text-h5 d-flex my-auto flex-row align-center"
			cols="12"
	
		>
			<v-container class="py-10 text-center text-sm-left">
				<slot></slot>
				<p class="text-body-1">Ciesielska 2</p>
				<p><b>15-544 Białystok</b></p>
				<p class="py-4 my-4">
					<a class="" href="tel:+48 732 721 521">{{ number }}</a>
				</p>
				<p class="py-4">
					<a class="" :href="`mailto:${mail}`">{{
						mail.toUpperCase()
					}}
				</a></p>
				<p class="pt-sx-8 pb-sx-12"><v-img class="d-sm-none d-flex" eager contain :src="'../assets/' + img"></v-img></p>
				
			</v-container>
			<v-container class="d-none d-sm-block">
				<v-img  eager contain :src="'../assets/' + img"></v-img>
			</v-container>
		</v-col>


		<v-col cols="12"  id="map" class="bordered pa-0 map text-center">
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
.bordered{
	border-top: 2px solid #212121;
}
div {
	padding-right: 0 !important;
	margin: auto  !important;
}
.v-row {
	max-width: 960px;
	min-height: 500px;
	.v-img {
		max-height: 150px !important;
	}
}
a {

	color: #e25a00;

}
</style>
