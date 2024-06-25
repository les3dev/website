<script>
    import Clouds from '$lib/Clouds.svelte';
    import {meta} from '$lib/content';
</script>

<svelte:head>
    <title>{meta.title}</title>
    <meta name="description" content={meta.description} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:site_name" content={meta.title} />
    <meta property="og:image" content={meta.thumbnail} />
    <meta property="og:url" content={meta.siteUrl} />
    <meta property="og:description" content={meta.description} />
    <meta property="twitter:title" content={meta.title} />
    <meta property="twitter:description" content={meta.description} />
    <meta property="twitter:image" content={meta.thumbnail} />
</svelte:head>

<main>
    <Clouds amount={15} verticalOffset="0" />
    <h1 class="big">404</h1>
    <div class="subtitle">Cette page n'existe pas, ou plus, en tout cas il n'y a rien à voir ici, désolé...</div>
    <a role="button" href="/" class="cta">Retour à l'acceuil</a>
</main>

<style>
    main {
        --page-width: 65rem;
        max-width: 100vw;
        overflow-x: hidden;
        min-height: 100svh;
        margin-inline: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--color-white);
        background-color: var(--color-indigo);
    }

    .big {
        margin: 0;
        z-index: 1;
        font-size: clamp(6rem, 20vw, 15rem);
    }
    .subtitle {
        font-size: 1.4rem;
        z-index: 1;
        margin-bottom: 2rem;
    }
    .cta {
        color: var(--color-black);
        z-index: 1;
        background-color: var(--color-yellow);
    }
</style>
