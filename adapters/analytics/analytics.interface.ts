export interface AnalyticsInterface {
    logEvent(type: string, content: any): void;
}