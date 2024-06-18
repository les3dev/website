export interface Developer {
    name: string;
    color: string;
    github: string;
    linkedin: string;
    biography: string;
}

export const developers: Record<string, Developer> = {
    jeremie: {
        name: 'Jeremie',
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
        color: 'var(--color-cyan)',
        biography: `Je suis un développeur passionné et touche-à-tout.

Mon expérience m'a permis de faire du jeu vidéo (Godot, Unity, Unreal, C#, C++), du front et du back (React, Svelte, Go, TypeScript, PostgreSQL), d'écrire des langages (PEG, Rust) ou encore des outils de création no-code dans le navigateur (Redux, WebSocket).

J'ai travaillé avec des grands noms comme Airbus, TF1, BNP, Décathlon ou encore le CNES.`,
        github: `jonathanpicques`,
        linkedin: `jonathanpicques`,
    },
};
