import type { Analytics } from "firebase/analytics";
import type { AnalyticsInterface } from "./analytics.interface";
import { logEvent } from '@firebase/analytics';

export class FirebaseAnalyticsAdapter implements AnalyticsInterface {

    constructor(private analytics: Analytics) { }

    logEvent(type: string, content: any): void {
        logEvent(this.analytics, type, content);
    }

}