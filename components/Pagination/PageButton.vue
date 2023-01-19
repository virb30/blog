<template>
    <button type="button" v-bind="$attrs" :disabled="disabled || active"
        class="h-8 w-8 flex justify-center items-center border border-gray-400 bg-gray-300 dark:bg-gray-600"
        :class="buttonClasses" @click="$emit('click', $event)">
        <slot></slot>
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineEmits(['click'])

const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
})

const buttonClasses = computed(() => (
    {
        'opacity-40 cursor-not-allowed ': props.disabled,
        'bg-indigo-500 dark:bg-indigo-500 cursor-default text-gray-50': props.active,
        'hover:opacity-80 cursor-pointer': !props.disabled && !props.active,
    }
));
</script>
