import matter from 'gray-matter';
import {unified} from 'unified';
import rehypeSlug from 'rehype-slug';
import remarkParse from 'remark-parse';
import rehypeShiki from '@shikijs/rehype';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/**
 * Setup unified markdown parser with some useful plugins (syntax highlighting, slugs, etc.)
 */
const parser = unified()
    .use(remarkParse)
    .use(remarkUnwrapImages)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {behavior: 'wrap'})
    .use(rehypeExternalLinks, {rel: ['nofollow'], target: '_blank'})
    .use(rehypeShiki, {
        theme: 'dark-plus',
        themes: {
            light: 'light-plus',
            dark: 'dark-plus',
        },
        inline: 'tailing-curly-colon',
    })
    .use(rehypeStringify, {allowDangerousHtml: true});

interface Article {
    date: Date;
    slug: string;
    title: string;
    content: string;
    thumbnail: string;
    formattedDate: string;
}

const articles = import.meta.glob('./content/*.md', {as: 'raw', eager: true});

export async function getArticle(slug: string) {
    return (await getArticles()).find((article) => article.slug === slug);
}

export async function getArticles() {
    return Object.entries(articles).reduce(
        async (acc, [path, fileContent]) => {
            const {data, content} = matter(fileContent);
            if (!data.published) {
                return acc;
            }
            return [
                ...(await acc),
                {
                    date: new Date(data.date),
                    slug: path.substring('./content/'.length, path.length - 3),
                    title: data.title,
                    content: (await parser.process(content)).toString(),
                    thumbnail: data.thumbnail,
                    formattedDate: formatDate(data.date),
                },
            ];
        },
        Promise.resolve([] as Article[]),
    );
}

function formatDate(date: Date) {
    return `Le ${date.getDate()} ${
        ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'][date.getMonth()]
    } ${date.getFullYear()}`;
}
