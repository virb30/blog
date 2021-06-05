<template>
	<main>
		<div :class="$style.container">
			<Profile />
		</div>
		<div :class="$style.lastPosts">
			<h1>Últimos artigos</h1>
			<div :class="$style.articles">
				<Article v-for="post in posts" :key="post.uuid" :post="post" />
			</div>
			<div :class="$style.moreArticles">
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
		...mapGetters({
			posts: 'Blog/last3Posts',
		}),
	},
});
</script>

<style lang="postcss" scoped module src="./style.module.postcss"></style>
