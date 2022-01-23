<template>
	<div class="w-full" :class="[$colorMode.preference]">
		<Header />
		<Nuxt />
		<CookieConsent v-if="!policyAccepted"/>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import Header from '~/components/Header/index.vue';
import CookieConsent from '~/components/CookieConsent/index.vue';

export default Vue.extend({
	components: { Header, CookieConsent },
	beforeMount () {
		this.fetchFromStorage();
	},
	methods: {
		...mapActions('ConsentTerm', ['fetchFromStorage'])
	},
	computed: {
		...mapGetters('ConsentTerm', {
			policyAccepted: 'getPolicyAccepted',
		}),
	},
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

<style scoped>
[v-cloak] {
  display: none;
}
</style>
