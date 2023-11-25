import type { AnalyticsInterface } from "~/adapters/analytics/analytics.interface";

export const useAnalytics = (): AnalyticsInterface => {
    const { $analytics } = useNuxtApp();
    return $analytics
}