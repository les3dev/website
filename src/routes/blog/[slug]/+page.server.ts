import {getArticle, getArticles} from '$lib/blog/blog.js';
import {error} from '@sveltejs/kit';

export async function entries() {
    return (await getArticles()).map((a) => ({slug: a.slug}));
}

export async function load({params}) {
    const article = await getArticle(params.slug);
    if (!article) {
        throw error(404, 'Article non trouvé');
    }
    return article;
}
