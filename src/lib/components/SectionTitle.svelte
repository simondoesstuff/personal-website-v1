<script>
    import Spacer from "$lib/components/Spacer.svelte";

    export let title;
</script>



<div class="flex justify-between align-middle container-resp">
    <div class="grid place-items-center">
        <h3 class="text-white">{title}</h3>
    </div>
    <div class="w-[60%] grid place-items-center">
        <div class="bg-bg-light h-0.5 w-full"></div>
    </div>
    <Spacer size="5rem"/>
</div>