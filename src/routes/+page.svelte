<script lang="ts">
    import Eyevatar from '$lib/Eyevatar.svelte';
    import Menu from '$lib/Menu.svelte';
    import {onMount} from 'svelte';
    import {serializeSchema} from '$lib/schema';
    import Clouds from '$lib/Clouds.svelte';
    import {pushState} from '$app/navigation';
    import {faq, meta, partners, profiles, studies} from '$lib/content';

    type Section = 'intro' | 'process' | 'studies' | 'team' | 'faq' | 'contact';

    let introElement: HTMLElement | null = null;
    let processElement: HTMLElement | null = null;
    let studiesElement: HTMLElement | null = null;
    let teamElement: HTMLElement | null = null;
    let contactElement: HTMLElement | null = null;

    let section = 'intro' as Section;

    function isInRect(rect: DOMRect | undefined) {
        if (!rect) {
            return false;
        }
        return document.documentElement.clientHeight - rect.top >= document.documentElement.clientHeight / 2;
    }

    function clamp(value: number, min: number, max: number) {
        return Math.min(Math.max(value, min), max);
    }

    let movedAfterScroll = false;

    function handleScroll() {
        movedAfterScroll = false;
        const introRect = introElement?.getBoundingClientRect();
        const processRect = processElement?.getBoundingClientRect();
        const studiesRect = studiesElement?.getBoundingClientRect();
        const teamRect = teamElement?.getBoundingClientRect();
        const contactRect = contactElement?.getBoundingClientRect();

        const prevSection = section;
        if (isInRect(introRect)) {
            section = 'intro';
        }
        if (isInRect(processRect)) {
            section = 'process';
        }
        if (isInRect(studiesRect)) {
            section = 'studies';
        }
        if (isInRect(teamRect)) {
            section = 'team';
        }
        if (isInRect(contactRect)) {
            section = 'contact';
        }
        if (section !== prevSection) {
            const newURL = `${window.location.protocol}//${window.location.hostname}${window.location.pathname}#${section}`;
            window.dispatchEvent(new HashChangeEvent('hashchange', {newURL}));
        }
    }

    onMount(() => {
        handleScroll();
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', function (e) {
                const href = anchor.getAttribute('href');

                if (href) {
                    const event = new CustomEvent('pushstate', {detail: href});

                    e.preventDefault();
                    pushState(href, {});
                    window.dispatchEvent(event);
                    document.querySelector(href)?.scrollIntoView({
                        behavior: 'smooth',
                    });
                }
            });
        });
    });

    const faqGoogleSEO = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.slice(0, 4).map(
            ({question, answer}) =>
                ({
                    '@type': 'Question',
                    name: question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: answer,
                    },
                }) as const,
        ),
    } as const;
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
    {@html serializeSchema(faqGoogleSEO)}
</svelte:head>

<svelte:window on:scroll={handleScroll} on:mousemove={() => (movedAfterScroll = true)} />

<section id="intro" class="center" class:focus={section === 'intro'} bind:this={introElement} aria-label="Introduction">
    <Clouds />
    <h1 class="big" style:z-index="1">Vous avez la vision,<br />On la concrétise.</h1>
    <div class="subtitle" style:z-index="1">
        <strong class="logo">Les3dev</strong> est une agence de développement basée à Paris.<br />
        Nous sommes spécialisés dans la création d'applications web et mobiles, ambitieuses & sur-mesure.
    </div>
    <a role="button" href="#contact" class="cta" style:z-index="1">Nous contacter</a>
</section>
<section id="process" class="top" class:focus={section === 'process'} class:active={movedAfterScroll} bind:this={processElement} aria-label="Notre process">
    <h2 class="appear">On vous explique notre process !</h2>
    <div class="steps">
        <div class="step">
            <div class="number" aria-hidden="true">1</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Conseil & Cadrage</h3>
            <div>
                On vous aide à convertir votre vision en un <strong>cahier des charges</strong> avec une liste de fonctionnalités concrètes. On établit ensemble
                un <strong>devis gratuitement</strong> et on définit une <strong>roadmap</strong> pour le développement du projet.
            </div>
        </div>
        <div class="step">
            <div class="number" aria-hidden="true">2</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Conception & Design</h3>
            <div>
                On vous accompagne dans la réalisation de votre <strong>charte graphique</strong> et de vos <strong>maquettes</strong>. Après avoir étudié l'<strong
                    >UX/UI</strong
                >, on valide ensemble les <strong>choix techniques</strong> et l'architecture générale en fonction des besoins et contraintes du projet.
            </div>
        </div>
        <div class="step">
            <div class="number" aria-hidden="true">3</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Développement & Déploiement</h3>
            <div>
                Notre expertise dans de nombreux domaines (<strong>IA, temps réel, 3D, mobile, SaaS</strong>, etc.) nous permet de développer rapidement vos
                projets. Pour déployer, on s'adapte à vos contraintes : RGPD, serveur interne, cloud, publication sur les stores.
            </div>
        </div>
        <div class="step">
            <div class="number" aria-hidden="true">4</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Formation & Support</h3>
            <div>
                Par souci de <strong>transparence</strong>, nous vous donnons accès à l'intégralité du code et des outils. Nous pouvons former votre
                <strong>CTO</strong> ou vos équipes et nous restons toujours à l'écoute pour s'assurer de la réussite du projet sur le long terme.
            </div>
        </div>
    </div>
</section>
<section id="studies" class="top" class:focus={section === 'studies'} class:active={movedAfterScroll} bind:this={studiesElement} aria-label="Nos projets">
    <h2 class="appear">Études de cas</h2>
    <div class="studies-list">
        {#each studies as study, index}
            <article class={`study appear ${index % 2 === 1 ? 'right' : ''}`}>
                <img style:view-transition-name="{study.slug}-thumbnail" src={study.image} alt={study.alt} width="640" height="360" loading="lazy" />
                <div>
                    <h3 style:view-transition-name="{study.slug}-description">{study.description}</h3>
                    <a href="/studies/{study.slug}" style:color={study.color}>En savoir plus</a>
                </div>
            </article>
        {/each}
    </div>
</section>
<section id="brands" class="center" aria-label="">
    <h2>Ils nous ont fait confiance</h2>
    <div class="images">
        {#each partners as partner}
            <img src="/images/clients/{partner.slug}.svg" alt={partner.alt} width="200" height="60" loading="lazy" />
        {/each}
    </div>
    <p style:text-align="center" style:max-width="50rem" style:margin="auto">
        * certains projets clients ne figurent pas sur le site car ils ne sont pas publics mais nous serions ravis d'en discuter plus amplement avec vous si
        vous envisagez de travailler avec nous.
    </p>
</section>
<section id="team" class="center" class:focus={section === 'team'} bind:this={teamElement} aria-label="L'équipe">
    <h2 class="appear">Qui sommes-nous ?</h2>
    <div class="subtitle appear">
        3 amis développeurs avec plus de 10 ans d'expérience, pour vous créer des sites web et applications accessibles, innovantes et performantes !
    </div>
    <div class="wrap-center">
        {#each Object.entries(profiles) as [slug, profile]}
            <article class="profile appear">
                <a class="developer" href="/profiles/{slug}">
                    <Eyevatar src="/images/profiles/{slug}.webp" name={slug} left={profile.eyes.left} right={profile.eyes.right} bg={profile.color} />
                    <div class="name">{profile.name}</div>
                </a>
                <a href="/profiles/{slug}" role="button">Plus d'infos</a>
            </article>
        {/each}
    </div>
</section>
<section id="contact" class="center" class:focus={section === 'contact'} bind:this={contactElement}>
    <h2 class="big appear">Envie de travailler avec nous ?</h2>
    <div class="options appear">
        <a role="button" href="https://calendly.com/les3dev/30min">Prendre un RDV</a>
        <a role="button" href="mailto:contact@les3.dev">Envoyer un mail</a>
    </div>
    <div class="subtitle" style:margin-top="2em">On vous aide <strong>gratuitement</strong> à définir clairement votre besoin et établir un devis !</div>
</section>

<Menu />

<style>
    /* Section layouts */

    section {
        --page-width: 65rem;
        max-width: 100vw;
        overflow-x: hidden;
        min-height: 100svh;
        margin-inline: auto;
        padding-inline: 2rem;
    }

    section.center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-block: 2rem;
    }
    section.top {
        padding-top: 5rem;
        padding-bottom: 3rem;
    }

    /* Section colors */

    #intro {
        color: var(--color-white);
        background-color: var(--color-indigo);
    }
    #process {
        color: var(--color-black);
        background-color: var(--color-yellow);
        --number-offset: 1.75rem;
    }
    #studies {
        color: var(--color-white);
        max-width: 65rem;
        background-color: var(--color-black);
    }
    #brands {
        color: var(--color-black);
        min-height: auto;
        background-color: var(--color-white);
        padding-block: 8rem !important;
    }
    #team {
        color: black;
        background-color: #cbfb45;
    }
    #contact {
        color: var(--color-white);
        background-color: var(--color-purple);
    }

    /* Titles */

    h1.big,
    h2.big {
        margin-top: 0;
        margin-bottom: 0.3em;
        font-size: clamp(3rem, 9vw, 7.5rem);
        text-align: center;
        letter-spacing: -1px;
        text-wrap: balance;
        line-height: 1;
        text-shadow: 0 0 3rem hsla(0, 0%, 0%, 0.3);
    }

    h2.big {
        max-width: 65rem;
    }

    section > h2:not(.big) {
        margin-top: 0;
        margin-bottom: 0.3em;
        font-size: clamp(2.5rem, 6vw, 4rem);
        text-align: center;
        letter-spacing: -1px;
        text-wrap: balance;
    }

    .subtitle {
        font-size: 1.4rem;
        text-wrap: balance;
        line-height: 1.6;
        text-align: center;
        margin-bottom: 2em;
        margin-inline: auto;
        max-width: 50rem;
        text-shadow: 0 0 1.5rem hsla(0, 0%, 0%, 0.3);
    }
    @media (max-width: 50rem) {
        .subtitle {
            font-size: 1.2rem;
        }
    }

    /* CTAs */

    .cta {
        color: var(--color-black);
        font-size: 1.4rem;
    }

    /* Intro */

    #intro .cta {
        background-color: var(--color-yellow);
        margin-bottom: 2rem;
    }
    #intro .cta:hover,
    #intro .cta:focus {
        outline: none;
        padding-inline: 1.2em;
        background-color: var(--color-white);
    }
    #contact .options {
        gap: 1rem;
        display: flex;
        flex-wrap: wrap;
        font-size: 1.4rem;
        justify-content: center;
    }
    #contact .options a {
        color: var(--color-black);
        background-color: var(--color-lime);
    }
    #contact .options a:hover,
    #contact .options a:focus {
        outline: none;
        padding-inline: 1.2em;
        background-color: var(--color-white);
    }

    /* Process */

    #process .steps {
        display: flex;
        margin: auto;
        flex-direction: column;
        width: 100%;
        max-width: var(--page-width);
        padding-left: 6rem;
        padding-right: 2rem;
    }

    @media (max-width: 50rem) {
        #process .steps {
            padding-left: 5rem;
            padding-right: 1rem;
        }
    }

    #process .step {
        display: flex;
        flex-direction: column;
        position: relative;
        font-size: 1.2rem;
        line-height: 1.5;
    }

    #process .step h3 {
        margin-bottom: 1rem;
    }
    #process .step .number {
        position: absolute;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        top: var(--number-offset);
        margin-left: -4rem;
        width: 3rem;
        height: 3rem;
        color: var(--color-white);
        border-radius: 50%;
        background-color: var(--color-black);
    }

    #process .step .line {
        position: absolute;
        z-index: 1;
        top: 0;
        background-color: var(--color-black);
        margin-left: -2.5rem;
        width: 0.25rem;
        bottom: 0rem;
    }

    #process .step:first-of-type .line {
        top: var(--number-offset);
    }

    #process .step:last-of-type .line {
        top: 0;
        height: var(--number-offset);
        bottom: unset;
    }

    #process .step > h3 {
        font-size: 2rem;
    }

    /* Studies */

    .studies-list {
        gap: 4rem;
        display: flex;
        flex-direction: column;
    }

    .study {
        pointer-events: all;
        text-decoration: none;
        padding: 1rem;
        display: flex;
        border-radius: 2rem;
        transition: 0.3s all;
        align-items: center;
        border: 3px solid transparent;
        gap: 3rem;
    }
    .study.right {
        flex-direction: row-reverse;
    }
    .study div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .study a {
        font-size: 1.25rem;
        font-weight: 700;
        text-decoration: none;
    }
    .study h3 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 700;
        color: var(--color-white);
    }
    .study img {
        max-width: 22rem;
        height: auto;
        border-radius: 1.5rem;
    }

    @media (max-width: 720px) {
        .study,
        .study.right {
            flex-direction: column;
        }
        .study div {
            align-items: center;
        }
        .study h3 {
            text-align: center;
        }
    }

    /* Brands */
    #brands .images {
        display: flex;
        max-width: 65rem;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
        margin-block: 3rem;
    }
    #brands h2 {
        margin-bottom: 0;
    }
    /* Profiles */

    .profile .name {
        font-weight: bold;
        font-size: 1.5rem;
        margin-top: 1rem;
    }
    .profile a {
        color: var(--color-black);
        transition: all 0.2s;
        text-decoration: none;
    }
    .profile a:not(.developer) {
        font-size: 1.2rem;
        margin-top: 1rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 2.75rem;
        color: var(--color-black);
        background-color: var(--color-white);
        transition: 0.3s all;
    }
    .profile a:not(.developer):hover {
        color: var(--color-white);
        translate: 0;
        background-color: var(--color-black);
    }
    .profile a:not(.developer):active {
        translate: 0;
    }
    #team article {
        text-align: center;
    }

    /* Animations */

    @keyframes breath {
        0% {
            translate: 0 0;
        }
        50% {
            translate: 0 1rem;
        }
        100% {
            translate: 0 0;
        }
    }

    @keyframes appear {
        from {
            opacity: 0;
            translate: 0 3rem;
        }
        to {
            opacity: 1;
            translate: 0 0;
        }
    }

    #intro .cta {
        animation: breath 3s infinite;
    }
    .appear {
        translate: 0 calc((1 - var(--progress)) * 2rem);
    }
</style>
