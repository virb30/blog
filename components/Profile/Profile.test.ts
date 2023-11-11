import { mount } from "@vue/test-utils";
import { describe, expect, it, vitest } from "vitest";
import Profile from './index.vue';

describe('Profile Component', () => {
    it('should render childs', () => {
        const wrapper = mount(Profile, {
            props: {
                sessionStore: {
                    sessionId: '1'
                },
                analytics: {
                    logEvent: vitest.fn()
                }
            },
            global: {
                stubs: {
                    'font-awesome-icon': true,
                    sessionStorage
                },
            }
        });

        expect(wrapper.html).toMatchSnapshot();
    });

    it('should create component and log event childs', () => {
        const logEventSpy = vitest.fn()
        const wrapper = mount(Profile, {
            props: {
                sessionStore: {
                    sessionId: '1'
                },
                analytics: {
                    logEvent: logEventSpy
                }
            },
            global: {
                stubs: {
                    'font-awesome-icon': true,
                    sessionStorage
                },
            }
        });

        wrapper.get('#contact-linkedin').trigger('click');

        expect(logEventSpy).toBeCalledWith('contact', { type: 'linkedin', sessionId: '1' });

        expect(wrapper.html).toMatchSnapshot();
    });
});
