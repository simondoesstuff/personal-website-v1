<script>
    import Spacer from "$lib/components/Spacer.svelte";

    export let title;
</script>



<div class="flex justify-between align-middle container-resp">
    <div class="grid place-items-center">
        <h3 class="text-ebony-clay-50">{title}</h3>
    </div>
    <div class="w-[60%] grid place-items-center">
        <div class="bg-ebony-clay-600 h-0.5 w-full"></div>
    </div>
</div>