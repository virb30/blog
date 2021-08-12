<template>
	<main :class="$style.content">
		<article :class="$style.post">
			<h1>{{ post.title }}</h1>
			<div :class="$style.postMeta" class="text-gray-500 dark:text-gray-400">
				<span class="mr-2">por  {{ post.primary_author.name }}</span>
				|
				<time class="mx-2">{{ updatedAt }}</time>
				|
				<span class="ml-2">{{ post.reading_time }} min de leitura</span>
			</div>
			<div
				:class="$style.postContent"
				v-html="post.html"
			/>
		</article>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';
import { getPostBySlug } from '~/api/posts';

interface Data {
	post: {
		title: string;
		html: string;
		slug: string;
		updated_at: string;
		feature_image?: string;
		canonical_url?: string;
		og_description?: string;
	}
}

interface Computed {
	updatedAt: string;
}

export default Vue.extend<Data, unknown, Computed, []>({
	head () {
		return {
			title: `${this.post.title} | viniboscoa.dev`,
			meta: [
				{
					hid: 'og:title',
					property: 'og:title',
					content: this.post.title,
				},
				{
					hid: 'og:type',
					property: 'og:type',
					content: 'article',
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: this.post.feature_image ?? '',
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: this.post.canonical_url ?? '',
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.post.og_description ?? '',
				},
			],
		};
	},
	computed: {
		updatedAt () {
			return new Date(this.post.updated_at).toLocaleDateString('pt-BR', {
				day: '2-digit',
				month: 'long',
				year: 'numeric',
			});
		},
	},
	fetchOnServer: true,
	async asyncData ({ params }) {
		const post = await getPostBySlug(params.slug);
		return { post };
	},
});
</script>

<style module src="./post.module.postcss" lang="postcss"></style>
<style src="./post.postcss" lang="postcss"></style>
