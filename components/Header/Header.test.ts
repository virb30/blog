import { mount, RouterLinkStub } from '@vue/test-utils';
import Header from './index.vue';

describe('Header Component', () => {
	it('should render childs', () => {
		const wrapper = mount(Header, {
			stubs: {
				SwitchMode: true,
				Logo: true,
				NuxtLink: RouterLinkStub,
			},
		});

		const links = wrapper.findAllComponents(RouterLinkStub);

		expect(wrapper.html()).toMatchSnapshot();
		expect(links.length).toEqual(3);
	});
});
