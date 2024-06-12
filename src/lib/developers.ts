export interface Developer {
    name: string;
    color: string;
    github: string;
    linkedin: string;
    biography: string;
}

export const developers: Record<string, Developer> = {
    jeremie: {name: 'Jeremie', color: 'var(--color-pink)', biography: ``, linkedin: `jeremie-taboada`, github: `jeremt`},
    vincent: {
        name: 'Vincent',
        color: 'var(--color-indigo)',
        biography: `Je suis développeur fullstack polyvalent et passionné avec plus de 8 ans d'expérience.

Je travaille principalement sur des projets web (React & SvelteKit) avec une appétence particulière pour le dev back (Node, Golang, PostgreSQL) et une solide connaissance en infra (Docker, Google cloud).
Mon expérience professionnelle chez Celestory m'a amené à travailler avec de grands groupes comme TF1, la BNP ou encore le CNES.
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
