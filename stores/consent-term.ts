import { defineStore } from 'pinia';

interface State {
    cookiesPolicyAccepted: boolean
}

export const useConsentTermStore = defineStore('consentTerm', {
    state: (): State => ({
        cookiesPolicyAccepted: false
    }),
    getters: {
        getPolicyAccepted: (state: State) => {
            return state.cookiesPolicyAccepted
        },
    },
    actions: {
        acceptCookiesPolicy() {
            sessionStorage.setItem('cookie-policy-accepted', JSON.stringify(true));
            this.setCookiesPolicyAccepted(true);
        },
        fetchFromStorage() {
            const accepted = !!sessionStorage.getItem('cookie-policy-accepted');
            this.setCookiesPolicyAccepted(accepted);
        },
        setCookiesPolicyAccepted(accepted: boolean) {
            this.cookiesPolicyAccepted = accepted;
        },
    }

});
