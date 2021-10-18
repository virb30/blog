<template>
	<header class="h-20 border-0 border-b border-solid border-gray-400 dark:border-gray-100">
		<div class="max-w-7xl h-20 my-0 mx-auto p-8 flex items-center justify-between">
			<Logo class="max-w-xs hidden md:block lg:block xl:block" />
			<nav class="ml-20 h-20">
				<NuxtLink
					exact
					to="/"
					active-class="active"
					class="hover:text-black dark-hover:text-white inline-block relative py-0 px-2 h-20 leading-20 transition-color-2"
				>
					Home
				</NuxtLink>
				<NuxtLink
					to="/about"
					active-class="active"
					class="hover:text-black dark-hover:text-white inline-block relative py-0 px-2 h-20 leading-20 transition-color-2"
				>
					Sobre
				</NuxtLink>
				<NuxtLink
					to="/blog"
					active-class="active"
					class="hover:text-black dark-hover:text-white inline-block relative py-0 px-2 h-20 leading-20 transition-color-2"
				>
					Blog
				</NuxtLink>
			</nav>
			<div class="ml-auto">
				<SwitchMode />
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style src="./styles.module.css" scoped></style>
