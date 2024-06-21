<script lang="ts">
    export let logos: string[];
</script>

<div class="logos">
    <div class="logos-slide">
        {#each logos as logo}
            <img src="/images/clients/{logo}.svg" alt={logo} />
        {/each}
    </div>
    <div class="logos-slide">
        {#each logos as logo}
            <img src="/images/clients/{logo}.svg" alt={logo} />
        {/each}
    </div>
</div>

<style>
    @keyframes slide {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-100%);
        }
    }

    .logos {
        overflow: hidden;
        padding: 1rem 0 2rem 0;
        background: var(--color-black);
        white-space: nowrap;
        position: relative;
        display: flex;
        max-width: 65rem;
        margin: auto;
    }

    .logos::before,
    .logos::after {
        position: absolute;
        top: 0;
        width: 20%;
        height: 100%;
        content: '';
        z-index: 2;
    }

    .logos::before {
        left: 0;
        background: linear-gradient(to left, rgba(0, 0, 0, 0), var(--color-black));
    }

    .logos::after {
        right: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0), var(--color-black));
    }

    .logos-slide {
        display: flex;
        gap: 3rem;
        padding: 0 1.5rem;
        animation: 30s slide infinite linear;
    }
</style>
