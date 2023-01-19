import { mount } from "@vue/test-utils";
import Layout from './default.vue';
import ConsentTerm from '../components/CookieConsent/index.vue';
import { createTestingPinia } from "@pinia/testing";
import { useConsentTermStore } from "~~/stores/consent-term";

describe('Default Layout', () => {
    const consentTermStore = useConsentTermStore();
    let config: any;

    beforeEach(() => {
        config = {
            global: {
                plugins: [createTestingPinia()]
            }
        }
    })

    it('should render childs', () => {
        const wrapper = mount(Layout, config);

        const div = wrapper.find('div');

        expect(wrapper.html()).toMatchSnapshot();
        expect(div.classes()).toContain('dark');
    });

    it('should render cookies consent term dialog', () => {
        const wrapper = mount(Layout, config);

        const cookieConsentTerm = wrapper.findComponent(ConsentTerm);

        expect(wrapper.html()).toMatchSnapshot();
        expect(cookieConsentTerm.exists()).toBe(true);
    });

    it('should not render cookies consent term dialog', () => {
        consentTermStore.acceptCookiesPolicy()

        const wrapper = mount(Layout, config);

        const cookieConsentTerm = wrapper.findComponent(ConsentTerm);

        expect(wrapper.html()).toMatchSnapshot();
        expect(cookieConsentTerm.exists()).toBe(false);
    });
});
