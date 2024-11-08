---
title: Kysely plutôt qu'une ORM
thumbnail: /images/profiles/jonathan.webp
date: 2024-10-15
published: true
---
# Pourquoi Kysely plutôt qu'une ORM ?

Quand on crée un site ou une API, on a besoin la plupart du temps d'une base de données, souvent SQL et du coup souvent Postgres. Dans cet article (un peu technique), je vais vous expliquer pourquoi on s'est tourné vers Kysely pour la plupart de nos projets.

On va généralement se connecter à notre base de données depuis notre code back-end donc dans du TypeScript, Go, Php ou Rust par exemple. On va rester sur le cas du TS, car c'est le langage que je me retrouve à devoir utiliser la plupart du temps.

On peut utiliser directement du "raw SQL", mais c'est je pense plutôt conscensuel que cette approche n'est pas optimale :

```ts
// retourne des lignes non-typées
const rows = client.query("SELECT * FROM products");
```

## ORMs vs Query builders

Généralement, on va utiliser une bibliothèque qui rend plus ergonomique l'utilisation du SQL dans le langage qu'on utilise. En TypeScript, on a envie d'utiliser le typage au mieux pour décrire le schema de notre base de donnée.

L'ORM Prisma par exemple, permet de le définir dans son propre DSL :

```prisma
model Products {
  id          Int      @id @default(autoincrement())
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  name        String
  description String?
  price       Int      @default(0)
}
```

```ts
// retourne une liste de produits typés
const allProducts = await prisma.products.findMany();
```

Dans Drizzle on peut le faire en ts directement :

```ts
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  name: text("name").notNull(),
  description: text("description"),
  price: integer("price").default(0).notNull(),
});

// retourne une lsite de produits typés
const allProducts = await db.select().from(products);
```

Bien qu'assez pratiques, le souci que j'ai avec ces approches c'est qu'on est limité sur ce qu'on peut faire niveau SQL (même si c'est un peu moins vrai pour drizzle).

## Les migrations

C'est surtout la gestion des migrations qui pour moi est un peu limitée avec ces approches.

En gros, on met à jour notre schéma, avec l'approche choisie par l'ORM, puis le code SQL de la migration est généré automatiquement. C'est cool si on veut supprimer un champs ou supprimer une table par exemple, mais dans la vraie vie, on a parfois des migrations un peu plus compliquées. La plupart du temps, le code metier de la migration serait plus simple à écrire en TypeScript plutôt qu'en étant limité uniquement à du SQL.

## Kysely

Contrairement aux ORMs qu'on a vu, Kysely est un simple query builder. Il s'agit simplement de rendre plus ergonomique l'utilisation de SQL en TypeScript. Du coup, il n'y a pas vraiment de limitation par rapport à ce qu'on pourrait faire directement en SQL.

Losrqu'on crée le client Kysely, on spécifie directement le schema de la base de données en TypeScript :

```ts
export const kysely = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new pg.Pool({
      connectionString: DATABASE_URL,
    }),
  }),
});
```

### Le typage automatique

Kysely n'a pas d'opinion sur comment le type `Database` doit être créé. Personnellement, j'aime bien utiliser un outil qui permet de le générer directement depuis la base de données avec une simple commande. Pour ça, j'utilise [kanel](https://kristiandupont.github.io/kanel/getting-started.html).

### Les migrations

Dans kysely, on peut faire des migrations "à l'ancienne". Autrement dit une fonction `up(){:js}` pour définir les changements et une fonction `down(){:js}` pour les annuler.

```ts
export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable("products")
    .ifNotExists()
    .addColumn("id", "int8", (col) =>
      col.generatedAlwaysAsIdentity().primaryKey()
    )
    .addColumn("createdAt", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn("updatedAt", "timestamptz", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("description", "text")
    .addColumn("price", "int8", (col) => col.defaultTo(0))
    .execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable("products").execute();
}
```

Bien qu'il n'y ait pas de script déjà fait pour migrer, on peut le ajouter très facilement en [suivant leur doc](https://kysely.dev/docs/migrations). Sinon voici le [script de migration](https://gist.github.com/jeremt/061aaa34cca5b58a92f7fef2e640ac23) que j'utilise des mes projets.

L'avantage de cette approche c'est qu'on peut facilement faire des migrations plus poussées avec plus de flexibilité que simplement mettre à jour le schema (si vous voulez des exemples dites-le moi en commentaire).

Du coup, pour modifier la base de données dans mes projets, il suffit de :

1. Créer une nouvelle migration (`pnpm kysely:migrate new`)
2. L'exécuter (`pnpm kysely:migrate latest`)
3. Utiliser kanel pour mettre à jour les types (`pnpm kysely gentypes`)

### Configuration kanel

Par défaut Kanel ne propose pas une manière simple de typer les champs de types JSON, on a donc fait un [fichier de configuration](https://gist.github.com/jeremt/0be1c41cd92cea50c8dc322cb4e46c53) pour facilement gérer ça.

Il suffit ensuite de définir un json avec les colonnes qui ont des types custom :

```json
{
  "public.documents.lines": "{price:number; quantity?:number; description:string}[]",
  "public.recipes.ingredients": "{quantity?:number; name:string}[]"
}
```

## Conclusion

Cela fait maintenant quelques projets que j'utilise cette solution et j'en suis très content. Mais j'aimerais bien avoir d'autres avis sur la question, donc n'hésitez pas à me dire ce que vous en pensez !

PS : Dites-moi si vous aimeriez voir un exemple de projet qui utilise ces outils :)
