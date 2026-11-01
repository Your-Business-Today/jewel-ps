import { env } from '$env/dynamic/public';

export const measurementId = env.PUBLIC_GA_MEASUREMENT_ID ?? '';

export const isAnalyticsConfigured = measurementId !== '';
