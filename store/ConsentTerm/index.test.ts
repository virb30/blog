import { state as originalState } from './index';

describe('Store:ConsentTerm:index', () => {
	it('should have an initial state', () => {
		expect(originalState()).toMatchObject({
			cookiesPolicyAccepted: false
		});
	});
});
