<template>
	<header :class="$style.headerContainer">
		<div :class="$style.headerContent">
			<nav>
				<NuxtLink exact to="/" :active-class="$style.active">
					Home
				</NuxtLink>
				<NuxtLink to="/about" :active-class="$style.active">
					Sobre
				</NuxtLink>
				<NuxtLink to="/blog" :active-class="$style.active">
					Blog
				</NuxtLink>
			</nav>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>

<style module src="./styles.module.postcss" lang="postcss" scoped></style>
