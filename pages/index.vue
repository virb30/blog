<template>
	<main>
		<div class="container w-full bg-cover bg-fixed bg-center flex items-center justify-center flex-col py-16 px-8 text-white">
			<Profile />
		</div>
		<div class="mx-auto max-w-6xl p-4">
			<h2 class="my-4 font-bold text-xl">
				Últimos artigos
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
				<Article v-for="post in posts" :key="post.uuid" :post="post" />
			</div>
			<div class="text-right font-light my-4">
				<NuxtLink to="/blog">
					Ver todos os artigos
					<FontAwesomeIcon :icon="['fas', 'chevron-right']" />
				</NuxtLink>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faChevronRight);

interface Post {
	uuid?: string;
}

interface Data {
	posts: Post[];
}

export default Vue.extend<Data, unknown, unknown, []>({
	components: {
		FontAwesomeIcon,
	},
	head: {
		title: 'Home | viniboscoa.dev',
	},
	computed: {
		...mapGetters('Blog', {
			posts: 'last3Posts',
		}),
	},
});
</script>

<style scoped src="./style.module.css"></style>
