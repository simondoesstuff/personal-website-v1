<script>
    import Logo from "$lib/Logo.svelte";
    import Spacer from "$lib/Spacer.svelte";

    const content = [ "About", "Projects", "Experience", "Contact" ] ;
</script>

<!--    todo reomve neumorphism, it requires a specific BG       -->
<section class="flex flex-col justify-between h-[calc(100vh-2rem)] bg-sidebar sticky top-2 neumorphism m-2">
    <div class="grid place-items-center p-7">
        <Logo />
    </div>
    <div class="flex flex-col justify-center h-full">
        <div class="flex flex-col justify-between relative -top-7">
            <span class="w-full h-[.2rem] bg-primary-bg"></span>
            {#each content as item}
                <a href="#{item}"><h6 class="w-full p-7 text-primary bg-sidebar font-medium">{item}</h6></a>
                <!--            dividers        -->
                <span class="w-full h-[.2rem] bg-primary-bg"></span>
            {/each}
        </div>
    </div>
</section>