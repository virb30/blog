<script setup lang="ts">
import { useHead } from 'nuxt/app';
import { ref, onBeforeMount, computed, onMounted } from 'vue';
import { useBlogStore } from './stores/blog';
import { useSessionStore } from './stores/session';

const title = ref('viniboscoa.dev');
const description = ref('Site pessoal e blog para registrar impressões, aprendizados e insights sobre Desenvolvimento Web, Segurança da Informação e Data ScienceSite pessoal e blog com conteúdos sobre Desenvolvimento Web, Segurança da Informação e Data Science')

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

const blogStore = useBlogStore()
const sessionStore = useSessionStore()
const colorMode = useColorMode()

onBeforeMount(async () => {
    await blogStore.fetchPosts()
})

onMounted(() => {
    changeColorTheme(colorMode.preference === 'system' ? 'dark' : colorMode.preference)

    if (!sessionStore.exists) {
        sessionStore.generate()
    }
})

const changeColorTheme = (theme: 'dark' | 'light') => {
    colorMode.preference = theme
}

const preference = computed(() => colorMode.preference === 'system' ? 'dark' : colorMode.preference)

</script>

<template>
    <div :class="preference">
        <Header @change-theme="changeColorTheme" :color-mode="preference" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>