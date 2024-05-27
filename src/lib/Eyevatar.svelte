<script lang="ts">
    export let src = '';
    export let left: {x: number; y: number};
    export let right: {x: number; y: number};

    let wrapperEl: HTMLDivElement | null = null;
    let wrapperRect: DOMRect | null = null;
    $: if (wrapperEl) {
        wrapperRect = wrapperEl.getBoundingClientRect();
    }
    function movePupil(event: MouseEvent) {
        if (!wrapperRect) {
            return;
        }
        const center = {
            x: wrapperRect.left + left.y + 10,
            y: wrapperRect.top + left.x,
        };
        // console.log(center, {x: event.clientX, y: event.clientY});
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div bind:this={wrapperEl} class="wrapper" on:mousemove={movePupil}>
    <img {src} alt="" />
    <div class="left eye" style:--x="{left.x}px" style:--y="{left.y}px"><div class="pupil"></div></div>
    <div class="right eye" style:--x="{right.x}px" style:--y="{right.y}px"><div class="pupil"></div></div>
</div>

<style>
    .wrapper {
        position: relative;
        max-width: 13rem;
    }

    .eye {
        display: none;
        position: absolute;
        top: var(--y);
        left: var(--x);
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 0.1rem solid var(--color-black);
    }
    /* .wrapper:hover .eye {
        display: block;
    } */
    .pupil {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        top: calc(50% - 2px);
        left: calc(50% - 2px);
        background-color: var(--color-black);
    }
    img {
        width: 100%;
        border-radius: 50%;
        border: 0.5rem solid var(--color-white);
    }
</style>
