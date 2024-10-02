<script lang="ts">
    import Back from '$lib/Back.svelte';
    import {meta} from '$lib/content.js';

    export let data;
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
    <header>
        <a href="/" id="back"><Back /></a>
        <h1>Nos articles</h1>
    </header>
    {#each data.articles as article}
        <a class="article" href="/blog/{article.slug}">
            <img src={article.thumbnail} alt="" />
            <div class="right">
                <h2>{article.title}</h2>
                <div class="date">{article.formattedDate}</div>
            </div>
        </a>
    {/each}
</main>

<style>
    #back {
        margin: 2rem;
        display: block;
        color: var(--color-white);
    }
    main {
        display: grid;
        max-width: 50rem;
        margin: auto;
        padding-inline: 2rem;
        padding-bottom: 3rem;
        gap: 2rem;
    }

    main::before,
    main::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    main::before {
        z-index: -1;
        height: 20rem;
        background: var(--color-indigo);
    }

    main::after {
        z-index: -2;
        filter: blur(30px);
        -webkit-filter: blur(30px);
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0.3;
        background-image: var(--bg);
        height: 15rem;
    }

    header {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    header h1 {
        font-size: 2.8rem;
        margin: 0;
    }
</style>
