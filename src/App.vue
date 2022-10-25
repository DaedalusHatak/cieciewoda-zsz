<template>
	<v-app>
		
		<v-app-bar app>
      
			<v-app-bar-nav-icon class="hidden-sm-and-up" variant="text" @click.stop="drawer = !drawer">
			</v-app-bar-nav-icon>
			<v-toolbar-title>Coding Beauty</v-toolbar-title>
			<v-toolbar-items class="hidden-xs">
				<v-btn flat v-for="items in items" :key="items.title" :to="items.link">{{
					items.title
				}}</v-btn>
			</v-toolbar-items>
		</v-app-bar>



    <v-navigation-drawer  class="hidden-print-only" disable-route-watcher disable-resize-watcher  v-model="drawer" bottom temporary>
			<v-list>
        <v-btn size="x-large" :density="comfortable" flat block nav v-for="items in items" :key="items.title" :to="items.link">{{
					items.title
				}}</v-btn>
      </v-list>
		</v-navigation-drawer>
		<!-- Sizes your content based upon application components -->
		<v-main>
			<!-- Provides the application the proper gutter -->
			<v-container fluid>
				<!-- If using vue-router -->
				<router-view></router-view>
			</v-container>
		</v-main>

		<v-footer app>
			<!-- -->
		</v-footer>
	</v-app>
</template>

<script setup>
import { ref } from 'vue';
const drawer = ref('');
const items = [
	{ title: 'Home', value: 'home', link:"/"},
	{ title: 'About', value: 'about', link:"/about"},
];
</script>
