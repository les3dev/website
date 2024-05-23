<script>
    import Logo from '$lib/icons/Logo.svelte';
</script>

<header>
    <div id="logo"><Logo /></div>
    <nav>
        <a href="#intro">Intro</a>
        <a href="#projects">Projets</a>
        <a href="#team">L'équipe</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
    </nav>
</header>

<section id="intro" class="center">
    <h1 class="big">Vous avez les idées,<br />On les fait marcher.</h1>
    <a role="button" href="mailto:contact@les3.dev" class="cta">Demander un devis</a>
</section>
<section id="projects">
    <h2>Nos projets</h2>
    <div class="subtitle">Échantillion non-exaustif de notre travail de ces dernières années</div>
    <article>
        <a href="https://demo.voltask.tech" target="_blank">
            <img src="/images/voltask.png" alt="" />
            <h3>Voltask</h3>
            <p>Outil no-code collaboratif dans le navigateur pour créer des automatisations avec des scénarios visuels.</p>
        </a>
    </article>
    <article>
        <a href="https://codepassport.dev" target="_blank">
            <img src="/images/codepassport.png" alt="" />
            <h3>Code Passport</h3>
            <p>Site web interactif destiné à l'apprentissage du code (JS, HTML & CSS).</p>
        </a>
    </article>
    <article>
        <a href="https://chat.voltask.tech" target="_blank">
            <img src="/images/voltask-ai.png" alt="" />
            <h3>Voltask AI</h3>
            <p>Chatbot IA pour lancer des automatisations Voltask.</p>
        </a>
    </article>
    <article>
        <a href="https://editor.voltapp.tech" target="_blank">
            <img src="/images/voltapp.png" alt="" />
            <h3>Voltapp</h3>
            <p>Voltapp est un outil no-code permettant de créer des applications web grâce à la programmation visuelle.</p>
        </a>
    </article>
    <article>
        <a href="https://creator.celestory.io" target="_blank">
            <img src="/images/celestory.png" alt="" />
            <h3>Celestory</h3>
            <p>Outil pour créer des serious games, formations et visual novels avec un système de choix et de variables en no-code.</p>
        </a>
    </article>
    <article>
        <a href="https://ttmc-ui.vercel.app" target="_blank">
            <img src="/images/ttmc-for-dev.png" alt="" />
            <h3>TTMC for dev</h3>
            <p>Inspiré par le jeu "Tu te mets combien ?" pour aider les apprenti.e.s développeur.ses à améliorer leur culture tech.</p>
        </a>
    </article>
    <article>
        <a href="https://photomapper.io" target="_blank">
            <img src="/images/photomapper.png" alt="" />
            <h3>Photomapper</h3>
            <p>Application mobile de partage de photos géolocalisées partout dans le monde.</p>
        </a>
    </article>
    <article>
        <a href="https://apps.apple.com/us/app/crafter-ar-build-battle/id1389840361" target="_blank">
            <img src="/images/crafter-ar.png" alt="" />
            <h3>Crafter AR</h3>
            <p>Jeu mobile de pictionary en réalité augmenté et en temps réel.</p>
        </a>
    </article>
</section>
<section id="team">
    <h2>L'équipe</h2>
    <article>
        <img src="/images/jeremie.png" alt="" />
        <div class="name">Jeremie</div>
        <a href="https://www.linkedin.com/in/jeremie-taboada-16495959/" target="_blank">Linked In</a>
        <a href="https://github.com/jeremt" target="_blank">Github</a>
    </article>
    <article>
        <img src="/images/jonathan.png" alt="" />
        <div class="name">Jonathan</div>
        <a href="https://www.linkedin.com/in/jonathanpicques/" target="_blank">Linked In</a>
        <a href="https://github.com/jonathanpicques" target="_blank">Github</a>
    </article>
    <article>
        <img src="/images/vincent.png" alt="" />
        <div class="name">Vincent</div>
        <a href="https://www.linkedin.com/in/vincentneel/" target="_blank">Linked In</a>
        <a href="https://github.com/pikanezi" target="_blank">Github</a>
    </article>
</section>
<section id="faq">
    <h2>Foire aux questions</h2>
    <details>
        <summary>Pourquoi 3 développeurs ?</summary>
        Nous avons l’habitude de travailler ensemble depuis plusieurs années. Grâce à cette experience et nos différentes affinités et domaines d’expertise nous
        pouvons nous répartir efficacement pour répondre à vos demandes les plus folles.
    </details>
    <details>
        <summary>Comment faire évoluer mon projet ?</summary>
        Vous avez les clés
    </details>
</section>
<section id="contact" class="center">
    <h2 class="big">Envie de travailler avec nous ?</h2>
    <a role="button" href="mailto:contact@les3.dev" class="cta">Demander un devis</a>
</section>
<footer>Copyright © 2024 les3dev</footer>

<style>
    header {
        position: sticky;
        top: 0;
        display: flex;
        max-width: 70rem;
        width: 100%;
        margin: auto;
        background-color: #726ff7;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 3rem;
    }
    header nav {
        display: flex;
        font-size: 1.2rem;
        gap: 1rem;
    }
    header nav a {
        color: var(--color-fg);
        text-decoration: none;
        padding: 1rem 2rem;
        border-radius: 2rem;
        transition: background-color 0.3s;
    }
    header nav a:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
    section {
        width: 100%;
        max-width: 60rem;
        min-height: 100vh;
        margin-top: -6rem;
        margin-inline: auto;
        padding-block: 6rem;
        padding-inline: 2rem;
    }
    section.center {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .cta {
        font-size: 1.4rem;
    }
    section > h2:not(.big) {
        margin-top: 0;
        margin-bottom: 1.5rem;
        font-size: clamp(2rem, 6vw, 4rem);
        text-align: center;
        letter-spacing: -1px;
    }
    .subtitle {
        font-size: 1.4rem;
        text-align: center;
    }
    footer {
        padding-bottom: 2rem;
        font-size: 1.2rem;
        text-align: center;
    }
</style>
