import { ActionTree } from 'vuex';
import { Actions } from './Blog/types';

export const actions: ActionTree<any, any> = {
	async nuxtServerInit ({ dispatch }) {
		await dispatch('Blog/' + Actions.fetchPosts);
	},
};
