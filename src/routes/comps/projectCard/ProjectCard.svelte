<script>
    import Spacer from "$lib/components/Spacer.svelte";
    import FancyButton from "../FancyButton.svelte";
    import Title from "./Title.svelte";

    export let item;
    export let index;

    $: i = index;

    let innerWidth;
</script>


<svelte:window bind:innerWidth></svelte:window>


{#if innerWidth > 960}



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
            <Title {item}/>
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
        <img class="max-w-[40%] rounded-xl border-4 border-ebony-clay-600 shadow-2xl my-auto" src={item.image} />
    </div>



{:else }



    <div class="container-resp">
        <a href={item.gotoLink}>
            <Title {item} centered={true}/>
        </a>
        <div class="flex justify-center flex-wrap">
<!--            Techs       -->
            {#each item.techs as tech}
                <p class="px-2 font-mono text-ebony-clay-500 whitespace-nowrap">{tech}</p>
            {/each}
        </div>
        <div class="m-5">
<!--            Date    -->
            <h6 class="text-ebony-clay-100 text-center m-2"> {item.date} </h6>
<!--            Image       -->
            <a href={item.gotoLink}>
                <img class="rounded-xl border-2 border-ebony-clay-700 shadow-2xl mx-auto" src={item.image} />
            </a>
        </div>
        <p class="p-2 text-center">{item.description}</p>
    </div>



{/if}
