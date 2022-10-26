<template>
	<v-app >
		
		<v-app-bar app>
      
			
			<v-toolbar-title ><v-img
				contain
				lazy-src="https://picsum.photos/id/11/10/6"
				max-height="100"
				max-width="200"
				src="./assets/logodark.png"
			  ></v-img></v-toolbar-title>
			  <v-app-bar-nav-icon class="hidden-sm-and-up" variant="text" @click="drawer = !drawer">
			</v-app-bar-nav-icon>
			<v-toolbar-items class="hidden-xs">
				<v-btn flat v-for="items in router.getRoutes()" :key="items.name" :to="items.path">{{
					items.name
				}}</v-btn>
			</v-toolbar-items>
		</v-app-bar>



    <v-navigation-drawer  class="hidden-sm-and-up" disable-route-watcher disable-resize-watcher  v-model="drawer" bottom temporary>
			<v-list>
        <v-btn size="x-large" :density="comfortable" flat block nav v-for="items in router.getRoutes()" :key="items.name" :to="items.path">{{
					items.name
				}}</v-btn>
      </v-list>
		</v-navigation-drawer>
		<!-- Sizes your content based upon application components -->
		<v-main   class="text-center">
			<!-- Provides the application the proper gutter -->
			
				<!-- If using vue-router -->
				<router-view></router-view>
	
		</v-main>

	</v-app>
</template>

<script setup>
import { ref } from 'vue';
import router from './router';

const drawer = ref(false);
const items = [
	{ title: 'Home', value: 'home', link:"/"},
	{ title: 'About', value: 'about', link:"/about"},
];
</script>

<style>

</style>