import {readable} from 'svelte/store';

import {browser} from '$app/environment';

export const mediaQueries = (query: string) =>
    readable<boolean | null>(browser ? window.matchMedia(query).matches : false, (set) => {
        if (!browser) {
            return set(null);
        }
        const mediaQueryList = window.matchMedia(query);
        const listener = (event: MediaQueryListEvent) => set(event.matches);
        mediaQueryList.addEventListener('change', listener);
        return () => mediaQueryList.removeEventListener('change', listener);
    });
