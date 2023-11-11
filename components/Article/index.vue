<template>
    <NuxtLink :to="{ path: `/blog/${props.post.slug}` }">
        <article class="bg-gray-300 dark:bg-gray-600 hover:opacity-80 rounded-lg">
            <header class="h-80 mb-3">
                <img :src="props.post.featureImage" :alt="props.post.slug" class="h-48 mx-auto rounded-t-lg w-full" />
                <h3 class="mt-6 font-bold text-lg px-4 block overflow-ellipsis overflow-hidden">
                    {{ props.post.title }}
                </h3>
                <h5 class="px-4 text-sm opacity-80 mt-2">
                    por {{ props.post.primaryAuthor.name }}
                </h5>
            </header>
            <section class="px-4 mt-1 h-52">
                <p class="text-base overflow-ellipsis overflow-hidden text-justify"
                    :class="[$style['clamp-text'], $style['clamp-lines-lg']]">
                    {{ props.post.excerpt }}
                </p>
            </section>
        </article>
    </NuxtLink>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import Post from '../../domain/entity/Post'

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true,
    },
})


</script>

<style scoped module lang="postcss">
.clamp-text {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
}

.clamp-lines-sm {
    -webkit-line-clamp: 4;
}

.clamp-lines-lg {
    -webkit-line-clamp: 9;
}
</style>
