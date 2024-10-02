import {mdToHtml} from '$lib/markdown';
import {error} from '@sveltejs/kit';
import matter from 'gray-matter';

interface Article {
    date: Date;
    title: string;
    content: string;
    thumbnail: string;
    formattedDate: string;
}

const articles = import.meta.glob('./content/*.md', {as: 'raw', eager: true});

export async function getArticle(slug: string): Promise<Article> {
    const rawArticleContent = articles[`./content/${slug}.md`];
    if (!rawArticleContent) {
        throw error(404, `Article ${slug} non trouvé !`);
    }
    const {data, content} = matter(rawArticleContent);
    const [htmlContent, err] = await mdToHtml(content);
    if (err) {
        throw err;
    }
    return {
        date: new Date(data.date),
        title: data.title,
        content: htmlContent,
        thumbnail: data.thumbnail,
        formattedDate: formatDate(new Date(data.date)),
    };
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
                    formattedDate: formatDate(new Date(data.date)),
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
