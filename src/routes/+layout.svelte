<script lang="ts">
    import '../app.css';

    import posthog from 'posthog-js';
    import {onMount} from 'svelte';
    import {afterNavigate, beforeNavigate, onNavigate} from '$app/navigation';
    import {browser, dev} from '$app/environment';
    import {navigationStack} from '$lib/magicBack';

    onMount(() => {
        // window.history.scrollRestoration = 'auto';
    });

    onNavigate((navigation) => {
        if (navigation.type === 'popstate') {
            $navigationStack.pop();
        } else if (navigation.from) {
            $navigationStack.push(navigation.from.url.pathname);
        }
        // @ts-ignore missing in typescript because not standard
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            // @ts-ignore missing in typescript because not standard
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });

    if (browser && !dev) {
        beforeNavigate(() => posthog.capture('$pageleave'));
        afterNavigate(() => posthog.capture('$pageview'));
    }
</script>

<slot />
