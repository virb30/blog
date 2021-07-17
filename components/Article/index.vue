<template>
	<article class="bg-gray-300 dark:bg-gray-600">
		<NuxtLink :to="{path: `/blog/${post.slug}` }">
			<img :src="post.feature_image" :alt="post.slug" />
			<div>
				<h3>{{ post.title }}</h3>
			</div>
		</NuxtLink>
		<footer>
			{{ tags }}
		</footer>
	</article>
</template>

<script lang="ts">
import Vue from 'vue';

interface Tag {
	name: string;
}

interface Post {
	uuid: string;
	slug: string;
	title: string;
	feature_image: string;
	tags: Tag[]
}

interface Props {
	post?: Post
}

export default Vue.extend<unknown, unknown, unknown, Props>({
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	computed: {
		tags () {
			return this.post?.tags.map(tag => tag.name).join(', ');
		},
	},
});
</script>

<style module scoped src="./style.module.postcss" lang="postcss"></style>
