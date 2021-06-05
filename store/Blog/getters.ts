import { Getters } from './types';

export default {
	last3Posts (state) {
		return state.posts.slice(0, 3);
	},
} as Getters;
