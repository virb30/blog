import { mount } from '@vue/test-utils';
import SwitchMode from './index.vue';

describe('SwitchMode', () => {
	it('should change preference on click', async () => {
		const wrapper = mount(SwitchMode, {
			mocks: {
				$colorMode: {
					preference: 'dark',
				},
			},
		});
		let icon;

		const button = wrapper.find('button');

		await button.trigger('click');
		icon = button.find('svg');

		expect(wrapper.vm.$colorMode.preference).toBe('light');
		expect(icon.attributes('data-prefix')).toBe('fas');

		await button.trigger('click');
		icon = button.find('svg');

		expect(wrapper.vm.$colorMode.preference).toBe('dark');
		expect(icon.attributes('data-prefix')).toBe('far');
	});
});
