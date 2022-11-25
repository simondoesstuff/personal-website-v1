<script>
    import hamburgerSvg from '../hamburger.svg';
    import closeSvg from '../close.svg';
    import { fly } from '$lib/scripts/flyTransition';
    import { fade } from 'svelte/transition';
    import Spacer from "$lib/components/Spacer.svelte";

    export let content;

    let open = false;
    const toggleMenu = (key) => {
        console.log(key);
        open = !open;
    }
</script>

<!-- todo make sure to clip x overflow because the fly transition expands past screen -->

{#if open}

    <!--        Sidebar     -->
    <div class="absolute h-[100vh] w-[100vw]">
        <div class="absolute h-full w-full bg-black opacity-50" transition:fade on:click={toggleMenu}></div>
        <div class="absolute z-10 right-0 h-full w-[70%] bg-scooter-50 flex flex-col items-end" transition:fly={{x: '100%', duration: 400}}>
            <button class="w-20 p-4" on:click={toggleMenu} in:fade={{duration: 500}}>
                <img src={closeSvg} alt="Close Menu"/>
            </button>
            <div class="flex h-full w-full flex-col justify-center gap-12 items-end p-8">
                {#each content as link}
                    <button on:click={toggleMenu}>
                        <a class="text-2xl text-black font-quicksand" href={`#${link}`}>{link}</a>
                    </button>
                {/each}
            </div>
            <Spacer class="h-20" />
        </div>
    </div>

{:else}

    <button class="absolute right-0 w-20 p-4 opacity-60 hover:opacity-100" on:click={toggleMenu}>
        <img class="invert" src={hamburgerSvg} alt="Menu"/>
    </button>

{/if}