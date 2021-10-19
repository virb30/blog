import VueMeta from "vue-meta";
import { createLocalVue, mount, RouterLinkStub } from "@vue/test-utils";
import Index from './index.vue';

const localVue = createLocalVue();
localVue.use(VueMeta, { keyName: 'head' });

describe('About Page', () => {

	it('should render childs', () => {
		const wrapper = mount(Index, {
			localVue,
			stubs: {
				Profile: true,
			}
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	describe('Meta info', () => {
		it('should have a meta title', () => {
			const wrapper = mount(Index, {
				localVue,
				stubs: {
					Profile: true,
				}
			});

			const expected = 'Sobre | viniboscoa.dev';

			const meta = wrapper.vm.$meta().refresh();

			expect(meta.metaInfo.title).toBe(expected);
		});
	});
});
