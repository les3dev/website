export const meta = {
    title: 'Les 3 dev - Agence de développement web & mobile',
    siteUrl: 'https://www.les3.dev',
    description: 'Nous vous aidons à réaliser des projets ambitieux et sur-mesure.',
    thumbnail: '/thumbnail.png',
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

Je travaille principalement sur des projets web (React & SvelteKit) avec une appétence particulière pour le dev back (Node, Golang, PostgreSQL) et une solide connaissance en infra (Docker, Google cloud).

Mon expérience professionnelle en tant que co-fondateur de startup m'a amené à travailler avec de grands groupes comme TF1, la BNP ou encore le CNES. J'ai pu les accompagner de la conception de leurs projets, en passant par le développement, la mise en production, la formation des équipes et la maintenance.

J'accorde une attention particulière à l'accompagnement des clients pour répondre le plus efficacement possible à leurs attentes.`,
        github: `pikanezi`,
        linkedin: `vincentneel`,
    },
    jonathan: {
        name: 'Jonathan',
        eyes: {left: {x: 84, y: 82}, right: {x: 110, y: 80}},
        color: 'var(--color-cyan)',
        biography: `Je suis un développeur passionné et touche-à-tout.

Mon expérience m'a permis de faire du jeu vidéo (Godot, Unity, Unreal, C#, C++), du front et du back (React, Svelte, Go, TypeScript, PostgreSQL), d'écrire des langages (PEG, Rust) ou encore des outils de création no-code dans le navigateur (Redux, WebSocket).

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
        question: `Pourquoi pas du No-code ?`,
        answer: `Nous avons pu utiliser et même créer des outils No-code depuis plusieurs années. Nous sommes donc bien placés pour en comprendre les avantages mais
        aussi les limitations. Le No-code est très bien pour créer rapidement une version basique et "jetable" de votre idée. En revanche, si vous voulez un
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
        thumbnail: '/images/projects/voltask.png',
        title: 'Voltask',
        description: 'Outil No-code collaboratif dans le navigateur pour créer des automatisations avec des scénarios visuels.',
        video: '/videos/voltask.mp4',
    },
    {
        slug: 'codepassport',
        link: 'https://codepassport.dev',
        thumbnail: '/images/projects/codepassport.png',
        title: 'Code Passport',
        description: "Site web interactif destiné à l'apprentissage du code (JS, HTML & CSS).",
        content: `Code Passport est une plateforme intéractive qui permet l'apprentissage du code à travers des guides illustrés, des exercices interactifs avec un éditeur intégré et des quiz. Chaque cours est représenté par une map en 3d avec l'ensemble des étapes débloquables au fur et à mesure.
    
Le site est développé avec le framework SvelteKit et utilise PostgreSQL pour la base de donnée. La scène 3d utilise la technologie ThreeJS.`,
    },
    {
        slug: 'voltask-ai',
        link: 'https://chat.voltask.tech',
        thumbnail: '/images/projects/voltask-ai.png',
        title: 'Voltask AI',
        description: 'Chatbot IA pour lancer des automatisations Voltask.',
        video: '/videos/voltask-ai.mp4',
    },
    {
        slug: 'voltapp',
        link: 'https://editor.voltapp.tech',
        thumbnail: '/images/projects/voltapp.png',
        title: 'Voltapp',
        description: 'Voltapp est un outil No-code permettant de créer des applications web grâce à la programmation visuelle.',
        video: '/videos/voltapp.mp4',
    },
    {
        slug: 'celestory',
        link: 'https://creator.celestory.io',
        thumbnail: '/images/projects/celestory.png',
        title: 'Celestory',
        description: 'Outil pour créer des serious games, formations et visual novels avec un système de choix et de variables en No-code.',
        video: '/videos/celestory.mp4',
    },
    {
        slug: 'ttmc-for-dev',
        link: 'https://ttmc-ui.vercel.app',
        thumbnail: '/images/projects/ttmc-for-dev.png',
        title: 'TTMC for dev',
        description: 'Inspiré par le jeu "Tu te mets combien ?" pour aider les apprenti.e.s développeur.ses à améliorer leur culture tech.',
        content: `TTMC est un jeu gratuit et Open-source que nous avons développé pour aider les développeur.ses à améliorer leur culture générale en développement informatique.

Les cartes du jeux sont créées de manière collaborative sur Github. N’hésitez pas à contribuer si vous avez des idées !

Le projet a été réalisé avec le framework SvelteKit en JavaScript.`,
    },
    {
        slug: 'photomapper',
        link: 'https://photomapper.io',
        thumbnail: '/images/projects/photomapper.png',
        title: 'Photomapper',
        description: 'Application mobile de partage de photos géolocalisées partout dans le monde.',
        carousel: [
            '/images/projects/photomapper-screen-0.png',
            '/images/projects/photomapper-screen-1.png',
            '/images/projects/photomapper-screen-2.png',
            '/images/projects/photomapper-screen-3.png',
            '/images/projects/photomapper-screen-4.png',
        ],
        content: `Photomapper est une application iOS et Android qui permet de partager des spots de photos géolocalisés sur une map.

L’application a du être optimisée pour permettre d’afficher une grande quantité de spots en même temps sur la map. Elle a été développé en utilisant le framework React Native avec la technologie Mapbox. Elle inclue également des In-App purchase.`,
    },
    {
        slug: 'crafter',
        link: 'https://apps.apple.com/us/app/crafter-ar-build-battle/id1389840361',
        thumbnail: '/images/projects/crafter-ar.png',
        title: 'Crafter AR',
        description: 'Jeu mobile de pictionary en réalité augmentée et en temps réel.',
        carousel: [
            '/images/projects/crafter-screen-0.png',
            '/images/projects/crafter-screen-1.png',
            '/images/projects/crafter-screen-2.png',
            '/images/projects/crafter-screen-3.png',
            '/images/projects/crafter-screen-4.png',
        ],
        content: `Crafter est un jeu mobile multi-joueur disponible sur iOS et Android.  Le principe du jeu est d’utiliser des cubes pour créer des constructions qui représentent des concepts à faire deviner à ses ami.e.s.

Le jeu est développé avec le moteur de jeux Unity, il utilise la technologie de Google Firebase pour la base de données et la gestion du temps réel. Il contient également des fonctionnalités comme l’In-App purchase et la possibilité de partager ses créations en réalité augmentée.`,
    },
];
