
import { Mutations, MutationsInterface } from './types';

export default {
	[Mutations.SET_POSTS] (state, posts) {
		state.posts = posts;
	},
	[Mutations.SET_PAGINATION] (state, pagination) {
		state.pagination = pagination;
	},
} as MutationsInterface;
