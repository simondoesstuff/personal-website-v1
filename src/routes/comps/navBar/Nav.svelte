<script lang="ts">
    import SideNav from "./variants/SideNav.svelte";
    import TopNav from "./variants/TopNav.svelte";

    export let orientation: "horizontal" | "vertical";
    const content = ["About", "Projects", "Skills", "Contact"];
</script>



<header class="sticky top-0 left-0 z-30">
    {#if orientation === 'vertical'}
        <SideNav {content}/>
    {:else}
        <TopNav {content}/>
    {/if}
</header>