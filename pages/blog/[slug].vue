<template>

    <Head v-if="post">
        <Title>{{ `${post.title} | viniboscoa.dev` }}</Title>
        <Meta property="og:title" :content="post.title" />
        <Meta property="og:type" content="article" />
        <Meta property="og:image" :content="post.featureImage ?? ''" />
        <Meta property="og:url" :content="post.canonicalUrl ?? ''" />
        <Meta property="og:description" :content="post.metaDescription ?? ''" />
        <Meta name="description" :content="post.metaDescription ?? ''" />
    </Head>

    <main class="mx-auto max-w-6xl py-2 w-full pb-6">
        <section class="max-w-6xl mt-5 mx-auto mb-8 px-4">
            <NuxtLink to="/blog">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />
                Blog
            </NuxtLink>
        </section>
        <article v-show="!pending" class="max-w-6xl mx-auto mb-0 px-4" v-if="post">
            <h1 class="font-black text-5xl">
                {{ post.title }}
            </h1>
            <div class="text-gray-500 dark:text-gray-400 flex mt-6 items-center">
                <span class="mr-2 block">por {{ authorName }}</span>
                |
                <time class="mx-2 block text-base">{{ formattedUpdatedAt }}</time>
                |
                <span class="ml-2 block">{{ post.readingTime }} min de leitura</span>
            </div>
            <div class="postContent" v-html="post.html" />
        </article>
    </main>
</template>

<script setup lang="ts">
import { createError, useAsyncData, useRoute } from 'nuxt/app';
import { computed } from 'vue'
import { PostOutputDto } from '~/domain/dto/PostOutputDto';

const route = useRoute()

const { data: post, pending, error } = await useAsyncData<PostOutputDto>(
    `post:${route.params.slug}`,
    async (): Promise<PostOutputDto> => {
        return $fetch<PostOutputDto>('/api/post', {
            query: { slug: route.params.slug },
        })
    },
    {
        server: true
    }
)

if (error.value) {
    throw createError({ data: { redirectTo: "/blog" }, message: "Voltar ao blog", statusCode: 404, statusMessage: 'Post não encontrado' })
}

const formattedUpdatedAt = computed(() => {
    const updatedDate = new Date(post.value?.updatedAt ?? '')
    return updatedDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
})

const authorName = computed(() => {
    return post.value?.primaryAuthor?.name ?? ''
})


</script>

<style src="./post.css">

</style>
