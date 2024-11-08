import {error} from '@sveltejs/kit';
import {studies} from '$lib/content';

export const prerender = true;

export function load({params}) {
    const study = studies.find((study) => study.slug === params.slug);
    if (!study) {
        throw error(404, 'not found');
    }

    return {study};
}
