export default defineNuxtConfig({
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        '@nuxtjs/tailwindcss',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/free-regular-svg-icons',
            '@fortawesome/free-solid-svg-icons',
        ]
    },

    ignore: ['**/*.test.*'],

    postcss: {
        plugins: {
            'tailwindcss/nesting': {},
            tailwindcss: {
                viewer: false,
            },
            autoprefixer: {},
        }
    },

    colorMode: {
        classSuffix: '',
    },

    runtimeConfig: {
        googleAnalyticsId: '',
        ghostUrl: '',
        ghostKey: '',
        public: {
            googleAnalytics: ''
        },
    },

});
