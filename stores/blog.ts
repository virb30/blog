import { defineStore } from 'pinia';
import Post from '~~/domain/entity/Post';

interface Pagination {
    pages: number;
    page: number
    next: number | null;
    prev: number | null;
}

interface State {
    posts: Post[];
    pagination: Pagination;
    isLoading: boolean
}

export const useBlogStore = defineStore('blog', {
    state: (): State => ({
        posts: [],
        pagination: {} as Pagination,
        isLoading: false
    }),
    getters: {
        last3Posts: (state: State) => {
            return state.posts.slice(0, 3);
        },
    },
    actions: {
        async fetchPosts(page = 1) {
            try {
                this.isLoading = true
                const response = await $fetch(`/api/posts?page=${page}`) as any;
                const { pagination, posts } = response;

                this.setPosts(posts);
                this.setPagination(pagination);
            } finally {
                this.isLoading = false
            }

        },
        setPosts(posts: Post[]) {
            this.posts = posts;
        },
        setPagination(pagination: Pagination) {
            this.pagination = pagination;
        },
    }
});
