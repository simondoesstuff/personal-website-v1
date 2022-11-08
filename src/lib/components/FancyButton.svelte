<script>
    export let link;
</script>

<button class="">
    <a
      class="block rounded font-mono border p-2.5 shadow transition-transform duration-[250ms] text-primary-light border-primary-light hover:scale-110 hover:brightness-125 hover:bg-bg-dark"
      href={link}
    >
        <slot/>
    </a>
</button>