<script lang="ts">
    import {onMount} from 'svelte';

    export let amount = 5;
    let skyDiv: HTMLDivElement;
    let canvas: HTMLCanvasElement;

    function lerp(a: number, b: number, alpha: number) {
        return a * (1 - alpha) + b * alpha;
    }

    function random(max: number, min: number) {
        return Math.random() * (max - min) + min;
    }

    function createCloud() {
        return new Path2D(
            'M25.4925 40.948C20.7922 47.6814 13.9248 51.5897 3.58059 53.0271C1.00339 53.3852 -0.104444 56.337 2.11014 57.7029C41.8405 82.2085 196.904 77.7463 233.529 59.644C235.926 58.4594 234.912 55.8875 232.239 55.8829C222.933 55.8667 208.769 53.3056 195.312 34.4965C177.566 9.69344 159.31 20.1937 152.4 28.5442C134.079 -11.402 118.076 -1.05034 108.388 11.4497C86.7236 -5.92527 70.4446 11.4377 63.4817 24.3397C48.0219 9.76202 32.5608 30.8222 25.4925 40.948Z',
        );
    }

    function handleResize() {
        canvas.width = skyDiv.clientWidth;
        canvas.height = skyDiv.clientHeight;
    }

    const speed = 0.1;
    const padding = 50;
    const cloudWidth = 235;
    const cloudHeight = 73;

    onMount(() => {
        let prev = 0;

        handleResize();

        const ctx = canvas.getContext('2d')!;
        const clouds = new Array(amount).fill(0).map((_, i) => {
            const scale = random(0.5, 1.5);
            const width = scale * cloudWidth;
            const direction = i % 2 === 0 ? 1 : -1;

            return {
                x: random(0, 1),
                y: i / amount,
                width,
                scale,
                direction,
            };
        });

        let animationFrameId = requestAnimationFrame(draw);

        function draw(now: number) {
            const dt = (now - prev) / 1000;
            prev = now;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.save();
            for (const cloud of clouds) {
                const {scale, direction} = cloud;
                const ratio = canvas.height / canvas.width;
                const halfWidth = (scale * cloudWidth) / 2;
                const halfHeight = (scale * cloudHeight) / 2;

                cloud.x += dt * speed * ratio * direction;
                if (cloud.x > 1) cloud.x = 0;
                else if (cloud.x < 0) cloud.x = 1;

                ctx.setTransform(1, 0, 0, 1, 0, 0);
                ctx.translate(-halfWidth, -halfHeight);
                ctx.translate(
                    lerp(-padding - halfWidth, canvas.width + halfWidth + padding, cloud.x),
                    lerp(-padding - halfHeight, canvas.height + halfHeight + padding, cloud.y),
                );
                ctx.fillStyle = `rgba(255, 255, 255, 0.2)`;
                ctx.scale(scale, scale);
                ctx.fill(createCloud());
            }
            ctx.restore();
            animationFrameId = requestAnimationFrame(draw);
        }

        return () => cancelAnimationFrame(animationFrameId);
    });
</script>

<svelte:window on:resize={handleResize} />

<div id="sky" bind:this={skyDiv}>
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    #sky {
        position: absolute;
        top: 2rem;
        left: 0;
        right: 0;
        bottom: 2rem;
        overflow: hidden;
    }
    canvas {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
</style>
