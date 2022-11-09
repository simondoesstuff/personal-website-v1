<script lang="ts">
    import Spacer from "$lib/components/Spacer.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import FancyButton from "$lib/components/FancyButton.svelte";
    import ProjectsJSON from "$lib/JSON/Projects.json";
    import TagCloudJSON from "$lib/JSON/TagCloudLabels.json";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import TagCloud from "$lib/dependencies/TagCloud.svelte";
    import ProgressBar from "$lib/components/ProgressBar.svelte";
</script>


<main class="w-full">


    <section id="About" class="full-page-section bg-sienna">
        <div class="container-resp">
            <h3 class="-translate-x-5 -rotate-2 text-scooter">Hello, I'm</h3>
            <Spacer size="1.5rem"/>
            <h1>Simon Walker</h1>
            <Spacer size="1.5rem"/>
            <p class="w-[75%] text-2xl text-gray-300">
                I'm a software engineer based in the UK.
            </p>
            <Spacer size="1.5rem"/>
            <!--        todo move button to the nav     -->
            <!--        <div class="relative left-[25%]">-->
            <!--            <FancyButton link="https://google.com"> &lt;!&ndash; todo change URL to resume download &ndash;&gt;-->
            <!--                <p class="text-xl text-scooter">Resume</p>-->
            <!--            </FancyButton>-->
            <!--        </div>-->
        </div>
    </section>


    <section id="Projects" class="bg-ebony-clay">
<!--            Header      -->
        <SectionTitle title="A few things I've built"/>
<!--            Cards       -->
        {#each ProjectsJSON as item, i}
            <div class="m-10">
                <ProjectCard item={item} index={i} />
            </div>
        {/each}
    </section>


    <section id="Skills" class="bg-majorelle">
<!--        Header      -->
        <SectionTitle title="What I can do"/>
            <div class="flex gap-10 container-resp">
                <div class="w-[40%] flex flex-col justify-center">
                    <!--        Bars     -->
                    <div>
                        <ProgressBar
                          title="Front End"
                          detail="Since 2019"
                          progress={.82}
                          class="bg-skillbar-red"
                        />
                        <Spacer size="3rem"/>
                        <ProgressBar
                          title="Back End"
                          detail="Since 2021"
                          progress={.4}
                          class="bg-skillbar-yellow"
                        />
                        <Spacer size="3rem"/>
                        <ProgressBar
                          title="Graphic Design"
                          detail="Since 2016"
                          progress={.93}
                          class="bg-skillbar-green"
                        />
                    </div>
    <!--                    Bottom paragraph    -->
                    <Spacer size="5rem"/>
                    <p class="mx-4 text-center text-xl">
    <!--                        todo flesh out -->
                        Additionally familiar with xxxx, yyyyy, zeee, aaaa, bbbbbbb, cccc and dddddd.
                    </p>
                </div>
    <!--                Tag sphere  -->
                <div class="w-[60%]">
                    <TagCloud textClass="tagCloudItems" maxSpeed="slow" texts={TagCloudJSON}/>
                </div>
            </div>
    </section>


    <section id="Contact" class="h-[70vh] flex flex-col justify-center bg-brazil">
        <div class="container-resp text-center">
            <h2 class="text-ebony-clay-50">Let's get in touch</h2>
            <Spacer size="3rem"/>
            <p class="p-3 font-mono text-2xl text-scooter-400 extraLetterSpacing">simon@simonwalker.tech</p>
            <p class="p-3 font-mono text-2xl text-scooter-400 extraLetterSpacing">(970) 581 5899</p>
        </div>
    </section>


</main>