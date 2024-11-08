<script lang="ts">
    import {onMount} from 'svelte';
    import MenuIcon from './MenuIcon.svelte';
    import {mediaQueries} from './mediaqueries';
    import Logo from './Logo.svelte';
    import LinkedInIcon from './LinkedInIcon.svelte';
    import GithubIcon from './GithubIcon.svelte';

    const links = [
        {slug: 'process', label: 'Process'},
        {slug: 'studies', label: 'Études'},
        {slug: 'team', label: "L'équipe"},
        {slug: 'contact', label: 'Contact'},
    ];

    const isMobile = mediaQueries('(max-width: 720px)');

    let isOpen = false;
    let selected = '';

    onMount(() => {
        selected = window.location.hash;

        const pushstate = (event: Event) => {
            if ('detail' in event && typeof event.detail === 'string') {
                selected = event.detail;
            }
        };
        const hashchange = (event: HashChangeEvent) => {
            const newUrl = new URL(event.newURL);
            selected = newUrl.hash;
        };

        window.addEventListener('pushstate', pushstate);
        window.addEventListener('hashchange', hashchange);
        return () => {
            window.removeEventListener('hashchange', hashchange);
            window.removeEventListener('pushstate', pushstate);
        };
    });
</script>

<nav>
    {#if $isMobile}
        <div class="fullscreen" class:isOpen>
            <a href="#intro" id="logo" on:click={() => (isOpen = false)}><Logo /></a>
            {#each links as { slug, label }}
                <a href="#{slug}" on:click={() => (isOpen = false)}>{label}</a>
            {/each}
            <div class="social">
                <a href="https://www.linkedin.com/company/les3dev/" target="_blank">
                    <LinkedInIcon />
                </a>
                <a href="https://github.com/les3dev" target="_blank">
                    <GithubIcon />
                </a>
            </div>
        </div>
        <button class:isOpen on:click={() => (isOpen = true)} aria-label="Menu"><MenuIcon /></button>
    {:else}
        <div class="bar">
            <a href="#intro" id="logo" class:selected={selected === '' || selected === '#intro'}><Logo /></a>
            {#each links as { slug, label }}
                <a href="#{slug}" class:selected={selected === `#${slug}`}>{label}</a>
            {/each}
            <a class="round" href="https://www.linkedin.com/company/les3dev/" target="_blank">
                <LinkedInIcon />
            </a>
            <a class="round" href="https://github.com/les3dev" target="_blank">
                <GithubIcon />
            </a>
        </div>
    {/if}
</nav>

<style>
    #logo {
        --width: 6rem;
        --height: 2.5rem;
        padding-inline: 1rem;
    }
    button {
        width: 4.5rem;
        height: 4.5rem;
        transition: 0.3s all;
        pointer-events: all;
    }
    nav {
        position: fixed;
        bottom: 1rem;
        z-index: 2;
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
        gap: 0.5rem;
        transition: 0.3s transform;
        animation: ease-out 0.3s appear;
    }
    nav .social {
        display: flex;
        flex-grow: 1;
        gap: 0.5rem;
        justify-content: center;
    }
    nav a {
        display: flex;
        align-items: center;
        color: var(--color-white-1);
        font-weight: bold;
        text-decoration: none;
        padding-inline: 1.5rem;
        height: 100%;
        border-radius: 3rem;
        transition: all 0.3s;
    }

    nav a.round {
        border-radius: 50%;
        padding: 0.5rem 0.8rem;
    }
    nav a:hover,
    nav a:focus,
    nav a.selected {
        scale: 1;
        outline: none;
    }

    nav a:hover,
    nav a:focus,
    nav a.selected {
        color: var(--color-white);
        background-color: var(--color-black-1);
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
        display: flex;
        --width: 12rem;
        --height: 4rem;
        padding-block: 0.5rem;
        align-items: center;
        justify-content: center;
    }

    @keyframes appear {
        from {
            translate: 0 10rem;
        }
        to {
            translate: 0 0;
        }
    }
</style>
