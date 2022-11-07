<script>
    const content = [ "About", "Projects", "Experience", "Contact" ] ;
</script>

<!--        Sidebar style nav       -->
<section class="flex flex-col justify-between h-[100vh] bg-bg-dark sticky top-0">
    <!--    Logo        -->
    <div class="grid place-items-center p-7">
        <div class="h-12 aspect-square w-full">
            <img src="./icon.png" alt="Logo">
        </div>
    </div>
    <!--    Nav Buttons     -->
    <div class="flex flex-col justify-center h-full">
        <div class="flex flex-col justify-between relative -top-7">
            <span class="w-full h-[.2rem] bg-primary-bg"></span>
            {#each content as item}
                <a href="#{item}"><h6 class="w-full p-7 text-primary bg-bg-dark font-medium">{item}</h6></a>
                <!--            dividers        -->
                <span class="w-full h-[.2rem] bg-primary-bg"></span>
            {/each}
        </div>
    </div>
</section>