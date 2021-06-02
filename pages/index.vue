<template>
	<main>
		<div :class="$style.container">
			<Profile />
		</div>
	</main>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	head: {
		title: 'Home | viniboscoa.dev',
	},
});
</script>

<style lang="postcss" scoped module src="./style.module.postcss">

</style>
