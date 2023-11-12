<template>
    <main>
        <div
            class="banner w-full bg-cover bg-fixed bg-center flex items-center justify-center flex-col py-16 px-8 text-white">
            <Profile />
        </div>
        <div class="mx-auto max-w-6xl p-4">
            <h2 class="my-4 font-bold text-xl">
                Últimos artigos
            </h2>
            <div
                class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
                <Article v-for="post in posts" :key="post.uuid" :post="post" />
            </div>
            <div class="text-right font-light my-4">
                <NuxtLink to="/blog">
                    Ver todos os artigos
                    <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useBlogStore } from '../stores/blog';

useHead({
    title: 'Home | viniboscoa.dev'
});

const blogStore = useBlogStore();

const posts = computed(() => blogStore.last3Posts)
</script>

<style scoped lang="postcss">
.banner {
    background-image: url("~/assets/images/background.jpg");
}
</style>
