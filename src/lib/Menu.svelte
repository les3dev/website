<script lang="ts">
    import MenuIcon from './MenuIcon.svelte';
    import {mediaQueries} from './mediaqueries';

    const links = [
        {slug: 'projects', label: 'Projets'},
        {slug: 'team', label: "L'équipe"},
        {slug: 'faq', label: 'FAQ'},
        {slug: 'contact', label: 'Contact'},
    ];

    const isMobile = mediaQueries('(max-width: 720px)');

    let isOpen = false;
    let isHidden = false;
</script>

<svelte:window
    on:wheel={(e) => {
        if (e.deltaY > 0) {
            isHidden = true;
        } else if (e.deltaY < 0) {
            isHidden = false;
        }
    }}
/>

<nav>
    {#if $isMobile}
        <div class="fullscreen" class:isOpen>
            <a href="#intro" id="logo" on:click={() => (isOpen = false)}>les3dev</a>
            {#each links as { slug, label }}
                <a href="#{slug}" on:click={() => (isOpen = false)}>{label}</a>
            {/each}
        </div>
        <button class:isOpen class:isHidden on:click={() => (isOpen = true)}><MenuIcon /></button>
    {:else if $isMobile !== null}
        <div class="bar" class:isHidden>
            <a href="#intro" id="logo">les3dev</a>
            {#each links as { slug, label }}
                <a href="#{slug}">{label}</a>
            {/each}
        </div>
    {/if}
</nav>

<style>
    #logo {
        font-family: var(--font-logo);
        font-size: 1.5rem;
        padding-inline: 1rem;
    }
    button {
        width: 4.5rem;
        height: 4.5rem;
        transition: 0.3s all;
        pointer-events: all;
    }
    button.isOpen,
    button.isHidden {
        scale: 0;
    }
    nav {
        position: fixed;
        bottom: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        pointer-events: none;
    }
    nav .bar {
        pointer-events: all;
        background-color: var(--color-black);
        display: flex;
        align-items: center;
        padding: 0.5rem;
        border-radius: 3rem;
        z-index: 2;
        height: 4rem;
        transition: 0.3s transform;
    }
    nav .bar.isHidden {
        transform: translateY(10rem);
    }
    nav a {
        display: flex;
        align-items: center;
        color: var(--color-white);
        font-weight: bold;
        text-decoration: none;
        padding-inline: 1.5rem;
        height: 100%;
        border-radius: 3rem;
        transition: all 0.3s;
    }
    nav a:hover,
    nav a:focus {
        scale: 1;
        color: var(--color-black);
        outline: none;
        background-color: var(--color-white);
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
        pointer-events: all;
    }
    .fullscreen.isOpen {
        translate: 0 0;
    }
    .fullscreen a {
        align-self: center;
        text-align: center;
        font-size: 2.5rem;
        display: block;
        padding-block: 1rem;
    }
    .fullscreen #logo {
        font-size: 3.2rem;
        padding-block: 0.2rem;
    }
</style>
