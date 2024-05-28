<script lang="ts">
    export let y = 0;
    export let direction = 1;
    export let size = 1;
</script>

<svg style:--y="{y}vh" style:--size={size} style:--dir={direction} width="235" height="75" viewBox="0 0 235 75" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M25.4925 40.948C20.7922 47.6814 13.9248 51.5897 3.58059 53.0271C1.00339 53.3852 -0.104444 56.337 2.11014 57.7029C41.8405 82.2085 196.904 77.7463 233.529 59.644C235.926 58.4594 234.912 55.8875 232.239 55.8829C222.933 55.8667 208.769 53.3056 195.312 34.4965C177.566 9.69344 159.31 20.1937 152.4 28.5442C134.079 -11.402 118.076 -1.05034 108.388 11.4497C86.7236 -5.92527 70.4446 11.4377 63.4817 24.3397C48.0219 9.76202 32.5608 30.8222 25.4925 40.948Z"
        fill="white"
        fill-opacity="0.2"
    />
</svg>

<style>
    svg {
        position: absolute;
        top: var(--y);
        scale: var(--size);
        animation: calc(var(--size) * 50s) move linear infinite;
    }
    @keyframes move {
        from {
            translate: calc((50vw + 50%) * var(--dir)) 0;
        }
        to {
            translate: calc(-1 * (50vw + 50%) * var(--dir)) 0;
        }
    }
</style>
