import { mount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import Header from './index.vue';

describe('Header Component', () => {
    it('should render childs', () => {
        const wrapper = mount(Header, {
            global: {
                stubs: {
                    ThemeSwitcher: true,
                    Logo: true,
                    NuxtLink: RouterLinkStub,
                    'font-awesome-icon': true
                },
            }
        });

        const links = wrapper.findAllComponents(RouterLinkStub);

        expect(wrapper.html()).toMatchSnapshot();
        expect(links.length).toEqual(3);
    });
});
