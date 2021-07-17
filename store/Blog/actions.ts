import { getPosts } from '~/api/posts';
import { ActionsInterface, Mutations } from './types';

export default {
	async fetchPosts ({ commit }, page = 1) {
		const posts = await getPosts({
			page,
		});

		const { meta } = posts;

		commit(Mutations.SET_POSTS, posts);
		commit(Mutations.SET_PAGINATION, meta.pagination);
	},
} as ActionsInterface;
