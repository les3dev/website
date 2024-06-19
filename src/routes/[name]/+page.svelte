<script lang="ts">
    import Back from '$lib/Back.svelte';
    import GithubIcon from '$lib/GithubIcon.svelte';
    import LinkedInIcon from '$lib/LinkedInIcon.svelte';

    export let data;

    const meta = {
        title: `${data.developer.name} - Les 3 dev`,
        siteUrl: 'https://www.les3.dev',
        description: data.developer.biography.split('\n')[0],
        thumbnail: '/thumbnail.png',
    };
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
        <a href="/#team" aria-label="Back">
            <Back />
        </a>
        <div>
            <a href="https://www.linkedin.com/in/{data.developer.linkedin}" target="_blank" aria-label="Linked In"><LinkedInIcon /></a>
            <a href="https://github.com/{data.developer.github}" target="_blank" aria-label="Github"><GithubIcon /></a>
        </div>
    </header>
    <section>
        <img
            src="/images/profiles/{data.developer.name.toLocaleLowerCase()}.png"
            style:--color-bg={data.developer.color}
            style:--transition-name={data.developer.name.toLocaleLowerCase()}
            alt=""
        />

        <h1>Salut, moi c'est {data.developer.name} 👋</h1>
        <article>
            {data.developer.biography}
        </article>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        padding: 3rem 2rem;
        background: #fff;
        width: 100vw;
        height: 100vh;
        align-items: flex-start;
    }
    header {
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
    section {
        max-width: 38rem;
        margin: 0 auto;
        flex: 1;
        overflow: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }
    div {
        gap: 1rem;
        display: flex;
        align-items: center;
    }
    a {
        color: var(--color-black);
        transition: scale 0.2s;
    }
    a:hover {
        scale: 1.05;
    }
    img {
        margin-top: 3rem;
        background-color: var(--color-bg);
        max-width: 13rem;
        max-height: 13rem;
        border-radius: 50%;
        view-transition-name: var(--transition-name);
    }
    h1 {
        color: var(--color-black);
        font-size: 2.2rem;
        text-align: center;
    }

    article {
        white-space: pre-line;
        color: var(--color-black);
        font-size: 1.1rem;
        line-height: 1.5;
    }
</style>
