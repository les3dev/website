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
    <article class="prose page">
        <header>
            <a href="/blog" class="back"><Back /></a>
            <img src={data.thumbnail} alt="" />
            <h1 class="big">{data.title}</h1>
            <div class="date">{data.formattedDate}</div>
        </header>

        {@html data.content}
    </article>
</main>

<style>
    main {
        margin-top: 3rem;
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
        & .back {
            display: flex;
            gap: 0.5rem;
            text-decoration: none;
            font-family: var(--font-ui);
            transition: all 0.3s;
            &:hover {
                translate: -0.3rem 0;
            }
            &:active {
                translate: 0 0;
            }
        }
    }
</style>
