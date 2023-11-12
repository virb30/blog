import type { Analytics } from "firebase/analytics";
import { useNuxtApp } from "nuxt/app"
import { FirebaseAnalyticsAdapter } from "~/adapters/analytics/firebase.analytics.adapter";

export const useAnalytics = () => {
    const { $firebase } = useNuxtApp();
    return new FirebaseAnalyticsAdapter($firebase.analytics as Analytics);
}