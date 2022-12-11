<script>
    export let svg; // required parameter
    export let height;  // optional parameter

    let elHeight;

    $: if (height) {
        elHeight = height;
    }
</script>


<div class="relative flex-grow w-full" style="height: {elHeight}">
    <img class="absolute h-full w-full object-fill" src={svg}/>
</div>