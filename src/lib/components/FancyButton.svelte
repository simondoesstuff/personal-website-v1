<script>
    export let link;
</script>

<button class="">
    <a
      class="block rounded font-mono border p-2.5 shadow transition-transform duration-[250ms] text-scooter-400 border-scooter-400 hover:scale-110 hover:brightness-125 hover:bg-ebony-clay-900"
      href={link}
    >
        <slot/>
    </a>
</button>