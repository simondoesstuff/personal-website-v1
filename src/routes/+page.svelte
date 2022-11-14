<script lang="ts">
    import Spacer from "$lib/components/Spacer.svelte";
    import ProjectCard from "$lib/components/ProjectCard.svelte";
    import SectionTitle from "$lib/components/SectionTitle.svelte";
    import TagCloud from "$lib/dependencies/TagCloud.svelte";
    import ProgressBar from "$lib/components/ProgressBar.svelte";
    import CurvaciousDiv from "$lib/curvacious/CurvaciousDiv.svelte";

    import ProjectsJSON from "$lib/JSON/Projects.json";
    import TagCloudJSON from "$lib/JSON/TagCloudLabels.json";

    import titleBlob from "$lib/curvacious/titleBlob.svg";
    import titleBottomSvg from "$lib/curvacious/title-bottom.svg";
    import titleClaytonTopSvg from "$lib/curvacious/titleClayton-top.svg";
    import claytonBlackBottomSvg from "$lib/curvacious/claytonBlack-bottom.svg";
    import claytonBlackTopSvg from "$lib/curvacious/claytonBlack-top.svg";
    import blackGulfBottomSvg from "$lib/curvacious/blackGulf-bottom.svg";
    import blackGulfTopSvg from "$lib/curvacious/blackGulf-top.svg";
    import WavyText from "$lib/components/WavyText.svelte";
    import FancyButton from "$lib/components/FancyButton.svelte";
</script>


<main class="w-full">


    <section id="About" class="h-[100vh] flex flex-col bg-gulf-blue">
        <div class="flex-grow"></div>   <!-- Spacer that keeps the main stuff centered -->
        <div class="flex-shrink container-resp">
            <h3 class="-translate-x-5 -rotate-2 text-shimmer">Hello, I'm</h3>
            <Spacer size="1.5rem"/>
            <div class="relative z-10 flex gap-9 p-5">
                <WavyText class="text-8xl font-bold text-white font-quicksand" text="Simon"/>
                <WavyText class="text-8xl font-bold text-white font-quicksand" text="Walker"/>
                <!-- Photo Blob -->
                <div class="absolute -z-10 h-full w-[50%] aspect-auto -right-28 flex flex-col justify-center">
                    <div class="grid h-full w-full place-items-center">
                        <img src={titleBlob} class="absolute rotate-[210deg]"/>
                        <img src='/SimonBrickCircle.png' class="absolute z-10 w-[58%] border-black border-[6px] rounded-full translate-x-5"/>
                    </div>
                </div>
            </div>
            <Spacer size="1.5rem"/>
            <p class="w-[75%] text-2xl text-white opacity-70">
                I'm a software engineer based in the UK.
            </p>
            <Spacer size="1.5rem"/>
<!--            Resume button      TODO add link -->
            <div class="py-3 inline-block">
                <a href="google.com" class="inline-block rounded-full border p-4 text-xl font-bold transition-transform font-quicksand text-shimmer border-shimmer hover:bg-ebony-clay hover:scale-110 hover:text-white">
                    See Resume
                </a>
            </div>
        </div>
        <CurvaciousDiv svg={titleBottomSvg}/>
    </section>


    <section id="Projects" class="bg-ebony-clay">
        <CurvaciousDiv height="10rem" svg={titleClaytonTopSvg}/>
<!--            Header      -->
        <SectionTitle title="A few things I've built"/>
<!--            Cards       -->
        {#each ProjectsJSON as item, i}
            <div class="p-10">
                <ProjectCard item={item} index={i} />
            </div>
        {/each}
    </section>


    <section id="Skills" class="bg-black">
        <CurvaciousDiv height="10rem" svg={claytonBlackTopSvg}/>
<!--        Header      -->
        <SectionTitle title="What I can do"/>
            <div class="flex gap-10 container-resp">
                <div class="w-[40%] flex flex-col justify-around py-10 gap-10">
                    <!--        Bars     -->
                    <div>
                        <ProgressBar
                          title="Front End"
                          detail="Since 2019"
                          progress={.82}
                          class="bg-maroon-flush"
                        />
                        <Spacer size="3rem"/>
                        <ProgressBar
                          title="Back End"
                          detail="Since 2021"
                          progress={.4}
                          class="bg-yammer"
                        />
                        <Spacer size="3rem"/>
                        <ProgressBar
                          title="Graphic Design"
                          detail="Since 2016"
                          progress={.93}
                          class="bg-shimmer"
                        />
                    </div>
    <!--                    Bottom paragraph    -->
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


    <section id="Contact" class="h-[70vh] flex flex-col justify-center bg-gulf-blue">
        <CurvaciousDiv height="10rem" svg={blackGulfTopSvg}/>
        <div class="text-center container-resp">
            <h2 class="text-ebony-clay-50 font-quicksand">Let's get in touch</h2>
            <Spacer size="3rem"/>
            <p class="p-3 text-2xl text-scooter-400 extraLetterSpacing">simon@simonwalker.tech</p>
            <p class="p-3 text-2xl text-scooter-400 extraLetterSpacing">(970) 581 5899</p>
        </div>
        <Spacer size="15rem"/>
    </section>


</main>