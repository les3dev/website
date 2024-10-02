import {unified} from 'unified';
import rehypeSlug from 'rehype-slug';
import remarkParse from 'remark-parse';
import rehypeShiki from '@shikijs/rehype';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const parser = unified()
    .use(remarkParse)
    .use(remarkUnwrapImages)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, {behavior: 'wrap'})
    .use(rehypeExternalLinks, {rel: ['nofollow'], target: '_blank'})
    .use(rehypeShiki, {
        themes: {
            light: 'light-plus',
            dark: 'dark-plus',
        },
        inline: 'tailing-curly-colon',
    })
    .use(rehypeStringify, {allowDangerousHtml: true});

export async function mdToHtml(markdown: string) {
    return (await parser.process(markdown)).toString();
}
