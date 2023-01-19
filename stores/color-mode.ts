import { defineStore } from 'pinia'

interface State {
    darkMode: boolean
}

export const useColorModeStore = defineStore('colorMode', {
    state: (): State => ({
        darkMode: true
    }),
    actions: {
        changeColorMode() {
            this.darkMode = !this.darkMode
        }
    },
    getters: {
        getColorModeName(state: State) {
            return state.darkMode ? 'dark' : 'light'
        }
    }
})