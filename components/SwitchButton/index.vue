<template>
	<button
		type="button"
		class="bg-transparent border-none text-indigo-500 dark:text-indigo-400 text-3xl"
		:aria-checked="value.toString()"
		@click="handleClick"
	>
		<FontAwesomeIcon :icon="value? ['fas', 'lightbulb']: ['far', 'lightbulb']" />
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
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		handleClick () {
			this.$emit('input', !this.value);
		},
	},
});
</script>
