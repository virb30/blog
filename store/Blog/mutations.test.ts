import { Pagination } from '@tryghost/content-api';
import mutations from './mutations';
import { State, Mutations } from './types';

describe('Store:Blog:mutations', () => {
	let state: State;

	beforeEach(() => {
		state = {
			pagination: {} as Pagination,
			posts: [
				{
					uuid: 'post-4',
				},
				{
					uuid: 'post-3',
				},
				{
					uuid: 'post-2',
				},
				{
					uuid: 'post-1',
				},
			],
		};
	});

	it(Mutations.SET_POSTS, () => {
		mutations[Mutations.SET_POSTS](state, [
			{ uuid: 'post-5' },
			{ uuid: 'post-6' },
			{ uuid: 'post-7' },
		]);

		expect(state).toEqual({
			pagination: {},
			posts: [
				{ uuid: 'post-5' },
				{ uuid: 'post-6' },
				{ uuid: 'post-7' },
			],
		});
	});

	it(Mutations.SET_PAGINATION, () => {
		mutations[Mutations.SET_PAGINATION](state, {
			page: 1,
			limit: 1,
			pages: 1,
			total: 1,
			next: null,
			prev: null,
		});

		expect(state).toEqual({
			pagination: {
				page: 1,
				limit: 1,
				pages: 1,
				total: 1,
				next: null,
				prev: null,
			},
			posts: [
				{
					uuid: 'post-4',
				},
				{
					uuid: 'post-3',
				},
				{
					uuid: 'post-2',
				},
				{
					uuid: 'post-1',
				}],
		});
	});
});
