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

<a href="/" id="back"><Back /></a>
<main>
    <header>
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
    header {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
    header h1 {
        font-size: 2.8rem;
        margin: 0;
    }

    .article {
        display: flex;
        align-items: center;
        padding: 2rem;
        border-radius: 0.5rem;
        transition: all 0.3s;
        text-decoration: none;
    }
    .article:hover {
        background: var(--color-black-1);
    }
    .article img {
        gap: 1.5rem;
        width: 50%;
    }
    .article .right {
        display: flex;
        color: var(--color-white-1);
        font-size: clamp(1.1rem, 1.8vw, 1.2rem);
        flex-direction: column;
        text-decoration: none;
    }
    .article .right h2 {
        color: var(--color-white);
        font-size: clamp(1.6rem, 4vw, 2.2rem);
    }
</style>
