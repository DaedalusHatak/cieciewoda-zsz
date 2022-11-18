<template>
	<v-container class="text-md-h5 bg-surface">
		<v-list flat class="pb-5">
			<v-subheader
				><b
					>Cięcie wodą daje możliwość wycinania z precyzją 0,1mm materiałów:</b
				></v-subheader
			>
			<v-list-item-group v-model="selectedItem" >
				<v-list-item v-for="(item, i) in material" :key="i">
					<v-list-item-content>
						<v-list-item-title v-text="item"></v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list-item-group>
		</v-list>
    
		<p class="text-h4 pb-8">
			<a href="tel:+48-732-721-521">+48 732 721 521</a></p
		>
		<p class="text-h5 text-md-h4 pb-8 word-break">
			<a href="mailto:uslugiwoda3d@wp.pl">USLUGIWODA3D@WP.PL</a></p
		>
		<p class="text-red-darken-2"
			>Próbki wycięcia nietypowego materiału wykonamy za darmo</p
		>
	</v-container>
</template>

<script setup>
const material = [
	'Kamień naturalny i konglomerat',
	'Stal węglowa',
	'Stal nierdzewna',
	'Metale kolorowe i stopy metali kolorowych',
	'Szkło i poliwęglan',
	'Ceramika',
	'Gres',
	'Guma i tworzywa sztuczne',
	'Drewno i płyty drewnopochodne',
	'Inne materiały – zadzwoń!',
];
</script>

<style scoped>
.v-list-item-title{
	white-space:unset !important;
}
a {
	color: #e25a00;
	
}
</style>
