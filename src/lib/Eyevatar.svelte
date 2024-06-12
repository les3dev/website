<script lang="ts">
    export let src = '';
    export let left: {x: number; y: number};
    export let right: {x: number; y: number};
    export let bg: `var(--${string})`;
    export let name = '';

    let leftOffset = {x: 0, y: 0};
    let rightOffset = {x: 0, y: 0};

    function moveToward(source: {x: number; y: number}, target: {x: number; y: number}, distance = 5) {
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const dot = Math.sqrt(dx * dx + dy * dy);
        const x = dot === 0 ? 0 : (dx / dot) * Math.min(distance, dot);
        const y = dot === 0 ? 0 : (dy / dot) * Math.min(distance, dot);

        return {
            x,
            y,
        };
    }

    function movePupil(event: MouseEvent & {currentTarget: HTMLDivElement}) {
        const wrapperRect = event.currentTarget.getBoundingClientRect();
        const target = {x: event.clientX, y: event.clientY};
        leftOffset = moveToward(
            {
                x: wrapperRect.left + left.x + 10,
                y: wrapperRect.top + left.y + 10,
            },
            target,
        );
        rightOffset = moveToward(
            {
                x: wrapperRect.left + right.x + 10,
                y: wrapperRect.top + right.y + 10,
            },
            target,
        );
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="wrapper" style:--color-bg={bg} on:mousemove={movePupil}>
    <img {src} alt="" style:--color-bg={bg} style:view-transition-name={name} />
    <div class="left eye" style:--x="{left.x}px" style:--y="{left.y}px">
        <div class="pupil" style:--x="{leftOffset.x}px" style:--y="{leftOffset.y}px"></div>
    </div>
    <div class="right eye" style:--x="{right.x}px" style:--y="{right.y}px">
        <div class="pupil" style:--x="{rightOffset.x}px" style:--y="{rightOffset.y}px"></div>
    </div>
</div>

<style>
    .wrapper {
        position: relative;
        max-width: 13rem;
        max-height: 13rem;
        background-color: var(--color-bg);
        border-radius: 50%;
    }

    .wrapper:hover {
        animation: rainbow 0.5s infinite linear;
    }

    @keyframes rainbow {
        0% {
            background-color: var(--color-indigo);
        }
        20% {
            background-color: var(--color-cyan);
        }
        40% {
            background-color: var(--color-lime);
        }
        60% {
            background-color: var(--color-yellow);
        }
        80% {
            background-color: var(--color-pink);
        }
        100% {
            background-color: var(--color-indigo);
        }
    }

    .eye {
        scale: 0;
        position: absolute;
        top: var(--y);
        left: var(--x);
        background-color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid var(--color-black);
        transition: all 0.2s ease-out;
    }
    .wrapper:hover .eye {
        scale: 1;
    }
    .pupil {
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        top: calc(50% - 2px + var(--y));
        left: calc(50% - 2px + var(--x));
        transition: all 0.05s;
        background-color: var(--color-black);
    }
    img {
        width: 100%;
        border-radius: 50%;
        background-color: var(--color-bg);
        border: 0.5rem solid var(--color-white);
    }
</style>
