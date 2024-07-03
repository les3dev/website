import posthog from 'posthog-js';
import {browser, dev} from '$app/environment';
import {PUBLIC_POSTHOG_API_KEY} from '$env/static/public';

export const load = async () => {
    if (browser && !dev) {
        posthog.init(PUBLIC_POSTHOG_API_KEY, {
            api_host: '/ingest',
            ui_host: 'https://eu.posthog.com',
            persistence: 'localStorage',
            capture_pageview: false,
            capture_pageleave: false,
        });
    }
    return {};
};
