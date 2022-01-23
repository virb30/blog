import { ActionsInterface, Mutations } from './types';

export default {
	acceptCookiesPolicy ({ commit }) {
		sessionStorage.setItem('cookie-policy-accepted', JSON.stringify(true));
		commit(Mutations.SET_COOKIES_ACCEPTED, true);
	},
	fetchFromStorage ({ commit }) {
		const accepted = !!sessionStorage.getItem('cookie-policy-accepted');
		commit(Mutations.SET_COOKIES_ACCEPTED, accepted);
	},
} as ActionsInterface;
