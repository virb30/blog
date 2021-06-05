
import { Mutations, MutationsInterface } from './types';

export default {
	[Mutations.SET_POSTS] (state, posts) {
		state.posts = posts;
	},
} as MutationsInterface;
