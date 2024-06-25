import {get, writable} from 'svelte/store';
import type {Action} from 'svelte/action';

export const navigationStack = writable<string[]>([]);

/**
 * Action to perform a history.back when possible to preserve scroll of previous page.
 * This should be used on a <a> element
 * @param element
 * @returns
 */
export const magicBack: Action<HTMLAnchorElement> = (element) => {
    function click(event: Event) {
        const paths = get(navigationStack);
        if (paths[paths.length - 1] === '/') {
            event.preventDefault();
            window.history.back();
        }
    }
    element.addEventListener('click', click);

    return {
        destroy() {
            element.removeEventListener('click', click);
        },
    };
};
