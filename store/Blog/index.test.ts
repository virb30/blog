import { state as originalState } from './index';

describe('Store:Blog:index', () => {
	it('should have an initial state', () => {
		expect(originalState()).toMatchObject({
			posts: [],
			pagination: {},
		});
	});
});
