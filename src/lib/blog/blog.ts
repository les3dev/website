import matter from 'gray-matter';

interface Article {
    date: Date;
    title: string;
    content: string;
    thumbnail: string;
    formattedDate: string;
}

const articles = import.meta.glob('./content/*.md', {as: 'raw', eager: true});

export function getArticle(slug: string) {
    return getArticles().find((article) => article.slug === slug);
}

export function getArticles() {
    return Object.entries(articles).reduce(
        (acc, [path, content]) => {
            const {data} = matter(content);
            if (!data.published) {
                return acc;
            }
            return [
                ...acc,
                {
                    date: new Date(data.date),
                    slug: path.substring('./content/'.length, path.length - 3),
                    title: data.title,
                    thumbnail: data.thumbnail,
                    formattedDate: formatDate(data.date),
                },
            ];
        },
        [] as (Omit<Article, 'content'> & {slug: string})[],
    );
}

function formatDate(date: Date) {
    return `Le ${date.getDate()} ${
        ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'][date.getMonth()]
    } ${date.getFullYear()}`;
}
