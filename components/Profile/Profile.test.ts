import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Profile from './index.vue';

describe('Profile Component', () => {
    it('should render childs', () => {
        const wrapper = mount(Profile, {
            global: {
                stubs: {
                    'font-awesome-icon': true
                }
            }
        });

        expect(wrapper.html).toMatchSnapshot();
    });
});
