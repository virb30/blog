import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app'
import VueGtag from 'vue-gtag-next';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    nuxtApp.vueApp.use(VueGtag, {
        property: { id: config.public.googleAnalyticsId },
    });
});
