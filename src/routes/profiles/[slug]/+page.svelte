<script lang="ts">
    import Back from '$lib/Back.svelte';
    import GithubIcon from '$lib/GithubIcon.svelte';
    import LinkedInIcon from '$lib/LinkedInIcon.svelte';
    import {meta} from '$lib/content.js';

    export let data;

    const profileMeta = {
        ...meta,
        title: `${data.profile.name} - Les 3 dev`,
        description: data.profile.biography.split('\n')[0],
    };
</script>

<svelte:head>
    <title>{profileMeta.title}</title>
    <meta name="description" content={profileMeta.description} />
    <meta property="og:title" content={profileMeta.title} />
    <meta property="og:site_name" content={profileMeta.title} />
    <meta property="og:image" content={profileMeta.thumbnail} />
    <meta property="og:url" content={profileMeta.siteUrl} />
    <meta property="og:description" content={profileMeta.description} />
    <meta property="twitter:title" content={profileMeta.title} />
    <meta property="twitter:description" content={profileMeta.description} />
    <meta property="twitter:image" content={profileMeta.thumbnail} />
</svelte:head>

<main>
    <header>
        <a href="/#team" aria-label="Back">
            <Back />
        </a>
        <div>
            <a href="https://www.linkedin.com/in/{data.profile.linkedin}" target="_blank" aria-label="Linked In"><LinkedInIcon /></a>
            <a href="https://github.com/{data.profile.github}" target="_blank" aria-label="Github"><GithubIcon /></a>
        </div>
    </header>
    <section>
        <img
            src="/images/profiles/{data.profile.name.toLocaleLowerCase()}.png"
            style:--color-bg={data.profile.color}
            style:view-transition-name={data.profile.name.toLocaleLowerCase()}
            alt=""
        />
        <h1>Salut, moi c'est {data.profile.name} 👋</h1>
        <article>
            {data.profile.biography}
        </article>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        background: #fff;
        width: 100vw;
        height: 100vh;
        align-items: flex-start;
    }
    header {
        display: flex;
        padding: 2rem;
        width: 100%;
        justify-content: space-between;
    }
    section {
        flex: 1;
        overflow: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }
    div {
        gap: 2rem;
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
        background-color: var(--color-bg);
        max-width: 13rem;
        max-height: 13rem;
        border-radius: 50%;
    }
    h1 {
        color: var(--color-black);
        font-size: 2.2rem;
        text-align: center;
        padding: 2rem 2rem 0 2rem;
    }

    article {
        white-space: pre-line;
        color: var(--color-black);
        font-size: 1.1rem;
        line-height: 1.5;
        gap: 2rem;
        padding: 0 1.5rem 1.5rem 1.5rem;
        max-width: 40rem;
    }
</style>
