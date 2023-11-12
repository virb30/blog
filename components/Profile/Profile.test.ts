import { mount } from "@vue/test-utils";
import { describe, expect, it, vi, vitest } from "vitest";
import Profile from './index.vue';
import { createTestingPinia } from '@pinia/testing'

describe('Profile Component', () => {
    it('should render childs', () => {
        const wrapper = mount(Profile, {
            global: {
                plugins: [
                    createTestingPinia({
                        stubActions: false,
                        initialState: {
                            sessionStore: {
                                sessionId: '1'
                            }
                        },
                        createSpy: vi.fn()
                    })
                ],
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
                mocks: {
                    'useAnalytics': {
                        logEvent: logEventSpy
                    }
                },
                plugins: [
                    createTestingPinia({
                        stubActions: false,
                        initialState: {
                            sessionStore: {
                                sessionId: '1'
                            }
                        },
                        createSpy: vi.fn()
                    })
                ],
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
