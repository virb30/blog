<template>
	<button
		type="button"
		v-bind="$attrs"
		:disabled="disabled || active"
		class="h-8 w-8 flex justify-center items-center border border-gray-400 bg-gray-300 dark:bg-gray-600"
		:class="buttonClasses"
		@click="$emit('click', $event)"
	>
		<slot></slot>
	</button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	props: {
		active: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		buttonClasses () {
			return {
				'opacity-40 cursor-not-allowed ': this.disabled,
				'bg-indigo-500 dark:bg-indigo-500 cursor-default text-gray-50': this.active,
				'hover:opacity-80 cursor-pointer': !this.disabled && !this.active,
			};
		},
	},
});
</script>
