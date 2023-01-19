<template>
    <button type="button" class="bg-transparent border-none text-indigo-500 dark:text-indigo-400 text-3xl"
        :aria-checked="darkMode" @click="handleClick">
        <font-awesome-icon v-show="darkMode" :icon="['far', 'lightbulb']" />
        <font-awesome-icon v-show="!darkMode" :icon="['fas', 'lightbulb']" />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const colorMode = useColorMode()

const darkMode = computed(() => colorMode.preference === 'dark')

type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
    colorMode.preference = newTheme
}

const handleClick = () => {
    colorMode.preference === 'light' ? setColorTheme('dark') : setColorTheme('light')
};
</script>
