import { Pagination } from '@tryghost/content-api';
import getters from './getters';
import { State } from './types';

describe('Store:Blog:getters', () => {
	let state: State;

	beforeEach(() => {
		state = {
			pagination: {} as Pagination,
			posts: [
				{
					uuid: 'post-1',
				},
				{
					uuid: 'post-2',
				},
				{
					uuid: 'post-3',
				},
				{
					uuid: 'post-4',
				},
			],
		};
	});

	it('last3Posts', () => {
		const lastPosts = getters.last3Posts(state, {}, state, {});

		const expected = [
			{ uuid: 'post-1' },
			{ uuid: 'post-2' },
			{ uuid: 'post-3' },
		];

		expect(lastPosts.length).toEqual(3);
		expect(lastPosts).toEqual(expected);
	});
});
