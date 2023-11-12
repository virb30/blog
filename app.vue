<script setup lang="ts">
import { ref, onBeforeMount, computed, onMounted } from 'vue';
import { useBlogStore } from './stores/blog';
import { useSessionStore } from './stores/session';

const title = ref('viniboscoa.dev');
const description = ref('Site pessoal e blog para registrar impressões, aprendizados e insights sobre Desenvolvimento Web, Segurança da Informação e Data ScienceSite pessoal e blog com conteúdos sobre Desenvolvimento Web, Segurança da Informação e Data Science')

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

        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
        </Head>
        <Header @change-theme="changeColorTheme" :color-mode="preference" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>