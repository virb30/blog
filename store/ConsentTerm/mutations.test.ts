import { Pagination } from '@tryghost/content-api';
import mutations from './mutations';
import { State, Mutations } from './types';

describe('Store:Blog:mutations', () => {
	let state: State;

	beforeEach(() => {
		state = {
			cookiesPolicyAccepted: false
		};
	});

	it(Mutations.SET_COOKIES_ACCEPTED, () => {
		mutations[Mutations.SET_COOKIES_ACCEPTED](state, true);

		expect(state).toEqual({
			cookiesPolicyAccepted: true
		});
	});
});
