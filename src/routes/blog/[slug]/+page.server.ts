import {getArticle, getArticles} from '$lib/blog/blog.js';
import {error} from '@sveltejs/kit';

export function entries() {
    return getArticles().map((a) => ({slug: a.slug}));
}

export function load({params}) {
    const article = getArticle(params.slug);
    if (!article) {
        throw error(404, 'Article non trouvé');
    }
    return article;
}
