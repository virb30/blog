<template>
    <header class="h-20 border-0 border-b border-solid border-gray-400 dark:border-gray-100">
        <div class="max-w-7xl h-20 my-0 mx-auto p-4 flex items-center justify-between">
            <Logo class="max-w-xs hidden md:block lg:block xl:block" />
            <nav class="md:ml-20 h-20">
                <NuxtLink exact to="/" active-class="active"
                    class="hover:text-black dark:hover:text-white inline-block relative py-0 px-3 h-20 leading-20 transition-color-2 mx-1">
                    Home
                </NuxtLink>
                <NuxtLink to="/about" active-class="active"
                    class="hover:text-black dark:hover:text-white inline-block relative py-0 px-3 h-20 leading-20 transition-color-2 mx-1">
                    Sobre
                </NuxtLink>
                <NuxtLink to="/blog" active-class="active"
                    class="hover:text-black dark:hover:text-white inline-block relative py-0 px-3 h-20 leading-20 transition-color-2 mx-1">
                    Blog
                </NuxtLink>
            </nav>
            <div class="ml-auto p-4">
                <ThemeSwitcher @change-theme="setColorTheme" :color-mode="props.colorMode" />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const props = defineProps({
    colorMode: {
        type: String,
        validator: (value: string) => {
            return ['dark', 'light'].includes(value)
        },
        default: () => 'dark'
    }
})

const emit = defineEmits(['change-theme'])

const setColorTheme = (theme: 'dark' | 'light') => {
    emit('change-theme', theme)
}


</script>

<style scoped lang="postcss">
.leading-20 {
    line-height: 5rem;
}

.transition-color-2 {
    transition: color 0.2s;
}

nav>a:hover,
nav>a.active {
    @apply font-bold;
}

.active::after {
    content: "";
    @apply w-full absolute left-0 bg-indigo-500 rounded-t rounded-b-none h-1;
    bottom: 1px;
}
</style>
