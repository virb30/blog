import { getPosts } from '~/api/posts';
import { ActionsInterface, Mutations } from './types';

export default {
	async fetchPosts ({ commit }) {
		const posts = await getPosts();

		commit(Mutations.SET_POSTS, posts);
	},
} as ActionsInterface;
