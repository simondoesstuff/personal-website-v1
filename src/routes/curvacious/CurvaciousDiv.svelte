<script>
    export let svg; // required parameter
    export let height;  // optional parameter

    let elHeight;

    $: if (height) {
        elHeight = height;
    }

    let img;
    let innerWidth;

    $: if (innerWidth && img) {
        svg.setAttribute('width', innerWidth);
    }
</script>

<svelte:window bind:innerWidth></svelte:window>


<div class="relative flex-grow w-full" style="height: {elHeight}">
<!--    <img bind:this={img} class="absolute h-full w-full object-fill" src={svg}/>-->
    <slot/>
</div>