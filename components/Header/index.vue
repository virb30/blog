<template>
	<header :class="$style.headerContainer">
		<div :class="$style.headerContent">
			<img src="~/assets/images/logo.png" alt="viniboscoa" />
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
			<SwitchMode />
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style module src="./styles.module.postcss" lang="postcss" scoped></style>
