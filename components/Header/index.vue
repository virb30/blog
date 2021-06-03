<template>
	<header :class="$style.headerContainer">
		<div :class="$style.headerContent">
			<nav>
				<NuxtLink exact to="/" :active-class="$style.active" class="hover:text-black dark-hover:text-white">
					Home
				</NuxtLink>
				<NuxtLink to="/about" :active-class="$style.active" class="hover:text-black dark-hover:text-white">
					Sobre
				</NuxtLink>
				<NuxtLink to="/blog" :active-class="$style.active" class="hover:text-black dark-hover:text-white">
					Blog
				</NuxtLink>
			</nav>
			<SwitchButton v-model="lightMode" />
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	data () {
		return {
			lightMode: false,
		};
	},
	watch: {
		lightMode (newValue, oldValue) {
			if (newValue !== oldValue) {
				this.$colorMode.preference = newValue ? 'light' : 'dark';
			}
		},
	},
	mounted () {
		this.lightMode = this.$colorMode.preference !== 'dark';
	},
});
</script>

<style module src="./styles.module.postcss" lang="postcss" scoped></style>
