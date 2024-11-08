import {getArticles} from '$lib/blog/blog';

export async function load() {
    const articles = await getArticles();
    return {
        articles,
    };
}
