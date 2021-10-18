import { RootState, State } from './types';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootState, State> = {
	last3Posts: (state) => {
		return state.posts.slice(0, 3);
	},
};

export default getters;
