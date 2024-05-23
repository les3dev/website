<script lang="ts">
    import MenuIcon from './MenuIcon.svelte';
    import {mediaQueries} from './mediaqueries';

    const links = [
        {slug: 'intro', label: 'Intro'},
        {slug: 'projects', label: 'Projets'},
        {slug: 'team', label: "L'équipe"},
        {slug: 'faq', label: 'FAQ'},
        {slug: 'contact', label: 'Contact'},
    ];

    const isMobile = mediaQueries('(max-width: 720px)');

    let isOpen = false;
    let isHidden = false;
    
    let timeout: number | undefined;

    window.addEventListener('scroll', s => {
        isHidden = true;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            isHidden = false;
        }, 350);
    });
</script>

<nav>
    {#if $isMobile}
        <div class="fullscreen" class:isOpen>
            {#each links as { slug, label }}
                <a href="#{slug}" on:click={() => (isOpen = false)}>{label}</a>
            {/each}
        </div>
        <button class:isOpen class:isHidden on:click={() => (isOpen = true)}><MenuIcon /></button>
    {:else if $isMobile !== null}
        <div class="bar" class:isHidden>
            {#each links as { slug, label }}
                <a href="#{slug}">{label}</a>
            {/each}
        </div>
    {/if}
</nav>

<style>
    button {
        width: 4.5rem;
        height: 4.5rem;
        transition: 0.3s scale;
    }
    button.isOpen, button.isHidden {
        scale: 0;
    }
    nav {
        position: fixed;
        bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
    }
    nav .bar {
        background-color: var(--color-black);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        border-radius: 3rem;
        z-index: 2;
        transition: 0.3s transform;
    }
    nav .bar.isHidden {
        transform: translateY(10rem);
    }
    nav a {
        color: var(--color-white);
        font-weight: bold;
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 2rem;
        transition: background-color 0.3s;
    }
    nav a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    /* mobile */
    .fullscreen {
        display: grid;
        position: fixed;
        gap: 1rem;
        background-color: var(--color-black);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 1rem 3rem;
        align-content: center;
        transition: 0.3s translate;
        translate: 0 100%;
    }
    .fullscreen.isOpen {
        translate: 0 0;
    }
    .fullscreen a {
        align-self: center;
        text-align: center;
        font-size: 2.5rem;
    }
</style>
