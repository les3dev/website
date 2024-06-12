<script lang="ts">
    import Back from '$lib/Back.svelte';
    import GithubIcon from '$lib/GithubIcon.svelte';
    import LinkedInIcon from '$lib/LinkedInIcon.svelte';

    export let data;
</script>

<main>
    <a href="/#team">
        <Back />
    </a>
    <section>
        <img
            src="/images/{data.developer.name.toLocaleLowerCase()}.png"
            style:--color-bg={data.developer.color}
            style:--transition-name={data.developer.name.toLocaleLowerCase()}
            alt=""
        />

        <h1>Salut, moi c'est {data.developer.name} 👋</h1>
        <article>
            {data.developer.biography}
        </article>
    </section>
    <div>
        <a href="https://www.linkedin.com/in/{data.developer.linkedin}" target="_blank"><LinkedInIcon /></a>
        <a href="https://github.com/{data.developer.github}" target="_blank"><GithubIcon /></a>
    </div>
</main>

<style>
    main {
        display: flex;
        padding: 3rem 2rem;
        background: #fff;
        width: 100vw;
        height: 100vh;
        align-items: flex-start;
    }
    section {
        max-width: 30rem;
        margin: 0 auto;
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
        opacity: 0;
        animation: appear 1s forwards;
        color: var(--color-black);
        transition: scale 0.2s;
    }
    a:hover {
        scale: 1.05;
    }
    img {
        opacity: 0;
        background-color: var(--color-bg);
        animation: appear 1s 0.2s forwards;
        max-width: 13rem;
        max-height: 13rem;
        border-radius: 50%;
        view-transition-name: var(--transition-name);
    }
    h1 {
        opacity: 0;
        animation: appear 1s 0.3s forwards;
        color: var(--color-black);
    }

    article {
        opacity: 0;
        animation: appear 1s 0.5s forwards;
        white-space: pre-line;
        color: var(--color-black);
    }

    @keyframes appear {
        from {
            opacity: 0;
            transform: translateY(3rem);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>
