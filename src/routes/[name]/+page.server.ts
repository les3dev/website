import {error} from '@sveltejs/kit';
import {developers} from '$lib/developers.js';

export function load({params}) {
    const developer = developers[params.name];
    if (!developer) {
        throw error(404, 'not found');
    }

    return {
        developer,
    };
}
