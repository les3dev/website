import {getArticle, getArticles} from '$lib/blog/blog.js';

export function entries() {
    return getArticles().map((a) => ({slug: a.slug}));
}

export async function load({params}) {
    const article = await getArticle(params.slug);
    console.log(article);
    return article;
}
