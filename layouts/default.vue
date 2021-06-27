<template>
	<div class="w-full" :class="[$colorMode.preference]">
		<Header />
		<Nuxt />
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header/index.vue';

export default Vue.extend({
	components: { Header },
	head () {
		return {
			link: [
				{
					rel: 'canonical',
					href: 'https://viniboscoa.dev' + this.$route.path,
				},
			],
		};
	},
});
</script>
