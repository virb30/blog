import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing'
import SwitchMode from './index.vue';
import { useColorModeStore } from '~~/stores/color-mode';

describe('SwitchMode', () => {
    it('should change preference on click', async () => {
        const wrapper = mount(SwitchMode, {
            global: {
                plugins: [createTestingPinia()]
            },
        });
        let icon;

        const colorModeStore = useColorModeStore()

        const button = wrapper.find('button');

        await button.trigger('click');
        icon = button.find('svg');

        expect(colorModeStore.darkMode).toBe(false);
        expect(icon.attributes('data-prefix')).toBe('fas');

        await button.trigger('click');
        icon = button.find('svg');

        expect(colorModeStore.darkMode).toBe(true);
        expect(icon.attributes('data-prefix')).toBe('far');
    });
});
