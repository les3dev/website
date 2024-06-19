<script lang="ts">
    import Eyevatar from '$lib/Eyevatar.svelte';
    import Menu from '$lib/Menu.svelte';
    import {onMount} from 'svelte';
    import Cloud from '$lib/Cloud.svelte';
    import LinkedInIcon from '$lib/LinkedInIcon.svelte';
    import GithubIcon from '$lib/GithubIcon.svelte';
    import {serializeSchema} from '$lib/schema';

    type Section = 'intro' | 'projects' | 'team' | 'faq' | 'contact';

    let introElement: HTMLElement | null = null;
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
        const projectsRect = projectsElement?.getBoundingClientRect();
        const teamRect = teamElement?.getBoundingClientRect();
        const faqRect = faqElement?.getBoundingClientRect();
        const contactRect = contactElement?.getBoundingClientRect();

        if (isInRect(introRect)) {
            section = 'intro';
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

    const questions = [
        {
            question: `Pourquoi 3 développeurs ?`,
            answer: `Nous avons l’habitude de travailler ensemble depuis plusieurs années. Grâce à nos différentes affinités et domaines d’expertise nous pouvons nous
            répartir efficacement pour répondre au mieux à toutes vos demandes aussi variées soient-elles.`,
        },
        {
            question: `Quel type de projet & fonctionnalités peuvent être réalisées ?`,
            answer: `Probablement tout ce que vous pourriez imaginer. Avec nos 10 ans d'expériences, on a rencontrés beaucoup de problèmes et tout autant de solution.
            Nous avons réalisés un grand nombre d'applications ou de sites avec des fonctionnalités très différentes (realtime, collaboration, 3D). Mais aussi
            des produits sur le long terme, des MVPs pour des startups mais également pour de plus grands organismes comme Decathlon, BNP Paribas ou la base
            spatiale.`,
        },
        {
            question: `Combien de temps prendrait la réalisation de mon projet ?`,
            answer: `Cela déprendra de l'urgence de votre côté mais également de nos disponibilités. Nous avons l'habitude de travailler plutôt rapidement et vous
            fournir des résultats de l'avancement au fur et à mesure. <a href="mailto:contact@les3.dev">Contactez-nous</a> dès maintenant pour avoir une estimation !`,
        },
        {
            question: `Est-ce que je dois m'occuper du design ?`,
            answer: `La plupart des projets ne nécessitent pas uniquement du code, mais également du design. Nous nous occupons de cette partie également la plupart du
            temps. Cependant, nous pouvons nous adapter en fonction de votre existant (identité visuelle, logo, etc.) et vos besoins personnels.`,
        },
        {
            question: `Pourquoi pas du No-code ?`,
            answer: `Nous avons pu utiliser et même créer des outils No-code depuis plusieurs années. Nous sommes donc bien placés pour en comprendre les avantages mais
            aussi les limitations. Le No-code est très bien pour créer rapidement une version basique et "jetable" de votre idée. En revanche, si vous voulez un
            projet qualitatif, performant et maintenable sur du long terme, nous vous conseillons de plutôt vous tourner vers du code "classique".`,
        },
        {
            question: `Pourquoi (ne pas) recruter un CTO ?`,
            answer: ` Avoir un CTO est la solution idéale sur le moyen/long terme pour une startup. Cependant, cela peut-être compliqué et très cher de choisir cette
            solution au début. C'est pour cela qu'une équipe de développeur.ses experimentée peut vous permettre de faire une première version de qualité de
            votre produit. Aussi, un CTO a souvent son mot à dire sur la vision de votre société et de votre produit. En travaillant avec des développeur.ses
            indépendant (comme nous), vous vous assurez que votre vision soit respectée.`,
        },
        {
            question: `Quels outils & technologies utilise-t-on ?`,
            answer: `Nous privilégions autant que possible les technologies matures et si possible open-source pour créer des projets durables et performants. Nous avons
            quelques préférences mais nous nous adaptons en fonction des besoins du projet.`,
        },
        {
            question: `Comment puis-je modifier mon projet ?`,
            answer: `Dans un soucis de transparence, nous vous fournirons toujours le code source du projet, vous seul.e en serez propriétaire. Si vous voulez modifier
            votre projet, vous pouvez refaire appel à nous quand vous voulez ou même à d'autres développeur.ses. Nous pouvons également développer des solutions
            afin que vous puissiez facilement faire évoluer votre produit comme une interface d'admin adaptée à vos besoins.`,
        },
        {
            question: `Où sont stockées les données ?`,
            answer: `À vous de voir. Ça peut être sur vos serveurs ou ceux d'autres services en ligne, mais pas chez nous. Nous ne voulons pas prendre la responsabilité
            du stockage de vos données.`,
        },
        {
            question: `Ai-je accès au code du projet ?`,
            answer: `Oui, le code que nous écrivons n'a qu'un seul destinataire : vous. Lorsque nous aurons fini le projet, nous vous donnerons toutes les clés pour que
            vous soyez propriétaire du projet et que vous puissiez le faire évoluer comme bon vous semble.`,
        },
    ];

    const meta = {
        title: 'Les 3 dev - Agence de développement web & mobile',
        siteUrl: 'https://www.les3.dev',
        description: 'Nous vous aidons à réaliser des projets ambitieux et sur-mesure.',
        thumbnail: '/thumbnail.png',
    };
    const faqGoogleSEO = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.slice(0, 4).map(
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

<section id="intro" class="center" class:focus={section === 'intro'} bind:this={introElement}>
    <div id="sky">
        {#each [[10, 1], [30, 0.7], [50, 0.5], [65, 1], [80, 1.2]] as [y, size], i}
            <Cloud {y} {size} direction={i % 2 ? -1 : 1} />
        {/each}
    </div>
    <h1 class="big">Vous avez les idées,<br />On les réalise.</h1>
    <div class="subtitle">
        <strong class="logo">Les3dev</strong> est une agence de développement basée à Paris de création d'applications web et mobiles ambicieuses & sur-mesure.
    </div>
    <a role="button" href="#contact" class="cta">Nous contacter</a>
</section>
<section id="projects" class="top" class:focus={section === 'projects'} class:active={movedAfterScroll} bind:this={projectsElement}>
    <h2 use:scrollEffect={0.5} class="appear">Aperçu de notre travail</h2>
    <div use:scrollEffect={0.5} class="subtitle appear">Quelques projets réalisés par notre équipe au cours de ces dernières années</div>
    <div class="grid">
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://demo.voltask.tech" target="_blank">
                <img src="/images/projects/voltask.png" alt="" />
                <h3>Voltask</h3>
                <p>Outil No-code collaboratif dans le navigateur pour créer des automatisations avec des scénarios visuels.</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://codepassport.dev" target="_blank">
                <img src="/images/projects/codepassport.png" alt="" />
                <h3>Code Passport</h3>
                <p>Site web interactif destiné à l'apprentissage du code (JS, HTML & CSS).</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://chat.voltask.tech" target="_blank">
                <img src="/images/projects/voltask-ai.png" alt="" />
                <h3>Voltask AI</h3>
                <p>Chatbot IA pour lancer des automatisations Voltask.</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://editor.voltapp.tech" target="_blank">
                <img src="/images/projects/voltapp.png" alt="" />
                <h3>Voltapp</h3>
                <p>Voltapp est un outil No-code permettant de créer des applications web grâce à la programmation visuelle.</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://creator.celestory.io" target="_blank">
                <img src="/images/projects/celestory.png" alt="" />
                <h3>Celestory</h3>
                <p>Outil pour créer des serious games, formations et visual novels avec un système de choix et de variables en No-code.</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://ttmc-ui.vercel.app" target="_blank">
                <img src="/images/projects/ttmc-for-dev.png" alt="" />
                <h3>TTMC for dev</h3>
                <p>Inspiré par le jeu "Tu te mets combien ?" pour aider les apprenti.e.s développeur.ses à améliorer leur culture tech.</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://photomapper.io" target="_blank">
                <img src="/images/projects/photomapper.png" alt="" />
                <h3>Photomapper</h3>
                <p>Application mobile de partage de photos géolocalisées partout dans le monde.</p>
            </a>
        </article>
        <article class="project appear" use:scrollEffect={3}>
            <a href="https://apps.apple.com/us/app/crafter-ar-build-battle/id1389840361" target="_blank">
                <img src="/images/projects/crafter-ar.png" alt="" />
                <h3>Crafter AR</h3>
                <p>Jeu mobile de pictionary en réalité augmenté et en temps réel.</p>
            </a>
        </article>
    </div>
    <h3>Ils nous ont fait confiance</h3>
    <div style:display="flex" style:gap="2rem" style:flex-wrap="wrap" style:scale="0.7" style:justify-content="center">
        {#each ['amd', 'bnp', 'bouygues', 'cnes', 'decathlon', 'epitech', 'france', 'tf1'] as client}
            <img src="/images/clients/{client}.svg" alt={client} />
        {/each}
    </div>
    <p style:text-align="center" style:max-width="40rem" style:margin="auto">
        * la majorité de nos projets ne figurent pas sur le site car ils ne sont pas publiques mais nous serions ravis d'en discuter avec vous si vous envisagez
        de travailler avec nous.
    </p>
</section>
<section id="team" class="center" class:focus={section === 'team'} bind:this={teamElement}>
    <h2 use:scrollEffect={0.5} class="appear">Qui sommes-nous ?</h2>
    <div use:scrollEffect={0.5} class="subtitle appear">
        3 amis développeurs avec plus de 10 ans d'expérience, pour vous créer des sites web et applications accessibles, innovantes et performantes !
    </div>
    <div class="wrap-center">
        <article class="profile appear" use:scrollEffect={1.4}>
            <a class="developer" href="/jeremie">
                <Eyevatar src="/images/profiles/jeremie.png" name="jeremie" left={{x: 84, y: 80}} right={{x: 110, y: 80}} bg="var(--color-pink)" />
                <div class="name">Jeremie</div>
            </a>
            <a href="https://www.linkedin.com/in/jeremie-taboada-16495959/" target="_blank" aria-label="Linked In"><LinkedInIcon /></a>
            <a href="https://github.com/jeremt" target="_blank" aria-label="Github"><GithubIcon /></a>
        </article>
        <article class="profile appear" use:scrollEffect={1}>
            <a class="developer" href="/jonathan">
                <Eyevatar src="/images/profiles/jonathan.png" name="jonathan" left={{x: 84, y: 82}} right={{x: 110, y: 80}} bg="var(--color-cyan)" />
                <div class="name">Jonathan</div>
            </a>
            <a href="https://www.linkedin.com/in/jonathanpicques/" target="_blank" aria-label="Linked In"><LinkedInIcon /></a>
            <a href="https://github.com/jonathanpicques" target="_blank" aria-label="Github"><GithubIcon /></a>
        </article>
        <article class="profile appear" use:scrollEffect={0.6}>
            <a class="developer" href="/vincent">
                <Eyevatar src="/images/profiles/vincent.png" name="vincent" left={{x: 72, y: 78}} right={{x: 100, y: 75}} bg="var(--color-indigo)" />
                <div class="name">Vincent</div>
            </a>
            <a href="https://www.linkedin.com/in/vincentneel/" target="_blank" aria-label="Linked In"><LinkedInIcon /></a>
            <a href="https://github.com/pikanezi" target="_blank" aria-label="Github"><GithubIcon /></a>
        </article>
    </div>
</section>
<section id="faq" class="top" class:focus={section === 'faq'} bind:this={faqElement}>
    <h2 use:scrollEffect={0.5} class="appear">Foire aux questions</h2>
    {#each questions as question}
        <details use:scrollEffect={0.5} class="appear">
            <summary>{question.question}</summary>
            <div>
                {question.answer}
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
    <div class="subtitle" style:margin-top="2em">(On vous aide gratuitement à définir clairement votre besoin et établir un devis)</div>
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
        background-color: var(--color-pink);
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
        max-width: 60rem;
    }
    .logo {
        font-family: var(--font-logo);
        font-weight: normal;
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

    #sky {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
    }

    #intro .cta {
        background-color: var(--color-yellow);
        margin-bottom: 6rem;
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
    article p {
        padding-inline: 1rem;
        margin-top: 0.5rem;
        line-height: 1.5;
        color: var(--color-white-1);
    }

    article img {
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
        }

        #projects .grid:hover article.project a:hover {
            opacity: 1;
            filter: blur(0);
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
        margin: 0.3rem;
        border-radius: 50%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        color: var(--color-black);
        background-color: var(--color-white);
        transition: 0.3s all;
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
    #faq details a {
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
        opacity: var(--progress);
        translate: 0 calc((1 - var(--progress)) * 2rem);
    }
</style>
