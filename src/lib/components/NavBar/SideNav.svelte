<script>
    const content = ["About", "Projects", "Skills", "Contact"];
</script>

<!--        Sidebar style nav       -->
<div class="sticky top-0 left-0 z-20 flex">
    <header
      class="flex flex-col justify-between h-[100vh] from-[#ffffff13] to-transparent bg-gradient-to-l absolute flex-shrink opacity-60 hover:opacity-100 transition-opacity">
        <!--    Logo        -->
<!--        <div class="absolute grid place-items-center p-5">-->
<!--            <div class="aspect-square w-full">-->
<!--                <img class="w-full h-full object-fill" src="/logoSymbolic.svg" alt="Logo">-->
<!--            </div>-->
<!--        </div>-->
        <!--    Nav Buttons     -->
        <div class="flex h-full flex-col justify-center">
            <div class="flex flex-col justify-between">
                <!--                <span class="w-full h-[.2rem] bg-ebony-clay"></span>   &lt;!&ndash;  Divider line  &ndash;&gt;-->
                {#each content as item}
                    <a href="#{item}">
                        <h6
                          class="my-5 pl-10 p-3 py-5 rounded text-right font-quicksand extraLetterSpacing text-scooter hover:text-black hover:bg-scooter-400 transition-colors"
                        >{item}</h6>
                    </a>
                    <!--                    <span class="w-full h-[.2rem] bg-ebony-clay"></span>    &lt;!&ndash;  Divider line  &ndash;&gt;-->
                {/each}
            </div>
        </div>
    </header>
</div>