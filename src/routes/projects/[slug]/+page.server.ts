import {error} from '@sveltejs/kit';
import {projects} from '$lib/content';

export const prerender = true;

export function load({params}) {
    const project = projects.find((project) => project.slug === params.slug);
    if (!project) {
        throw error(404, 'not found');
    }

    return {project};
}
