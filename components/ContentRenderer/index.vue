<template>
    <div class="postContent" v-html="$props.content" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

defineProps(['content']);

const hightLighter = useHighlighter();

onMounted(() => {
    hightLighter.highlightAll();
})

</script>