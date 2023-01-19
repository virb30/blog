import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    assetsInclude: 'assets',
    resolve: {
        alias: {
            "~~": [
                "."
            ],
            "~~/*": [
                "./*"
            ],
            "@@": [
                "."
            ],
            "@@/*": [
                "./*"
            ],
            "~": [
                "."
            ],
            "~/*": [
                "./*"
            ],
            "@": [
                "."
            ],
            "@/*": [
                "./*"
            ],
            "assets": [
                "assets"
            ],
            "assets/*": [
                "assets/*"
            ],
            "public": [
                "public"
            ],
            "public/*": [
                "public/*"
            ],
            "#app": [
                "node_modules/nuxt/dist/app"
            ],
            "#app/*": [
                "node_modules/nuxt/dist/app/*"
            ],
            "vue-demi": [
                "node_modules/nuxt/dist/app/compat/vue-demi"
            ],
            "pinia": [
                "node_modules/pinia/dist/pinia"
            ],
            "#color-mode-options": [
                ".nuxt/color-mode-options"
            ],
            "#head": [
                "node_modules/nuxt/dist/head/runtime"
            ],
            "#head/*": [
                "node_modules/nuxt/dist/head/runtime/*"
            ],
            "#imports": [
                ".nuxt/imports"
            ],
            "#build": [
                ".nuxt"
            ],
            "#build/*": [
                ".nuxt/*"
            ],
            "#components": [
                ".nuxt/components"
            ]
        }
    },
    test: {
        environment: 'happy-dom'
    }
})