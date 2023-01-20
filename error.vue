<script setup lang="ts">
import { useError, useHead } from 'nuxt/app';
import { ref } from 'vue';

const error = useError()

const title = ref(`${error.statusCode ?? ''} | viniboscoa.dev`)

useHead(
    {
        title,
        htmlAttrs: {
            lang: 'pt-BR',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Error' },
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
    <div class="mx-auto max-w-6xl grid py-2 w-full h-screen content-center">
        <div class="flex-col justify-center items-center text-center align-middle m-auto" v-if="error">
            <h2 class="text-9xl m-2">{{ error.statusCode }}</h2>
            <h3 class="text-4xl m-2">{{ error.statusMessage }}</h3>
            <NuxtLink
                class="bg-gray-300 text-gray-900 rounded p-3 m-8 hover:bg-indigo-700 hover:text-gray-50 cursor-pointer block"
                :to="{ path: '/' }">
                Voltar para a página inicial
            </NuxtLink>
        </div>
    </div>
</template>