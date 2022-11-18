<template>
	<v-app>
		<v-app-bar app>
			<v-toolbar-title
				><v-img
					v-if="theme.global.name.value === 'dark'"
					contain
					max-height="100"
					max-width="200"
					src="./assets/logologo.png"
				></v-img>
				<v-img
					v-else-if="theme.global.name.value === 'light'"
					contain
					max-height="100"
					max-width="200"
					src="./assets/logodark.png"
				></v-img>
			</v-toolbar-title>
			<v-switch
				class="pr-5 d-flex align-left"
				color="primary"
				@click="toggleTheme"
			></v-switch>
			<v-app-bar-nav-icon
				class="hidden-sm-and-up"
				variant="text"
				@click="drawer = !drawer"
			>
			</v-app-bar-nav-icon>

			<v-toolbar-items class="hidden-xs">
				<v-btn
					flat
					v-for="items in router.getRoutes()"
					:key="items.name"
					:to="items.path"
					>{{ items.name }}</v-btn
				>
			</v-toolbar-items>
		</v-app-bar>

		<v-navigation-drawer
			class="hidden-sm-and-up"
			disable-route-watcher
			disable-resize-watcher
			v-model="drawer"
			bottom
			temporary
		>
			<v-list>
				<v-btn
					size="x-large"
					:density="comfortable"
					flat
					block
					@click="drawer = !drawer"
					nav
					v-for="items in router.getRoutes()"
					:key="items.name"
					:to="items.path"
					>{{ items.name }}</v-btn
				>
			</v-list>
		</v-navigation-drawer>
		<!-- Sizes your content based upon application components -->
		<v-main class="text-center">
			<!-- Provides the application the proper gutter -->

			<!-- If using vue-router -->
			<router-view></router-view>
		</v-main>
		<v-footer class="bg-dark text-white ">
			<v-container class="footer-width mx-auto">
				<v-row class="justify-space-between my-4 text-left">
					<v-col cols="12" sm="4" md="4" class="py-5 pr-0 text-left">
						<v-img class="img-footer" src="./assets/logologo.png"></v-img>
						<div class="pl-3">
							<p class="text-body-2">Ciesielska 2</p>
							<p><b>15-544 Białystok</b></p>
							<p class="my-4"> <a href="tel:+48 732 721 521">+48 732 721 521</a></p>
							<p class="footer-mail"> <a href="mailto:cieciewoda3d@wp.pl">CIECIEWODA3D@WP.PL</a></p>
						</div>
						
					</v-col>
					<v-col class="py-5 pl-0 pl-sm-5 pr-0" cols="12" sm="4" md="4">
							
							<v-list class=" pa-0 bg-dark text-white">
					<h2 class="ml-5 ml-sm-0 ">Godziny otwarcia</h2>
								<v-list-item><p class="ml-5 ml-sm-0">Poniedziałek - Piątek: 8.00–16.00</p>
								</v-list-item>
								<v-list-item><p class="ml-5 ml-sm-0">Sobota: nieczynne (do odwołania)</p>
								</v-list-item>
								<v-list-item><p class="ml-5 ml-sm-0">Niedziela: nieczynne</p>
								</v-list-item>
							</v-list>
					</v-col>
					<v-col cols="12" sm="3" md="4" class="py-5 pr-sm-4 align-center">
						<h2>O firmie</h2>
						<p class="py-5 pr-0"
							>Firma powstała w roku 2015. Świadczymy fachowe usługi „abrasive
							waterjet” - czyli cięcie strumieniem wody w najróżniejszych
							materiałach oraz pod różnymi kątami.</p
						>
					</v-col>
				</v-row>
			</v-container>
		</v-footer>
	</v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import router from './router';
const drawer = ref(false);
const themie = 'light';
const items = [
	{ title: 'Home', value: 'home', link: '/' },
	{ title: 'About', value: 'about', link: '/about' },
];

const theme = useTheme();
function toggleTheme() {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
	localStorage.themeRecognition = theme.global.name.value;
}
</script>

<style>
.v-footer .v-row {
	margin:0;
}
.v-footer{
	width: 100%;
}
.footer-width{
	max-width: 1200px;
}
.v-footer .v-list-item{
	
	padding: 20px 0 20px 0 !important;
	border-bottom: #FFF 1px solid;
}
.footer-mail{
	word-break: break-all;
}

.v-switch {
	max-width: 50px;
}
.v-switch__thumb {
	color: #212121;
}
.bg-dark {
	background-color: #292c2f;
}
.v-footer {
	padding:0;
	margin: 0;
	min-height: 300px !important;
}
.v-footer p {
	padding: 8px 0 0 0 !important;
}

.v-footer a {
	text-decoration: none;
	color: orange;
}
.v-footer .v-img {
	max-width: 160px;
	max-height: 160px;
	width: 100% !important;
	height: auto !important;
}
</style>
