<script lang="ts">
    import Spacer from "../lib/components/Spacer.svelte";
    import ProjectCard from "../lib/components/ProjectCard.svelte";
    import FancyButton from "../lib/components/FancyButton.svelte";
    import projects from "../lib/components/Projects.json";
    import SectionTitle from "../lib/components/SectionTitle.svelte";
    import TagCloud from "$lib/dependencies/TagCloud.svelte";

    const texts = ["JavaScript", "TypeScript", "React", "Svelte", "Node.js", "Express", "MongoDB", "SQL", "HTML", "CSS", "Sass", "Bootstrap", "Material UI", "Git", "GitHub", "GitLab", "Jest", "React Testing Library", "Cypress", "Jira", "Agile", "Scrum", "Kanban", "Trello", "Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe Premiere Pro", "Adobe After Effects", "Adobe Lightroom", "Adobe Audition", "Adobe Animate", "Adobe Spark", "Adobe Spark AR", "Adobe Spark Video", "Adobe Spark Post", "Adobe Spark Page"];
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
        {#each projects as item, i}
            <div class="m-10">
                <ProjectCard item={item} index={i} />
            </div>
        {/each}
    </section>


    <Spacer size="10rem"/>


    <section id="Skills">
<!--        Header      -->
        <SectionTitle title="Skills"/>
        <div class="container-resp">
            <!--        Bars + Sphere     -->
            <div class="flex">
                <p class="text-primary">
                    lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </p>
<!--                Tag sphere  -->
                <div class="w-[70%]">
                    <TagCloud textClass="tagCloudItems" {texts}/>
                </div>
                <div>

                </div>
            </div>
            <!--        Final paragraph     -->
            <Spacer size="3rem"/>
            <p class="text-red-400">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
        </div>
    </section>


    <section id="Contact" class="h-[70vh] flex flex-col justify-center container-resp text-center m-10">
        <h2 class="text-white">Let's get in touch</h2>
        <Spacer size="3rem"/>
        <p class="p-3 font-mono text-2xl text-primary extraLetterSpacing">simon@simonwalker.tech</p>
        <p class="p-3 font-mono text-2xl text-primary extraLetterSpacing">(970) 581 5899</p>
    </section>


</main>



<style>
    .tagCloudItems {
        @apply text-primary;
        @apply sm:text-[0.5rem];
        @apply md:text-xl;
        @apply lg:text-2xl;
    }
</style>