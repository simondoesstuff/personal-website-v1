<script>
    import Spacer from "$lib/components/Spacer.svelte";
    import FancyButton from "./FancyButton.svelte";

    export let item;
    export let index;

    $: i = index;
</script>


<div
  class="flex container-resp"
  class:flex-row-reverse={i % 2 === 1}
>
    <div>
        <h6
          class="-translate-x-5 p-2 text-scooter"
          class:relative={i % 2 === 1}
          class:-rotate-2={i % 2 === 0}
          class:rotate-2={i % 2 === 1}
          class:text-right={i % 2 === 1}
        >
            {item.date}
        </h6>
        <!--            Title       -->
        <div class="flex align-middle">
            <h3 class="p-2 text-ebony-clay-50 font-quicksand">{item.title}</h3>
            <a href={item.github}>
                <img class="mx-5 w-10 invert" src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
            </a>
        </div>
        <!--        Details     -->
        <p class="p-2">{item.description}</p>
        <Spacer class="w-[.75rem]" />
        {#each item.techs as tech}
            <span class="p-2 font-mono text-ebony-clay-500">{tech}</span>
        {/each}
        {#if item.gotoLink}
            <div class="m-5">
                <FancyButton link={item.gotoLink}>
                    See for yourself
                </FancyButton>
            </div>
        {/if}
    </div>
    <!--        Image       -->
    <Spacer class="w-[10rem]" />
    <img class="max-w-[40%] rounded-xl border-4 border-ebony-clay-600 shadow-2xl" src={item.image} />
</div>
