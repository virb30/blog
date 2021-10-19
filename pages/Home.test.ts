import Vuex from 'vuex';
import VueMeta from "vue-meta";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import Index from './index.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);

describe('Home Page', () => {

	let store: any;
	let config: any;

	beforeEach(() => {

		const mockGetter = jest.fn()
		mockGetter.mockImplementationOnce(() => []);

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
					}
				}
			}
		});

		config = {
			localVue,
			stubs: {
				Profile: true,
				FontAwesomeIcon: true,
				Logo: true,
				NuxtLink: RouterLinkStub,
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

			const expected = 'Home | viniboscoa.dev';

			const meta = wrapper.vm.$meta().refresh();

			expect(meta.metaInfo.title).toBe(expected);
		});
	});
});
