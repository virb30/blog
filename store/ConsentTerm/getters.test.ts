import { Pagination } from '@tryghost/content-api';
import getters from './getters';
import { State } from './types';

describe('Store:Blog:getters', () => {
	let state: State;

	beforeEach(() => {
		state = {
			cookiesPolicyAccepted: true
		}
	});

	it('getPolicyAccepted', () => {
		const cookiesPolicyAccepted = getters.getPolicyAccepted(state, {}, state, {});

		expect(cookiesPolicyAccepted).toBe(true);
	});
});
