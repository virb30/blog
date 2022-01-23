
import { Mutations, MutationsInterface } from './types';

export default {
	[Mutations.SET_COOKIES_ACCEPTED] (state, accepted) {
		state.cookiesPolicyAccepted = accepted;
	},
} as MutationsInterface;
