import Vuex from 'vuex';
import VueMeta from "vue-meta";
import { createLocalVue, mount } from "@vue/test-utils";
import Layout from './default.vue';
import ConsentTerm from '../components/CookieConsent/index.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });
localVue.use(Vuex);


const buildConsentTermStore = (config: any = {}) => {
	const mockGetter = jest.fn();
	mockGetter.mockImplementationOnce(() => false);

	const mockFetchFromStorage = jest.fn();
	mockFetchFromStorage.mockImplementationOnce(() => false);

	const defaultConfig = {
		namespaced: true,
		state: {
			cookiesPolicyAccepted: false
		},
		getters: {
			getPolicyAccepted: mockGetter,
		},
		actions: {
			fetchFromStorage: mockFetchFromStorage,
		}
	};

	return new Vuex.Store({
		modules: {
			ConsentTerm: {
				...defaultConfig,
				...config
			}
		}
	});
}

describe('Default Layout', () => {
	let store: any;
	let config: any;

	beforeEach(() => {
		store = buildConsentTermStore();
		config = {
			localVue,
			mocks: {
				$route: {
					path: ''
				},
				$colorMode: {
					preference: 'dark',
				}
			},
			store
		}
	})

	it('should render childs', () => {
		const wrapper = mount(Layout, config);

		const div = wrapper.find('div');

		expect(wrapper.html()).toMatchSnapshot();
		expect(div.classes()).toContain('dark');
	});

	it('should render cookies consent term dialog', () => {
		const wrapper = mount(Layout, config);

		const cookieConsentTerm = wrapper.findComponent(ConsentTerm);

		expect(wrapper.html()).toMatchSnapshot();
		expect(cookieConsentTerm.exists()).toBe(true);
	});

	it('should not render cookies consent term dialog', () => {
		const mockGetter = jest.fn();
		mockGetter.mockImplementationOnce(() => true);

		store = buildConsentTermStore({
			getters: {
				getPolicyAccepted: mockGetter,
			},
		});

		const wrapper = mount(Layout, {...config, store});

		const cookieConsentTerm = wrapper.findComponent(ConsentTerm);

		expect(wrapper.html()).toMatchSnapshot();
		expect(cookieConsentTerm.exists()).toBe(false);
	});
});
