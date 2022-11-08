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
                <p class="text-xl text-primary">Resume</p>
            </FancyButton>
        </div>
    </section>


    <section id="Projects">
<!--            Header      -->
        <SectionTitle title="A few things I've built"/>
<!--            Cards       -->
        {#each ProjectsJSON as item, i}
            <div class="m-10">
                <ProjectCard item={item} index={i} />
            </div>
        {/each}
    </section>


    <Spacer size="10rem"/>


    <section id="Skills">
<!--        Header      -->
        <SectionTitle title="What I can do"/>
            <div class="flex gap-10 container-resp">
                <div class="py-10 w-[40%] flex flex-col justify-center">
                    <!--        Bars     -->
                    <div>
                        <ProgressBar
                          title="Front End"
                          detail="Since 2019"
                          progress={.82}
                          class="bg-accent-red"
                        />
                        <Spacer size="3rem"/>
                        <ProgressBar
                          title="Back End"
                          detail="Since 2021"
                          progress={.4}
                          class="bg-accent-yellow"
                        />
                        <Spacer size="3rem"/>
                        <ProgressBar
                          title="Graphic Design"
                          detail="Since 2016"
                          progress={.93}
                          class="bg-accent-green"
                        />
                    </div>
    <!--                    Bottom paragraph    -->
                    <Spacer size="5rem"/>
                    <p class="text-center text-xl mx-4">
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


    <section id="Contact" class="h-[70vh] flex flex-col justify-center container-resp text-center m-10">
        <h2 class="text-white">Let's get in touch</h2>
        <Spacer size="3rem"/>
        <p class="p-3 font-mono text-2xl text-primary extraLetterSpacing">simon@simonwalker.tech</p>
        <p class="p-3 font-mono text-2xl text-primary extraLetterSpacing">(970) 581 5899</p>
    </section>


</main>