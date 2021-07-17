<template>
	<div>
		<main :class="$style.content">
			<header>
				<h1>Blog</h1>
				<p>Conteúdo sobre o Desenvolvimento Web e Data Science</p>
			</header>
			<div :class="$style.postsContainer">
				<Article v-for="post in posts" :key="post.uuid" :post="post" />
			</div>
			<Pagination />
		</main>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
	head: {
		title: 'Blog | viniboscoa.dev',
	},
	computed: {
		...mapState('Blog', ['posts', 'pagination']),
	},
});
</script>

<style lang="postcss" module scoped src="./style.module.postcss"></style>
