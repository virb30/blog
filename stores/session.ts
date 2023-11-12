import { defineStore } from 'pinia';

export type State = {
    sessionId: string | null;
}

export const useSessionStore = defineStore('session', {
    state: (): State => ({
        sessionId: null
    }),
    getters: {
        exists: (state) => {
            return state.sessionId !== null
        }
    },
    actions: {
        generate() {
            this.load()
            if (!this.sessionId) {
                const n = Math.floor(Math.random() * 1000)
                const sessionId = `SB-${new Date().getTime()}-${n}`
                sessionStorage.setItem('session-id', sessionId)
                this.sessionId = sessionId
            }
        },
        load() {
            const storedSessionId = sessionStorage.getItem('session-id')
            this.sessionId = storedSessionId
        }
    }
});
