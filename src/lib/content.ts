export const meta = {
    title: 'Les 3 dev - Agence de développement web & mobile',
    siteUrl: 'https://www.les3.dev',
    description: 'Nous vous aidons à réaliser des projets ambitieux et sur-mesure.',
    thumbnail: '/thumbnail.webp',
};

export interface Profile {
    name: string;
    eyes: {left: {x: number; y: number}; right: {x: number; y: number}};
    color: string;
    github: string;
    linkedin: string;
    biography: string;
}

export const profiles: Record<string, Profile> = {
    jeremie: {
        name: 'Jeremie',
        eyes: {left: {x: 84, y: 80}, right: {x: 110, y: 80}},
        color: 'var(--color-pink)',
        biography: `J'ai commencé en travaillant dans la R&D chez GoPro, sur de la 3D et de l'IA (principalement en Python, C++ mais aussi un peu de Swift & Java).
        
        J'ai ensuite continué en freelance, ce qui m'a permis d'explorer différentes technologies web & mobile (React, Swift, React Native, Flutter, Unity, Next, PostgreSQL, WebSockets, Svelte, etc.).
        
        J'ai publié des sites & applications pour ma startup & des clients allant de PMEs aux grands groupes, ce qui m'a permis de m'adapter à un large éventail de problématiques.
        
        Outre le développement, j'ai réalisé le design et l'UX de la plupart des applications sur lesquelles j'ai travaillé. Je serais donc ravi de contribuer en partie ou en totalité au design de votre application. J'adore cette partie de la création !`,
        linkedin: `jeremie-taboada`,
        github: `jeremt`,
    },
    vincent: {
        name: 'Vincent',
        eyes: {left: {x: 72, y: 78}, right: {x: 100, y: 75}},
        color: 'var(--color-indigo)',
        biography: `Je suis développeur fullstack polyvalent et passionné avec 10 ans d'expérience.

Je travaille principalement sur des projets web (React & SvelteKit) avec une appétence particulière pour le dev back (Node, Golang, PostgreSQL) et une solide connaissance en DevOps (Docker, Google cloud).

Mon expérience professionnelle en tant que co-fondateur de startup m'a amené à travailler avec de grands groupes comme TF1, la BNP ou encore le CNES. J'ai pu les accompagner sur la conception de leurs projets, en passant par le développement, la mise en production, la formation des équipes et la maintenance.

J'accorde une attention particulière à l'accompagnement des clients pour répondre le plus efficacement possible à leurs attentes.`,
        github: `pikanezi`,
        linkedin: `vincentneel`,
    },
    jonathan: {
        name: 'Jonathan',
        eyes: {left: {x: 84, y: 82}, right: {x: 110, y: 80}},
        color: 'var(--color-cyan)',
        biography: `Je suis un développeur passionné et touche-à-tout.

Mon expérience m'a permis de faire du jeu vidéo (Godot, Unity, Unreal, C#, C++), du front et du back (React, Svelte, Go, TypeScript, PostgreSQL), d'écrire des langages (PEG, Rust) ou encore des outils de création No-Code dans le navigateur (Redux, WebSocket).

J'ai travaillé avec des grands noms comme Airbus, TF1, BNP, Décathlon ou encore le CNES.`,
        github: `jonathanpicques`,
        linkedin: `jonathanpicques`,
    },
};

export const faq = [
    {
        question: `Pourquoi 3 développeurs ?`,
        answer: `Nous avons l’habitude de travailler ensemble depuis plusieurs années. Grâce à nos différentes affinités et domaines d’expertise nous pouvons nous
        répartir efficacement pour répondre au mieux à toutes vos demandes aussi variées soient-elles.`,
    },
    {
        question: `Quels types de projet & fonctionnalités peuvent être réalisés ?`,
        answer: `Probablement tout ce que vous pourriez imaginer. Avec nos 10 ans d'expériences, nous avons rencontré beaucoup de contraintes et tout autant de solutions.
        Nous avons réalisé un grand nombre d'applications ou de sites web avec des fonctionnalités très différentes (realtime, collaboration, 3D, etc.). Nous avons pu réaliser des MVPs pour
        des startups mais aussi des projets pour de plus grands organismes comme une application de gestion de tickets pour Decathlon, une messagerie temps réel et une application de
        cartographie pour le CNES (Centre National d'Études spaciales) ou encore une application de gestion de crise pour le GIGN.`,
    },
    {
        question: `Combien de temps prendrait la réalisation de mon projet ?`,
        answer: `Cela déprendra de l'urgence de votre côté mais également de nos disponibilités. Nous avons l'habitude de travailler plutôt rapidement et vous
        fournir des résultats de l'avancement au fur et à mesure. <a href="#contact">Contactez-nous</a> dès maintenant pour avoir une estimation !`,
    },
    {
        question: `Est-ce que je dois m'occuper du design ?`,
        answer: `La plupart des projets ne nécessitent pas uniquement du code, mais aussi du design. Nous vous proposons de gérer également la partie graphique UI (User Interface). Cependant, nous pouvons nous adapter en fonction de votre existant (identité visuelle, logo, etc.) et vos besoins personnels.`,
    },
    {
        question: `Pourquoi pas du No-Code ?`,
        answer: `Nous avons pu utiliser et même créer des outils No-Code depuis plusieurs années. Nous sommes donc bien placés pour en comprendre les avantages mais
        aussi les limitations. Le No-Code est très bien pour créer rapidement une version basique et "jetable" de votre idée. En revanche, si vous voulez un
        projet qualitatif, performant et maintenable sur du long terme, nous vous conseillons de plutôt vous tourner vers du code "classique".`,
    },
    {
        question: `Pourquoi (ne pas) recruter un CTO ?`,
        answer: ` Avoir un CTO (Chief Technical Officer) est la solution idéale sur le moyen/long terme pour une startup. Cependant, cela peut-être compliqué et très cher de choisir cette
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

export const projects = [
    {
        slug: 'voltask',
        link: 'https://demo.voltask.tech',
        thumbnail: '/images/projects/voltask.webp',
        title: 'Voltask',
        tags: ['IA', 'Temps-Réel'],
        description: 'Outil No-Code collaboratif dans le navigateur pour créer des automatisations avec des scénarios visuels.',
        video: '/videos/voltask.mp4',
        content: `Voltask est un outil permettant de créer des automatisations (comme <strong>Zapier</strong> ou <strong>Make</strong>). Il est entièrement collaboratif en temps réel : plusieurs personnes peuvent éditer un projet en même temps (comme <strong>Figma</strong>).

Il a été pensé pour interconnecter des outils <strong>IA</strong> tels que <strong>OpenAI</strong>, <strong>MistralAI</strong> ou encore <strong>Langchain</strong> avec d'autres plus conventionnels comme <strong>Supabase</strong>, <strong>Discord</strong> ou l'envoi d'e-mail.
Voltask a été également pensé pour être installé en interne afin de permettre aux sociétés de garantir la souveraineté et la sécurité de leurs données.

Voltask a été développé en <strong>TypeScript</strong> avec <strong>React</strong> pour la partie frontend, <strong>NodeJS</strong> et <strong>PostgreSQL</strong> pour la partie backend, <strong>Go</strong> pour l'exécution des scénarios, <strong>Deno</strong> et <strong>Bun</strong> pour les différentes intégrations. Pour le temps réel, nous avons utilisé des <strong>WebSockets</strong>. Enfin, nous avons utilisé <strong>Docker</strong> pour permettre aux clients de déployer leur propre instance de Voltask en interne ou sur des providers comme <strong>GCP</strong> ou <strong>Outscale</strong>.`,
    },
    {
        slug: 'codepassport',
        link: 'https://codepassport.dev',
        thumbnail: '/images/projects/codepassport.webp',
        title: 'Code Passport',
        tags: ['LMS', '3d'],
        description: "Site web interactif destiné à l'apprentissage du code (JS, HTML & CSS).",
        carousel: [
            '/images/projects/codepassport-screen-0.webp',
            '/images/projects/codepassport-screen-1.webp',
            '/images/projects/codepassport-screen-2.webp',
            '/images/projects/codepassport-screen-3.webp',
        ],
        content: `Code Passport est une plateforme intéractive qui permet l'apprentissage du code à travers des <strong>guides illustrés</strong>, des <strong>exercices</strong> interactifs avec un éditeur intégré et des <strong>quiz</strong>. Chaque cours est représenté par une map en 3d avec l'ensemble des étapes débloquables au fur et à mesure.
    
Le site est développé avec le framework <strong>SvelteKit</strong> et utilise <strong>PostgreSQL</strong> pour la base de donnée. La scène <strong>3d</strong> utilise la technologie <strong>ThreeJS</strong>.`,
    },
    {
        slug: 'voltask-ai',
        link: 'https://chat.voltask.tech',
        thumbnail: '/images/projects/voltask-ai.webp',
        title: 'Voltask AI',
        tags: ['IA', 'Chatbot'],
        description: 'Chatbot IA pour lancer des automatisations Voltask.',
        video: '/videos/voltask-ai.mp4',
        content: `Voltask AI est une application de discussion avec une <strong>IA générative</strong> (<strong>Mistral</strong>) connectée directement au système d'automatisation de Voltask. En utilisant un système de prompt, <strong>l'IA</strong> peut proposer d'exécuter des automatisations définies dans un scénario Voltask.

Voltask AI a été développé en <strong>TypeScript</strong> avec <strong>Svelte</strong> pour la partie Frontend et utilise Voltask pour la partie backend.`,
    },
    {
        slug: 'voltapp',
        link: 'https://editor.voltapp.tech',
        thumbnail: '/images/projects/voltapp.webp',
        title: 'Voltapp',
        tags: ['SaaS'],
        description: 'Voltapp est un outil No-Code permettant de créer des applications web grâce à la programmation visuelle.',
        video: '/videos/voltapp.mp4',
        content: `Voltapp est un outil permettant de créer des applications web en No-Code (comme <strong>Bubble</strong> ou <strong>Webflow</strong>).

Il a été pensé pour créer des applications rapidement grâce à un système de nœud personnalisable et réutilisable. Nous avons développé un langage de programmation visuel sous forme de graphe permettant d'ajouter des comportements spécifiques à chaque nœud sans écrire une ligne de code.
Nous avons développés de nombreux nœuds pour intéragir avec différents services externes tels que <strong>Airtable</strong>, <strong>Supabase</strong>, <strong>Mapbox</strong> ou encore <strong>Google Sheet</strong>.

Voltapp a été utilisé entre autres pour développer des applications pour le Centre National de l'Étude Spatiale (<strong>CNES</strong>) en Guyane ou encore <strong>Decathlon</strong>.

Voltapp a été développé en <strong>TypeScript</strong> avec <strong>React</strong> pour la partie frontend, <strong>Redux</strong> pour la partie data et <strong>NodeJS</strong> et <strong>PostgreSQL</strong> pour la partie backend et déployé sur Google Cloud.`,
    },
    {
        slug: 'celestory',
        link: 'https://creator.celestory.io',
        thumbnail: '/images/projects/celestory.webp',
        title: 'Celestory',
        tags: ['SaaS'],
        description: 'Outil pour créer des serious games, formations et visual novels avec un système de choix et de variables en No-Code.',
        video: '/videos/celestory.mp4',
        content: `Celestory est un outil No-Code permettant de créer des formations, visual novels ou jeux textuels en utilisant un système de graphes pour représenter le scénario.

Celestory a été développé en <strong>TypeScript</strong> avec <strong>React</strong> pour la partie frontend, <strong>Redux</strong> pour la partie data et <strong>NodeJS</strong> et <strong>PostgreSQL</strong> pour la partie backend et déployé sur Google Cloud.`,
    },
    {
        slug: 'photomapper',
        link: 'https://apps.apple.com/fr/app/photomapper-best-photo-spots/id1438216427',
        thumbnail: '/images/projects/photomapper.webp',
        title: 'Photomapper',
        tags: ['Mobile', 'Géoloc'],
        description: 'Application mobile de partage de photos géolocalisées partout dans le monde.',
        carousel: [
            '/images/projects/photomapper-screen-0.webp',
            '/images/projects/photomapper-screen-1.webp',
            '/images/projects/photomapper-screen-2.webp',
            '/images/projects/photomapper-screen-3.webp',
            '/images/projects/photomapper-screen-4.webp',
        ],
        content: `Photomapper est une application <strong>iOS</strong> et <strong>Android</strong> qui permet de partager des spots de photos géolocalisés sur une map.

L’application a du être optimisée pour permettre d’afficher une grande quantité de spots en même temps sur la map. Elle a été développé en utilisant le framework <strong>React Native</strong> avec la technologie <strong>Mapbox</strong>. Elle inclue également des <strong>In-App purchase</strong>.`,
    },
    {
        slug: 'crafter',
        link: 'https://apps.apple.com/us/app/crafter-ar-build-battle/id1389840361',
        thumbnail: '/images/projects/crafter-ar.webp',
        title: 'Crafter AR',
        tags: ['Mobile', 'Réalité Augmenté', 'Temps-Réel', '3d'],
        description: 'Jeu mobile de pictionary en réalité augmentée et en temps réel.',
        carousel: [
            '/images/projects/crafter-screen-0.webp',
            '/images/projects/crafter-screen-1.webp',
            '/images/projects/crafter-screen-2.webp',
            '/images/projects/crafter-screen-3.webp',
            '/images/projects/crafter-screen-4.webp',
        ],
        content: `Crafter est un jeu mobile multi-joueur disponible sur <strong>iOS</strong> et <strong>Android</strong>.  Le principe du jeu est d’utiliser des cubes pour créer des constructions qui représentent des concepts à faire deviner à ses ami.e.s.

Le jeu est développé avec le moteur de jeux <strong>Unity</strong>, il utilise la technologie de <strong>Google Firebase</strong> pour la base de données et la gestion du temps réel. Il contient également des fonctionnalités comme <strong>l’In-App purchase</strong> et la possibilité de partager ses créations en <strong>réalité augmentée</strong>.`,
    },
];

export const partners = [
    {slug: 'amd', alt: 'AMD'},
    {slug: 'bnp', alt: 'BNP Paribas'},
    {slug: 'bouygues', alt: 'Bouygues'},
    {slug: 'cnes', alt: `Centre national d'études spatiales`},
    {slug: 'decathlon', alt: `DECATHLON`},
    {slug: 'epitech', alt: 'Epitech'},
    {slug: 'france', alt: 'Gouvernement français'},
    {slug: 'tf1', alt: 'TF1'},
];

export const studies = [
    {
        slug: 'bnp',
        title: `BNP Parisbas Mycampus`,
        description: 'Accompagner les 13 000 collaborateurs dans leur utilisation des outils digitaux',
        image: `/images/studies/bnp.webp`,
        color: `rgba(67, 175, 132, 1)`,
        content: `<p>Connue pour son engagement dans la transformation digitale et le développement des compétences de ses collaborateurs, BNP s’est fixé pour objectif d'accompagner ses équipes dans l’adaptation aux nouveaux usages et attentes du secteur bancaire.</p>
<h2>Accompagner les 13 000 collaborateurs dans leur utilisation des outils digitaux</h2>
<p>L’objectif du Compagnon Numérique est de former les collaborateurs à l’utilisation des outils digitaux de BNP. En particulier pour les aider à répondre aux questions des clients sur les outils en libre-service.</p>
<img src="/images/studies/bnp-screen-0.webp" alt="">
<p>Pour offrir un accompagnement optimal, un questionnaire permettant d'évaluer la maturité numérique du collaborateur lui était proposé. Le chatbot suggérait ensuite les scénarios appropriés.</p>
<p>Un tableau de bord regroupant les statistiques a été développé pour suivre l’utilisation et l'efficacité du chatbot, permettant à BNP Paribas de monitorer l'engagement de ses collaborateurs.</p>
<img src="/images/studies/bnp-screen-1.webp" alt="">`,
        alt: 'BNP Paribas',
        tags: ['SAML 2', 'NodeJS', 'Go', ' Typescript', 'PostgreSQL', 'React'],
    },
    {
        slug: 'cnes',
        title: `Le Centre National d'Études Spatiales (CNES)`,
        description: `Améliorer la communication et la sécurité du centre spatial Guyanais`,
        image: `/images/studies/cnes.webp`,
        color: `rgba(31, 110, 176, 1)`,
        content: `<p>Le Centre National d'Études Spatiales (CNES) est l'agence spatiale française chargée d'élaborer et de conduire la politique spatiale de la France. Le CNES développe des projets à la fois pour l'exploration spatiale et pour les applications civiles, en soutien aux activités sur le terrain.</p>
<h2>Améliorer la communication et la sécurité du centre spatial guiyanais</h2>
<p>Le CNES a souhaité digitaliser la gestion de ses bases, en particulier sa base en Guyane, afin de gagner en réactivité, sécuriser le terrain, et diffuser l’information de manière plus pertinente et accessible.</p>
<p>Deux applications ont été développées :</p>
<p><strong>Infobase</strong>, pour partager des informations de manière ciblée sur un périmètre géographique.</p>
<img src="/images/studies/cnes-screen-1.webp" alt="">
<p><strong>Géobase</strong>, une application de cartographie permettant de créer et visualiser les bâtiments et localiser les utilisateurs en temps réel.</p>
<img src="/images/studies/cnes-screen-0.webp" alt="">`,
        alt: 'CNES',
        tags: ['PostgreSQL', 'WebSocket', 'MapBox', 'React', 'OAuth (CNES)', 'Docker', 'Supabase'],
    },
    {
        slug: 'decathlon',
        title: `Decathlon : Décat'Club`,
        description: `Permettre à Décat'Club de faire le lien entre coupons utilisateurs et partenaires, rapidement`,
        image: `/images/studies/decathlon.webp`,
        color: `rgba(61, 75, 201, 1)`,
        content: `<p>Décathlon est un leader mondial dans la distribution d'articles de sport que l’on ne présente plus. Reconnue pour son engagement à rendre le sport accessible au plus grand nombre, cela passe notamment par son programme de fidélité Decat’Club et ses collaborations avec des partenaires locaux.</p>
<h2>Permettre à DécatClub de faire le lien entre coupons utilisateurs et partenaires, rapidement</h2>
<p>Créer rapidement, en quelques jours, un outil  permettant aux partenaires de gérer les coupons utilisés par les clients, tout en offrant une interface d’administration pour que Décathlon puisse facilement créer et gérer des offres de partenariat.</p>
<img src="/images/studies/decath-screen-0.webp" alt="">
<p>Le projet DecatClub inclut plusieurs fonctionnalités clés :</p>
<ul>
<li><strong>La gestion des partenaires</strong> : Les administrateurs de Décathlon peuvent ajouter des partenaires et créer des offres valables contre des points DecatClub.</li>
<li><strong>Validation des coupons</strong> : Les partenaires, tels que des salles de sport ou des commerces, peuvent vérifier l’utilisation des coupons par les clients. Par exemple, un client échange ses points contre une offre chez un partenaire, qui valide ensuite le coupon dans l’interface.</li>
<li><strong>Automatisation et externalisation</strong> : L'un des principaux défis était de créer un système qui puisse être géré de manière indépendante par les partenaires, tout en réduisant les charges pour Décathlon.</li>
</ul>`,
        alt: 'Decathlon',
        tags: ['Typescript', 'React', 'Airtable', 'No Code'],
    },
];
