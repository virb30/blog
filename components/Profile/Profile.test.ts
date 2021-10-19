import { mount } from "@vue/test-utils";
import Profile from './index.vue';

describe('Profile Component', () => {
	it('should render childs', () => {
		const wrapper = mount(Profile);

		expect(wrapper.html).toMatchSnapshot();
	});
});
