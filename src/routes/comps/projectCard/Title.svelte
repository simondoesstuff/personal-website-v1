<script>
    export let item;
    export let centered;
</script>


<!--            Title       -->
<div class="flex align-middle" class:justify-center={centered}>
    <h3 class="p-2 text-ebony-clay-50 font-quicksand text-center">
        {item.title}
    </h3>
    <a href={item.github} class="my-auto">
        <img class="mx-5 w-9 invert" src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
    </a>
</div>