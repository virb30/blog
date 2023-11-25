import type { AnalyticsInterface } from "./analytics.interface";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { logEvent } from '@firebase/analytics';
import { initializeApp, type FirebaseOptions } from "firebase/app";

export class FirebaseAnalyticsAdapter implements AnalyticsInterface {

    private analytics: Analytics;

    constructor(config: FirebaseOptions) {
        const app = initializeApp(config);
        this.analytics = getAnalytics(app);
    }

    logEvent(type: string, content: any): void {
        logEvent(this.analytics, type, content);
    }

}