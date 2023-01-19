<template>

    <Head>
        <Title>{{ `${post.title} | viniboscoa.dev` }}</Title>
        <Meta property="og:title" :content="post.title" />
        <Meta property="og:type" content="article" />
        <Meta property="og:image" :content="post.featureImage ?? ''" />
        <Meta property="og:url" :content="post.canonicalUrl ?? ''" />
        <Meta property="og:description" :content="post.metaDescription ?? ''" />
        <Meta name="description" :content="post.metaDescription ?? ''" />
    </Head>

    <main class="mx-auto max-w-6xl py-2 w-full">
        <article class="max-w-4xl mt-20 mx-auto mb-0 px-4">
            <h1 class="font-black text-5xl">
                {{ post.title }}
            </h1>
            <div class="text-gray-500 dark:text-gray-400 flex mt-6 items-center">
                <span class="mr-2 block">por {{ post.primaryAuthor?.name }}</span>
                |
                <time class="mx-2 block text-base">{{ updatedAt }}</time>
                |
                <span class="ml-2 block">{{ post.readingTime }} min de leitura</span>
            </div>
            <div class="postContent" v-html="post.html" />
        </article>
    </main>
</template>

<script setup lang="ts">
import { useFetch, useRoute } from 'nuxt/app';
import { computed, reactive } from 'vue'
import { PostOutputDto } from '~/domain/dto/PostOutputDto';

const route = useRoute()

const { data } = await useFetch(
    `/api/post?slug=${route.params.slug}`,
    { server: true }
);
const post = reactive(data as PostOutputDto)

const updatedAt = computed(() => {
    return post.updatedAt?.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
})

</script>

<style src="./post.css">

</style>
