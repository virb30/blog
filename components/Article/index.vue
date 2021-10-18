<template>
	<NuxtLink :to="{path: `/blog/${post.slug}` }">
		<article class="bg-gray-300 dark:bg-gray-600 hover:opacity-80 rounded-lg">
			<header class="h-80 mb-3">
				<img :src="post.feature_image" :alt="post.slug" class="h-48 mx-auto rounded-t-lg w-full" />
				<h3 class="mt-6 font-bold text-lg px-4 block overflow-ellipsis overflow-hidden">
					{{ post.title }}
				</h3>
				<h5 class="px-4 text-sm opacity-80 mt-2">
					por {{ post.primary_author.name }}
				</h5>
			</header>
			<section class="px-4 mt-1 h-52">
				<p
					class="text-base overflow-ellipsis overflow-hidden text-justify"
					:class="[$style['clamp-text'], $style['clamp-lines-lg']]"
				>
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
	primary_author: {
		name: string;
	}
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

<style module scoped src="./style.module.css"></style>
