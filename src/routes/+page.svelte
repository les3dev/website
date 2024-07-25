<script lang="ts">
    import Eyevatar from '$lib/Eyevatar.svelte';
    import Menu from '$lib/Menu.svelte';
    import {onMount} from 'svelte';
    import {serializeSchema} from '$lib/schema';
    import InfiniteSlide from '$lib/InfiniteSlide.svelte';
    import Clouds from '$lib/Clouds.svelte';
    import {pushState} from '$app/navigation';
    import {faq, meta, partners, profiles, projects} from '$lib/content';

    type Section = 'intro' | 'process' | 'projects' | 'team' | 'faq' | 'contact';

    let introElement: HTMLElement | null = null;
    let processElement: HTMLElement | null = null;
    let projectsElement: HTMLElement | null = null;
    let teamElement: HTMLElement | null = null;
    let faqElement: HTMLElement | null = null;
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
        const projectsRect = projectsElement?.getBoundingClientRect();
        const teamRect = teamElement?.getBoundingClientRect();
        const faqRect = faqElement?.getBoundingClientRect();
        const contactRect = contactElement?.getBoundingClientRect();

        if (isInRect(introRect)) {
            section = 'intro';
        }
        if (isInRect(processRect)) {
            section = 'process';
        }
        if (isInRect(projectsRect)) {
            section = 'projects';
        }
        if (isInRect(teamRect)) {
            section = 'team';
        }
        if (isInRect(faqRect)) {
            section = 'faq';
        }
        if (isInRect(contactRect)) {
            section = 'contact';
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

    function scrollEffect(element: HTMLElement, factor = 1) {
        const onScroll = () => {
            const rect = element.getBoundingClientRect();
            const progress = clamp(((document.documentElement.clientHeight - rect.top) * factor) / rect.height, 0, 1);
            element.style.setProperty('--progress', progress.toString());
        };
        window.addEventListener('scroll', onScroll);
        return {
            destroy: () => {
                window.removeEventListener('scroll', onScroll);
            },
        };
    }

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
    <h2 class="appear" use:scrollEffect={0.5}>On vous explique notre process !</h2>
    <div class="steps">
        <div class="step">
            <div class="number" aria-hidden="true">1</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Conseil & Cadrage</h3>
            <div>
                On vous aide à convertir votre vision en un <strong>cahier des charges</strong> avec une liste de fonctionnalités concrètes.<br />
                On établit ensemble un <strong>devis gratuitement</strong> et on défini une <strong>roadmap</strong> pour le développement du projet.
            </div>
        </div>
        <div class="step">
            <div class="number" aria-hidden="true">2</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Conception & Design</h3>
            <div>
                On vous accompagne dans la réalisation de votre <strong>charte graphique</strong> et vos <strong>maquettes</strong>. <br />
                Après avoir étudié l'<strong>UX/UI</strong>, on valide ensemble les <strong>choix technique</strong> et l'architecture générale en fonction des besoins
                et contraintes du projet.
            </div>
        </div>
        <div class="step">
            <div class="number" aria-hidden="true">3</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Développement & Déploiement</h3>
            <div>
                Notre expertise dans de nombreux domaines (IA, temps réel, 3d, mobile, SaaS, etc.) nous permettent de développer rapidement vos projets.<br />
                Pour déployer, on s'adapte à vos contraintes : RGPD, serveur interne, cloud, publication sur les stores.
            </div>
        </div>
        <div class="step">
            <div class="number" aria-hidden="true">4</div>
            <div class="line" aria-hidden="true"></div>
            <h3>Formation & Support</h3>
            <div>
                Par soucis de transparence, nous vous donnons accès à l'intégralité du code et des outils.<br />
                Nous pouvons former votre <strong>CTO</strong> ou vos équipes et nous restons toujours à l'écoute pour s'assurer de la réussite du projet sur le
                long terme.
            </div>
        </div>
    </div>
</section>
<section id="projects" class="top" class:focus={section === 'projects'} class:active={movedAfterScroll} bind:this={projectsElement} aria-label="Nos projets">
    <h2 use:scrollEffect={0.5} class="appear">Aperçu de notre travail</h2>
    <div use:scrollEffect={0.5} class="subtitle appear">Quelques projets réalisés par notre équipe au cours de ces dernières années</div>
    <div class="grid">
        {#each projects as project}
            <article class="project appear" use:scrollEffect={3}>
                <a href="/projects/{project.slug}">
                    <img style:view-transition-name="{project.slug}-thumbnail" src={project.thumbnail} alt="" width="640" height="360" loading="lazy" />
                    <h3 style:view-transition-name="{project.slug}-title">{project.title}</h3>
                    <div class="tags" aria-label="Tags">
                        {#each project.tags as tag}
                            <span>{tag}</span>
                        {/each}
                    </div>
                    <p style:view-transition-name="{project.slug}-description">{project.description}</p>
                </a>
            </article>
        {/each}
    </div>
    <h3>Ils nous ont fait confiance</h3>
    <InfiniteSlide logos={partners} />
    <p style:text-align="center" style:max-width="50rem" style:margin="auto">
        * la majorité de nos projets clients ne figurent pas sur le site car ils ne sont pas publics mais nous serions ravis d'en discuter plus amplement avec
        vous si vous envisagez de travailler avec nous.
    </p>
</section>
<section id="team" class="center" class:focus={section === 'team'} bind:this={teamElement} aria-label="L'équipe">
    <h2 use:scrollEffect={0.5} class="appear">Qui sommes-nous ?</h2>
    <div use:scrollEffect={0.5} class="subtitle appear">
        3 amis développeurs avec plus de 10 ans d'expérience, pour vous créer des sites web et applications accessibles, innovantes et performantes !
    </div>
    <div class="wrap-center">
        {#each Object.entries(profiles) as [slug, profile]}
            <article class="profile appear" use:scrollEffect={1.4}>
                <a class="developer" href="/profiles/{slug}">
                    <Eyevatar src="/images/profiles/{slug}.webp" name={slug} left={profile.eyes.left} right={profile.eyes.right} bg={profile.color} />
                    <div class="name">{profile.name}</div>
                </a>
                <a href="/profiles/{slug}" role="button">Plus d'infos</a>
            </article>
        {/each}
    </div>
</section>
<section id="faq" class="top" class:focus={section === 'faq'} bind:this={faqElement} aria-label="FAQ">
    <h2 use:scrollEffect={0.5} class="appear">Foire aux questions</h2>
    {#each faq as question}
        <details use:scrollEffect={0.5} class="appear">
            <summary>{question.question}</summary>
            <div>
                {@html question.answer}
            </div>
        </details>
    {/each}
</section>
<section id="contact" class="center" class:focus={section === 'contact'} bind:this={contactElement}>
    <h2 class="big appear" use:scrollEffect={1}>Envie de travailler avec nous ?</h2>
    <div class="options appear" use:scrollEffect={1}>
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

    .grid {
        margin-inline: auto;
        gap: 1.5rem;
        max-width: var(--page-width);
        width: 100%;
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
    #projects {
        color: var(--color-white);
        background-color: var(--color-black);
    }
    #team {
        color: black;
        background-color: #cbfb45;
    }
    #faq {
        color: var(--color-black);
        background-color: var(--color-white);
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

    section > h3 {
        margin-top: 0;
        margin-bottom: 0.3em;
        font-size: clamp(1.5rem, 4vw, 2.5rem);
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
        padding-left: 5rem;
    }

    #process .step {
        display: flex;
        flex-direction: column;
        position: relative;
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

    /* Projects */
    #projects .grid {
        pointer-events: none;
    }
    article.project a {
        pointer-events: all;
        text-decoration: none;
        padding: 1rem;
        display: block;
        border-radius: 2rem;
        transition: 0.3s all;
        border: 3px solid transparent;
    }
    article.project a:focus {
        outline: 2px solid var(--color-white);
    }
    article.project h3 {
        padding-inline: 1rem;
        margin-bottom: 0.5rem;
        color: var(--color-white);
        font-size: 1.4rem;
    }
    article.project .tags {
        padding-inline: 1rem;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    article.project span {
        color: var(--color-white);
        padding: 0.25rem 0.5rem;
        font-weight: bold;
        font-size: 0.75rem;
        border-radius: 0.3rem;
        text-transform: uppercase;
        background-color: var(--color-black-1);
    }
    article p {
        padding-inline: 1rem;
        margin-top: 0.5rem;
        line-height: 1.5;
        color: var(--color-white-1);
    }

    article img {
        height: auto;
        max-width: 100%;
        border-radius: 1.5rem;
    }

    #projects .grid article.project {
        transition: 0.3s all;
    }

    @media (min-width: 720px) {
        #projects.active .grid:hover article.project a {
            opacity: 0.75;
            filter: blur(0.2rem) saturate(0.3);
            -webkit-filter: blur(0.2rem) saturate(0.3);
        }

        #projects .grid:hover article.project a:hover {
            opacity: 1;
            filter: blur(0);
            -webkit-filter: blur(0);
        }
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

    /* Faq */

    #faq details {
        font-size: 1.2rem;
        max-width: var(--page-width);
        color: var(--color-black-1);
        margin: auto;
        line-height: 1.6;
    }
    #faq details :global(a) {
        color: var(--color-indigo);
    }
    #faq details summary {
        color: var(--color-black);
        font-size: 1.6rem;
        font-weight: bold;
        cursor: pointer;
        margin: 1rem 0;
    }
    #faq details div {
        transition: 0.3s all; /* TODO: why anim not working :/ */
        max-height: 0;
        padding-inline: 2rem;
    }
    #faq details[open] div {
        max-height: fit-content;
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
