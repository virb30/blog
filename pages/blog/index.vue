<template>
	<div>
		<main class="m-auto max-w-6xl p-4">
			<header class="mt-12 mb-8">
				<h1 class="font-bold text-2xl mb-3">
					Blog
				</h1>
				<p class="font-light text-xl">
					Conteúdo sobre o Desenvolvimento Web e Data Science
				</p>
			</header>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
				<Article v-for="post in posts" :key="post.uuid" :post="post" />
			</div>
			<Pagination :pagination="pagination" @change="(page) => fetchPosts(page)" />
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState, mapActions } from 'vuex';

interface Methods {
	fetchPosts(page: number): void;
}

export default Vue.extend<unknown, Methods, unknown, unknown>({
	head: {
		title: 'Blog | viniboscoa.dev',
	},
	methods: {
		...mapActions('Blog', ['fetchPosts']),
	},
	computed: {
		...mapState('Blog', ['posts', 'pagination']),
	},
});
</script>
