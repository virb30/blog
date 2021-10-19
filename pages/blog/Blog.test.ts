import Vuex from 'vuex';
import VueMeta from "vue-meta";
import { createLocalVue, mount } from "@vue/test-utils";
import Index from './index.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('Blog Page', () => {

	let store: any;
	let config: any;

	beforeEach(() => {

		const mockGetter = jest.fn();
		mockGetter.mockImplementationOnce(() => []);

		const mockFetchPosts = jest.fn();
		mockFetchPosts.mockImplementationOnce(() => []);

		store = new Vuex.Store({
			modules: {
				Blog: {
					namespaced: true,
					state: {
						posts: [],
						pagination: {},
					},
					getters: {
						last3Posts: mockGetter,
					},
					actions: {
						fetchPosts: mockFetchPosts,
					}
				}
			}
		});

		config = {
			localVue,
			stubs: {
				Article: true,
				Pagination: true,
			},
			store,
		};

	});

	it('should render childs', () => {
		const wrapper = mount(Index, config);

		expect(wrapper.html()).toMatchSnapshot();
	});

	describe('Meta info', () => {
		it('should have a meta title', () => {
			const wrapper = mount(Index, config);

			const expected = 'Blog | viniboscoa.dev';

			const meta = wrapper.vm.$meta().refresh();

			expect(meta.metaInfo.title).toBe(expected);
		});
	});
});
