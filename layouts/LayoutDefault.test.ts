import Vuex from 'vuex';
import VueMeta from "vue-meta";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import Layout from './default.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });

describe('Default Layout', () => {

	it('should render childs', () => {
		const wrapper = mount(Layout, {
			localVue,
			mocks: {
				$route: {
					path: ''
				},
				$colorMode: {
					preference: 'dark',
				}
			}
		});

		const div = wrapper.find('div');


		expect(wrapper.html()).toMatchSnapshot();
		expect(div.classes()).toContain('dark');
	});
});
