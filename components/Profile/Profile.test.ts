import { mount } from "@vue/test-utils";
import { describe, expect, it, vitest } from "vitest";
import Profile from './index.vue';

describe('Profile Component', () => {
    it.skip('should render childs', () => {
        const wrapper = mount(Profile, {
            global: {
                provide: {
                    sessionStore: {
                        sessionId: '1'
                    },
                    analytics: {
                        logEvent: vitest.fn()
                    }
                },
                stubs: {
                    'font-awesome-icon': true
                },
            }
        });

        expect(wrapper.html).toMatchSnapshot();
    });

    it.skip('should create component and log event childs', () => {
        const logEventSpy = vitest.fn()
        const wrapper = mount(Profile, {
            global: {
                provide: {
                    sessionStore: {
                        sessionId: '1'
                    },
                    analytics: {
                        logEvent: logEventSpy
                    }
                },
                stubs: {
                    'font-awesome-icon': true
                },
            }
        });

        wrapper.get('#contact-linkedin').trigger('click');

        expect(logEventSpy).toBeCalledWith('contact', { type: 'linkedin', sessionId: '1' });

        expect(wrapper.html).toMatchSnapshot();
    });
});
