<template>
	<div class="flex flex-col items-center my-12">
		<div class="flex">
			<page-button
				type="button"
				:disabled="!pagination.prev"
				@click="prevPage"
			>
				<FontAwesomeIcon :icon="['fas', 'chevron-left']" />
			</page-button>
			<page-button
				v-for="page in pagination.pages"
				:key="page"
				:active="page === pagination.page"
				@click="toPage(page)"
			>
				{{ page }}
			</page-button>
			<page-button
				:disabled="!pagination.next"
				@click="nextPage"
			>
				<FontAwesomeIcon :icon="['fas', 'chevron-right']" />
			</page-button>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions, mapState } from 'vuex';
import { Pagination } from '@tryghost/content-api';
import PageButton from './PageButton.vue';

library.add(faChevronLeft, faChevronRight);

interface Methods {
	prevPage(): void
	toPage(page: number): void
	nextPage(): void
	fetchPosts(page: number): void
}

interface Computed {
	pagination: Pagination,
}

export default Vue.extend<unknown, Methods, Computed, unknown>({
	components: { FontAwesomeIcon, PageButton },
	computed: {
		...mapState('Blog', ['pagination']),
	},
	methods: {
		...mapActions('Blog', ['fetchPosts']),
		nextPage () {
			if (this.pagination.next) {
				this.toPage(this.pagination.next);
			}
		},
		prevPage () {
			if (this.pagination.prev) {
				this.toPage(this.pagination.prev);
			}
		},
		toPage (page: number) {
			this.fetchPosts(page);
		},
	},
});
</script>
