<script>
    import Spacer from "$lib/components/Spacer.svelte";

    export let progress = .5;   // number between 0 and 1
    export let title;
    export let detail;

    let clazz;
    export {clazz as class}

    let innerBarElRef;
    $: if (innerBarElRef) {
        innerBarElRef.style.width = `${progress * 100}%`;
    }
</script>



<div>
    <div class="mx-4 flex justify-between">
        <h3 class="text-2xl text-ebony-clay-50">{title}</h3>
        <p class="text-xl">{detail}</p>
    </div>

    <Spacer class="w-[1rem]"/>

    <div class="w-full rounded-full bg-ebony-clay-600">
        <div class={`h-2 rounded-full ${clazz}`} bind:this={innerBarElRef}>
            <slot/>
        </div>
    </div>
</div>