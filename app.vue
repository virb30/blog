<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { ref, onBeforeMount, computed, watch } from 'vue';
import { useBlogStore } from './stores/blog';

const title = ref('viniboscoa.dev');
const description = ref('Site pessoal e blog para registrar impressões, aprendizados e insights sobre Desenvolvimento Web, Segurança da Informação e Data ScienceSite pessoal e blog com conteúdos sobre Desenvolvimento Web, Segurança da Informação e Data Science')

const blogStore = useBlogStore()
const colorMode = useColorMode()
const preference = ref<'dark' | 'light'>(colorMode.preference)

onBeforeMount(async () => {
    await blogStore.fetchPosts()
})

colorMode.preference = preference.value

const changeColorTheme = (theme: 'dark' | 'light') => {
    preference.value = theme
    colorMode.preference = preference.value
}

useHead(
    {
        title,
        htmlAttrs: {
            lang: 'pt-BR',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: description },
            { name: 'theme-color', content: '#E5E7EB' },
        ],
        link: [
            { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
            { href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap', rel: 'stylesheet' },
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        ],
    }
)
</script>

<template>
    <div :class="preference">
        <Header @change-theme="changeColorTheme" :color-mode="preference" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>