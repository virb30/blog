<template>
	<div>
		<main :class="$style.content">
			<header>
				<h1>Blog</h1>
				<p>Conteúdo sobre o Desenvolvimento Web e Data Science</p>
			</header>
			<div :class="$style.postsContainer">
				<article v-for="post in posts" :key="post.uuid" class="bg-gray-300 dark:bg-gray-600">
					<NuxtLink :to="{path: `/blog/${post.slug}` }">
						<img :src="post.feature_image" :alt="post.slug" />
						<div>
							<h3>{{ post.title }}</h3>
						</div>
					</NuxtLink>
				</article>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { getPosts } from '~/api/posts';

export default Vue.extend({
	head: {
		title: 'Blog | viniboscoa.dev',
	},
	async asyncData () {
		const posts = await getPosts();

		return { posts };
	},
});
</script>

<style lang="postcss" module scoped src="./style.module.postcss"></style>
