<script lang="ts">
    import Back from '$lib/Back.svelte';
    import {meta} from '$lib/content.js';

    export let data;

    const projectMeta = {
        ...meta,
        title: `${data.project.title} - Les 3 dev`,
        description: data.project.description.split('\n')[0],
        thumbnail: data.project.thumbnail,
    };
</script>

<svelte:head>
    <title>{projectMeta.title}</title>
    <meta name="description" content={projectMeta.description} />
    <meta property="og:title" content={projectMeta.title} />
    <meta property="og:site_name" content={projectMeta.title} />
    <meta property="og:image" content={projectMeta.thumbnail} />
    <meta property="og:url" content={projectMeta.siteUrl} />
    <meta property="og:description" content={projectMeta.description} />
    <meta property="twitter:title" content={projectMeta.title} />
    <meta property="twitter:description" content={projectMeta.description} />
    <meta property="twitter:image" content={projectMeta.thumbnail} />
</svelte:head>

<a id="back" href="/#projects" aria-label="Back">
    <Back />
</a>

<main style:--bg="url({data.project.thumbnail})">
    <header>
        <img src={data.project.thumbnail} style:view-transition-name="{data.project.slug}-thumbnail" alt="" />
        <div>
            <h1 style:view-transition-name="{data.project.slug}-title">{data.project.title}</h1>
            <p style:view-transition-name="{data.project.slug}-description">{data.project.description}</p>
            <a role="button" style:--fg="var(--color-black)" style:--bg="var(--color-white)" href={data.project.link} target="_blank">Ouvrir le projet</a>
        </div>
    </header>
    {#if data.project.video}
        <video autoplay controls muted>
            <source src={data.project.video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    {/if}
    {#if data.project.carousel}
        <div id="carousel">
            {#each data.project.carousel as img}
                <img src={img} alt="" />
            {/each}
        </div>
    {/if}
    <article>
        {@html data.project.content}
    </article>
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
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), var(--color-black));
    }

    main::after {
        z-index: -2;
        filter: blur(30px);
        background-size: 100%;
        background-repeat: no-repeat;
        opacity: 0.3;
        background-image: var(--bg);
        height: 15rem;
    }

    header {
        display: flex;
        gap: 2rem;
    }
    header > img {
        max-width: 40%;
        border-radius: 1rem;
    }
    header div {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }
    header h1 {
        font-size: 2.8rem;
        margin: 0;
    }
    header p {
        color: var(--color-white-1);
    }

    @media (max-width: 800px) {
        header {
            flex-direction: column;
        }
        header > img {
            max-width: 100%;
        }
    }

    #carousel {
        display: flex;
        gap: 1rem;
        overflow-x: auto;
        position: relative;
    }
    #carousel::after {
        z-index: 2;
        background: linear-gradient(to left, rgba(0, 0, 0, 0), var(--color-black));
        position: absolute;
        top: 0;
        width: 20%;
        height: 100%;
    }
    #carousel img {
        max-height: 400px;
    }

    video {
        max-width: 100%;
        border-radius: 1rem;
    }
    article {
        color: var(--color-white-1);
        font-size: 1.1rem;
        line-height: 1.7;
        white-space: pre-wrap;
    }
    article :global(strong) {
        color: var(--color-white);
    }
</style>
