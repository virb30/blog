import { mount } from "@vue/test-utils";
import { afterEach, beforeEach, describe, expect, it, vi, vitest } from "vitest";
import Profile from './index.vue';
import { createTestingPinia } from '@pinia/testing'
import { defineStore } from "pinia";
import type { AnalyticsInterface } from "~/adapters/analytics/analytics.interface";


export const useSessionStore = defineStore('session', {
    state: () => ({
        sessionId: '1'
    }),
    getters: {
        exists: (state) => {
            return state.sessionId !== null
        }
    },
    actions: {
        generate() { },
        load() { }
    }
});

const logEventSpy = vitest.fn()
let firebaseAnalyticsAdapterMock = new class implements AnalyticsInterface {
    logEvent = logEventSpy
}

const pinia = createTestingPinia({
    stubActions: false,
    createSpy: vi.fn()
})

describe('Profile Component', () => {
    beforeEach(() => {
        vi.stubGlobal('useNuxtApp', () => ({ $analytics: firebaseAnalyticsAdapterMock }));
        vi.stubGlobal('useAnalytics', () => firebaseAnalyticsAdapterMock)
        const sessionStore = useSessionStore(pinia)
        sessionStore.$state.sessionId = '1'
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    })
    it('should render childs', () => {

        const wrapper = mount(Profile, {
            global: {
                plugins: [pinia],
                stubs: {
                    'font-awesome-icon': true
                },
            }
        });

        expect(wrapper.html).toMatchSnapshot();
    });

    it('should create component and log event childs', () => {
        const wrapper = mount(Profile, {
            global: {
                plugins: [pinia],
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
