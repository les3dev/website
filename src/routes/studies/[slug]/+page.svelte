<script lang="ts">
    import Back from '$lib/Back.svelte';
    import {meta} from '$lib/content';
    import {magicBack} from '$lib/magicBack';

    export let data;

    const studyMeta = {
        ...meta,
        title: `${data.study.title} - Les 3 dev`,
        description: data.study.description.split('\n')[0],
        thumbnail: data.study.image,
    };
</script>

<svelte:head>
    <title>{studyMeta.title}</title>
    <meta name="description" content={studyMeta.description} />
    <meta property="og:title" content={studyMeta.title} />
    <meta property="og:site_name" content={studyMeta.title} />
    <meta property="og:image" content={studyMeta.thumbnail} />
    <meta property="og:url" content={studyMeta.siteUrl} />
    <meta property="og:description" content={studyMeta.description} />
    <meta property="twitter:title" content={studyMeta.title} />
    <meta property="twitter:description" content={studyMeta.description} />
    <meta property="twitter:image" content={studyMeta.thumbnail} />
</svelte:head>

<a id="back" href="/#studies" aria-label="Back" use:magicBack>
    <Back />
</a>

<main style:--bg="url({data.study.image})">
    <h1 style:view-transition-name="{data.study.slug}-title">{data.study.title}</h1>
    <article class="content prose">
        {@html data.study.content}
    </article>
    <h2>Technologies</h2>
    <div class="tags" aria-label="Tags">
        {#each data.study.tags as tag}
            <span>{tag}</span>
        {/each}
    </div>
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
        height: 30rem;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-black));
    }

    main::after {
        z-index: -2;
        filter: blur(30px);
        -webkit-filter: blur(20px);
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0.3;
        background-image: var(--bg);
        background-position: center;
        height: 25rem;
    }

    h1 {
        font-size: 2.8rem;
        text-align: center;
        margin: 0;
    }

    article {
        color: var(--color-white-1);
        font-size: 1.1rem;
    }

    .tags {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .tags span {
        color: var(--color-black);
        font-weight: 700;
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        background-color: var(--color-white);
    }
</style>
