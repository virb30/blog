<template>
    <div class="flex flex-col items-center my-12">
        <div class="flex">
            <page-button type="button" :disabled="!pagination.prev" @click="prevPage">
                <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </page-button>
            <page-button v-for="page in pagination.pages" :key="page" :active="page === pagination.page"
                @click="toPage(page)">
                {{ page }}
            </page-button>
            <page-button :disabled="!pagination.next" @click="nextPage">
                <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </page-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import PageButton from './PageButton.vue';

const props = defineProps({
    pagination: {
        type: Object,
        required: true,
    }
});

const emit = defineEmits(['change-page'])

const nextPage = () => {
    if (props.pagination.next) {
        toPage(props.pagination.next);
    }
};

const prevPage = () => {
    if (props.pagination.prev) {
        toPage(props.pagination.prev);
    }
};


const toPage = (page: number) => {
    emit('change-page', page);
};

defineExpose({ toPage })

</script>
