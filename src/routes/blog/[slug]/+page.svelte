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
    <article class="prose page">
        <header>
            <img src={data.thumbnail} alt="" />
            <h1 class="big">{data.title}</h1>
            <div class="date">{data.formattedDate}</div>
        </header>

        {@html data.content}
    </article>
</main>

<style>
    #back {
        margin: 2rem;
        display: block;
        color: var(--color-white);
    }
    .page {
        margin: auto;
        padding: 1em 2em 2em;
        max-width: 48rem;
    }
    header {
        margin: 2rem 0;
        & img {
            width: 80%;
            margin: 1.5rem auto;
        }
        & .date {
            font-family: var(--font-ui);
            font-size: clamp(1.2rem, 2vw, 1.6rem);
            text-align: center;
        }
    }
</style>
