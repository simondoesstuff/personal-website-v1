<script lang="ts">
    import Sidebar from "$lib/Sidebar.svelte";
    import Spacer from "$lib/Spacer.svelte";
    import ProjectCard from "$lib/ProjectCard.svelte";
    import FancyButton from "$lib/FancyButton.svelte";
    import projects from "$lib/projects.json";
</script>

<div class="flex w-full">
    <!--    Sidebar  -->
    <Sidebar />

    <main class="w-full">


        <section id="About" class="full-page-section container-resp">
            <h3 class="-translate-x-5 -rotate-2 text-primary">Hello, I'm</h3>
            <Spacer size="1.5rem"/>
            <h1>Simon Walker</h1>
            <Spacer size="1.5rem"/>
            <p class="w-[75%] text-xl">
                I'm a software engineer based in the UK. I'm currently working at
                <a href="https://www.oxforduniversitypress.com/">Oxford University Press</a>
                as a Senior Software Engineer. I'm also a co-founder of the <a href="https://www.oxfordhack.org/">Oxford
                Hack</a> hackathon.
                I have a passion for building things and learning new things.
            </p>
            <Spacer size="1.5rem"/>
            <div class="relative left-[25%]">
                <FancyButton link="https://google.com"> <!-- todo change URL to resume download -->
                    <p class="text-primary text-xl">Resume</p>
                </FancyButton>
            </div>
        </section>


        <section id="Projects">
<!--            Header      -->
            <div class="flex align-middle container-resp justify-between">
                <div class="grid place-items-center">
                    <h3 class="text-white">A few things I've built</h3>
                </div>
                <div class="w-[40%] grid place-items-center">
                    <div class="bg-bg-light h-0.5 w-full"></div>
                </div>
                <Spacer size="5rem"/>
            </div>
<!--            Cards       -->
            {#each projects as item, i}
                <div class="m-10">
                    <ProjectCard item={item} index={i} />
                </div>
            {/each}
        </section>


        <Spacer size="50vh" />


    </main>
</div>