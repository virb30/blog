import { RootState, State } from './types';
import { GetterTree } from 'vuex';

const getters: GetterTree<RootState, State> = {
	getPolicyAccepted: (state) => {
		return state.cookiesPolicyAccepted
	},
};

export default getters;
