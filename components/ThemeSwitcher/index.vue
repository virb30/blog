<template>
    <button type="button" class="bg-transparent border-none text-indigo-500 dark:text-indigo-400 text-3xl"
        :aria-checked="darkMode" @click="handleClick">
        <font-awesome-icon v-show="darkMode" :icon="['far', 'lightbulb']" />
        <font-awesome-icon v-show="!darkMode" :icon="['fas', 'lightbulb']" />
    </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps({
    colorMode: {
        type: String,
        validator: (value: string) => {
            return ['dark', 'light'].includes(value)
        },
        default: () => 'dark'
    }
})

const theme = ref(props.colorMode)

const emit = defineEmits(['change-theme'])

const darkMode = computed(() => theme.value === 'dark')

const handleClick = () => {
    theme.value = props.colorMode === 'dark' ? 'light' : 'dark'
    emit('change-theme', theme.value)
};
</script>
