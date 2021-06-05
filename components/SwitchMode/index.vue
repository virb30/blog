<template>
	<button
		type="button"
		class="bg-transparent border-none text-indigo-500 dark:text-indigo-400 text-3xl"
		:aria-checked="darkMode.toString()"
		@click="handleClick"
	>
		<FontAwesomeIcon :icon="!darkMode? ['fas', 'lightbulb']: ['far', 'lightbulb']" />
	</button>
</template>

<script lang="ts">
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb as fasLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as farLightbulb } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(fasLightbulb, farLightbulb);

export default Vue.extend({
	components: {
		FontAwesomeIcon,
	},
	computed: {
		darkMode () {
			return this.$colorMode.preference === 'dark';
		},
	},
	methods: {
		handleClick () {
			this.$colorMode.preference = this.darkMode ? 'light' : 'dark';
		},
	},
});
</script>
