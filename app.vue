<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useHead } from 'nuxt/app';
import { useBlogStore } from './stores/blog';

const title = ref('viniboscoa.dev');
const description = ref('Site pessoal e blog para registrar impressões, aprendizados e insights sobre Desenvolvimento Web, Segurança da Informação e Data ScienceSite pessoal e blog com conteúdos sobre Desenvolvimento Web, Segurança da Informação e Data Science')

const blogStore = useBlogStore()

onBeforeMount(async () => {
    await blogStore.fetchPosts()
})

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
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>