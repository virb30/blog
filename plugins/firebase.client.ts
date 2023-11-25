import type { FirebaseOptions } from "firebase/app";
import { defineNuxtPlugin, useRuntimeConfig } from "nuxt/app";
import { FirebaseAnalyticsAdapter } from "~/adapters/analytics/firebase.analytics.adapter";
import type { AnalyticsInterface } from "~/adapters/analytics/analytics.interface";

export default defineNuxtPlugin<{ analytics: AnalyticsInterface }>(() => {

    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: config.public.firebaseApiKey,
        authDomain: config.public.firebaseAuthDomain,
        projectId: config.public.firebaseProjectId,
        storageBucket: config.public.firebaseStorageBucket,
        messagingSenderId: config.public.firebaseMessagingSenderId,
        appId: config.public.firebaseAppId,
        measurementId: config.public.firebaseMeasurementId
    } as FirebaseOptions;

    // Initialize Firebase
    const analytics = new FirebaseAnalyticsAdapter(firebaseConfig);

    return {
        provide: {
            analytics
        }
    }
})




