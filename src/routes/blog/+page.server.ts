import {getArticles} from '$lib/blog/blog';

export function load() {
    const articles = getArticles();
    return {
        articles,
    };
}
