<template>
    <div>
        <main class="m-auto max-w-6xl p-4">
            <header class="mt-12 mb-8">
                <h1 class="font-bold text-2xl mb-3">
                    Blog
                </h1>
                <p class="font-light text-xl">
                    Conteúdo sobre o Desenvolvimento Web e Data Science
                </p>
            </header>
            <div v-show="isLoading" class="w-full flex justify-center">
                <Spinner />
            </div>
            <div v-show="!isLoading"
                class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 flex-col sm:flex-row lg:flex-row w-full flex-wrap">
                <Article v-for="post in posts" :key="post.uuid" :post="post" />
            </div>
            <Pagination :pagination="pagination" @change-page="changePage" />
        </main>
    </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog';
import { computed } from 'vue';

useHead({
    title: 'Blog | viniboscoa.dev'
})

const blogStore = useBlogStore()

const posts = computed(() => blogStore.posts)
const pagination = computed(() => blogStore.pagination)
const isLoading = computed(() => blogStore.isLoading)

const changePage = (page: number) => {
    fetchPosts(page)
}

const fetchPosts = (page: number) => { blogStore.fetchPosts(page) }

</script>
