<template>
	<NuxtLink :to="{path: `/blog/${post.slug}` }">
		<article class="bg-gray-300 dark:bg-gray-600">
			<header>
				<img :src="post.feature_image" :alt="post.slug" />
				<h3>{{ post.title }}</h3>
				<h5>por {{ post.primary_author.name }} </h5>
			</header>
			<section>
				<p>
					{{ post.excerpt }}
				</p>
			</section>
		</article>
	</NuxtLink>
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
	tags: Tag[],
	updated_at: Date;
}

interface Props {
	post: Post
}

export default Vue.extend<unknown, unknown, unknown, Props>({
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
});
</script>

<style module scoped src="./style.module.postcss" lang="postcss"></style>
