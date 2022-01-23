import { getPosts } from '@/api/posts';
import actions from './actions';
import { Mutations } from './types';



describe('Store:ConsentTerm:Actions:acceptCookiesPolicy', () => {

	beforeEach(() => {
		sessionStorage.clear();
	});

	it('should accept cookies policy', () => {
		const commit = jest.fn();
		actions.acceptCookiesPolicy({ commit });

		expect(commit).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledWith(Mutations.SET_COOKIES_ACCEPTED, true);
	});

	it('should fetch accepeted cookies policy from storage as true', () => {
		sessionStorage.setItem('cookie-policy-accepted', JSON.stringify(true));

		const commit = jest.fn();
		actions.fetchFromStorage({ commit });

		expect(commit).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledWith(Mutations.SET_COOKIES_ACCEPTED, true);
	});

	it('should fetch accepeted cookies policy from storage as false', () => {
		const commit = jest.fn();
		actions.fetchFromStorage({ commit });

		expect(commit).toHaveBeenCalledTimes(1);
		expect(commit).toHaveBeenCalledWith(Mutations.SET_COOKIES_ACCEPTED, false);
	});

});
