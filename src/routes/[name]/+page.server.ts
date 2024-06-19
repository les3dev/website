import {error} from '@sveltejs/kit';
import {profiles} from '$lib/content';

export const prerender = true;

export function load({params}) {
    const profile = profiles[params.name];
    if (!profile) {
        throw error(404, 'not found');
    }

    return {
        profile,
    };
}
