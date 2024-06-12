<script lang="ts">
    import {onMount} from 'svelte';
    import {onNavigate} from '$app/navigation';
    import '../app.css';

    onMount(() => {
        window.history.scrollRestoration = 'auto';
    });

    onNavigate((navigation) => {
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
</script>

<slot />
