jest.mock('@/api/posts', () => ({
	getPosts: jest.fn()
}));

import { getPosts } from '@/api/posts';
import actions from './actions';
import { Mutations } from './types';



describe('Store:Blog:Actions', () => {

	it('should fetch posts', async () => {

		const commit = jest.fn();
		getPosts.mockImplementationOnce(() => ({
			posts: [],
			meta: { pagination: {} }
		}))

		await actions.fetchPosts({ commit });

		expect(commit).toHaveBeenCalledTimes(2);
		expect(commit).toHaveBeenCalledWith(Mutations.SET_POSTS, {
			posts: [],
			meta: { pagination: {} }
		});
		expect(commit).toHaveBeenCalledWith(Mutations.SET_PAGINATION, {});
	});

});
