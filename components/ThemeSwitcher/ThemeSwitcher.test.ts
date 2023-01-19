import { mount } from '@vue/test-utils';
import ThemeSwitcher from './index.vue';
import { describe, expect, it, vi } from 'vitest';

describe('SwitchMode', () => {
    it('should change preference on click', async () => {
        const wrapper = mount(ThemeSwitcher, {
            props: {
                colorMode: 'dark'
            },
            global: {
                stubs: {
                    'font-awesome-icon': true
                }
            }
        });

        const button = wrapper.find('button');

        await button.trigger('click');

        await wrapper.vm.$nextTick()

        expect(wrapper.emitted()['change-theme']).toBeDefined()
    });
});
