<script>
    export let content;
</script>


<div class="flex flex-col justify-between h-[100vh] from-[#ffffff13] to-transparent bg-gradient-to-l absolute flex-shrink opacity-60 hover:opacity-100 transition-opacity">
    <!--    Nav Buttons     -->
    <div class="flex h-full flex-col justify-center">
        <div class="flex flex-col justify-between">
            {#each content as item}
                <a href="#{item}">
                    <h6
                      class="my-5 rounded p-3 py-5 pl-10 text-right text-white transition-colors font-quicksand extraLetterSpacing hover:bg-scooter-400 hover:text-black"
                    >{item}</h6>
                </a>
            {/each}
        </div>
    </div>
</div>