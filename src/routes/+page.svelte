<script>
    import Logo from "$lib/Logo.svelte";

    const pages = ["About", "Experience", "Work", "Contact"];
</script>

<div class="flex">


<!--    Header  -->
    <section class="h-[100vh] p-5 bg-sidebar">
        <div class="flex flex-col h-full justify-between">
            <Logo />
            <div class="flex flex-col justify-between">
                {#each pages as x}
                    <a href="#{x}">
                        <h6 class="text-primary my-5">{x}</h6>
                    </a>
                {/each}
            </div>
            <div class="h-12"></div> <!-- Spacer -->
        </div>
    </section>

    <main class="p-5">
        <section class="w-[30rem] py-2.5 px-0">
            <h3 class="mb-2">Hello, I'm</h3>
            <h1 class="mb-2">Simon Walker</h1>
            <h2 class="mb-2">Software Developer</h2>
            <p class="w-[75%]">
                I'm a software engineer based in the UK. I'm currently working at
                <a href="https://www.oxforduniversitypress.com/">Oxford University Press</a>
                as a Senior Software Engineer. I'm also a co-founder of the <a href="https://www.oxfordhack.org/">Oxford
                Hack</a> hackathon.
                I have a passion for building things and learning new things.
            </p>
        </section>
    </main>


</div>