<script>
  import "../app.css";
  import TopNav from "$lib/components/NavBar/TopNav.svelte";
  import SideNav from "$lib/components/NavBar/SideNav.svelte";

  let innerWidth;
  $: small = innerWidth <= 640; // todo may want to adjust that number
</script>

<svelte:window bind:innerWidth />


{#if small}
    <TopNav />
    <slot />
{:else}
    <div class="flex w-full">
        <SideNav />
        <slot />
    </div>
{/if}
