<script lang="ts">
    import Back from '$lib/Back.svelte';
    import InfiniteSlide from '$lib/InfiniteSlide.svelte';

    export let data;
</script>

<a id="back" href="/#projects" aria-label="Back">
    <Back />
</a>

<main style:--bg="url({data.project.thumbnail})">
    <header>
        <img src={data.project.thumbnail} alt="" />
        <div>
            <h1>{data.project.title}</h1>
            <p>{data.project.description}</p>
            <a role="button" style:--fg="var(--color-black)" style:--bg="var(--color-white)" href={data.project.link} target="_blank">Ouvrir le projet</a>
        </div>
    </header>
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
    article {
        color: var(--color-white-1);
        font-size: 1.1rem;
        line-height: 1.7;
        white-space: pre-wrap;
    }
</style>
