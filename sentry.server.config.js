// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs';
import config from './package.json';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

Sentry.init({
    dsn: SENTRY_DSN,
    tracesSampleRate: 1.0,
    release: config.version,
    environment: process.env.NODE_ENV,
    autoSessionTracking: true,
    enabled: process.env.NODE_ENV === 'production'
});
