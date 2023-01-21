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
        fallback: 'dark'
    },

    runtimeConfig: {
        googleAnalyticsId: process.env.NUXT_GOOGLE_ANALYTICS_ID || '',
        ghostUrl: process.env.NUXT_GHOST_URL || 'http://localhost/ghost',
        ghostKey: process.env.NUXT_GHOST_KEY || 'ghost-key',
        public: {
            googleAnalyticsId: process.env.NUXT_GOOGLE_ANALYTICS_ID || '',
            firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY || '',
            firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN || '',
            firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID || '',
            firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET || '',
            firebaseMessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID || '',
            firebaseAppId: process.env.NUXT_FIREBASE_APP_ID || '',
            firebaseMeasurementId: process.env.NUXT_FIREBASE_MEASUREMENT_ID || '',
        },
    },

});
