<script lang="ts">
    import ProjectsJSON from "$lib/JSON/Projects.json";
    import TagCloudJSON from "$lib/JSON/TagCloudLabels.json";

    import titleBlob from "./curvacious/titleBlob.svg";
    import titleBottomSvg from "./curvacious/title-bottom.svg";
    import claytonBlackTopSvg from "./curvacious/claytonBlack-top.svg";
    import blackGulfTopSvg from "./curvacious/blackGulf-top.svg";

    import WavyText from "$lib/components/WavyText.svelte";
    import Spacer from "$lib/components/Spacer.svelte";
    import CurvaciousDiv from "./curvacious/CurvaciousDiv.svelte";
    import SectionTitle from "./comps/SectionTitle.svelte";
    import ProjectCard from "./comps/ProjectCard.svelte";
    import ProgressBar from "$lib/components/ProgressBar.svelte";
    import TagCloud from "$lib/dependencies/TagCloud.svelte";
</script>


<main class="w-full">


    <section id="About" class="h-[100vh] flex flex-col bg-gulf-blue">
        <div class="flex-grow"></div>   <!-- Spacer that keeps the main stuff centered -->
        <div class="flex-shrink container-resp">
            <h3 class="-translate-x-5 -rotate-2 text-shimmer">Hello, I'm</h3>
            <Spacer class="w-[1.5rem]"/>
            <div class="relative z-10 flex flex-col align-middle sm:flex-row sm:justify-start">
                <div class="flex gap-4 sm:gap-9 lg:p-5">
                    <WavyText class="text-7xl font-bold text-white font-quicksand sm:text-8xl" text="Simon"/>
                    <WavyText class="text-7xl font-bold text-white font-quicksand sm:text-8xl" text="Walker"/>
                </div>
                <!-- Photo Blob -->
<!--                todo enable     -->
<!--                <div class="absolute right-0 translate-x-[35%] -z-10 h-full w-[50%] flex flex-col justify-center invisible xl:visible">-->
<!--                    <div class="grid h-full w-full place-items-center">-->
<!--                        <img src={titleBlob} class="absolute rotate-[210deg]"/>-->
<!--                        <img src='/SimonBrickCircle.png' class="absolute z-10 w-[58%] border-black border-[6px] rounded-full translate-x-[7%]"/>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <Spacer class="w-[1.5rem]"/>
            <p class="sm:w-[75%] text-2xl text-white opacity-70">
                I'm a software engineer based in the UK.
            </p>
            <Spacer class="w-[1.5rem]"/>
<!--            Resume button      TODO add link -->
            <div class="inline-block py-3">
                <a href="google.com" class="inline-block rounded-full border p-4 text-xl font-bold transition-transform font-quicksand text-shimmer border-shimmer hover:bg-ebony-clay hover:scale-110 hover:text-white">
                    See Resume
                </a>
            </div>
        </div>
        <CurvaciousDiv svg={titleBottomSvg}/>
    </section>


    <section id="Projects" class="bg-ebony-clay">
<!--        <CurvaciousDiv height="10rem" svg={titleClaytonTopSvg}/>-->
<!--            Header      -->
        <SectionTitle title="A few things I've built"/>
<!--            Cards       -->
<!--        todo enable -->
<!--        {#each ProjectsJSON as item, i}-->
<!--            <div class="p-10">-->
<!--                <ProjectCard item={item} index={i} />-->
<!--            </div>-->
<!--        {/each}-->
    </section>


    <section id="Skills" class="bg-black">
        <CurvaciousDiv height="10rem" svg={claytonBlackTopSvg}/>
<!--        Header      -->
        <SectionTitle title="What I can do"/>
        <div class="container-resp">
            <div class="flex gap-10 flex-col md:flex-row-reverse">
                <!--                Tag sphere  -->
                <div class="md:w-[60%]">
                    <TagCloud textClass="tagCloudItems" maxSpeed="normal" texts={TagCloudJSON}/>
                </div>
                <!--        Bars     -->
                <div class="md:w-[40%] flex flex-col justify-around gap-10">
                    <div>
                        <ProgressBar
                          title="Front End"
                          detail="Since 2019"
                          progress={.82}
                          class="bg-maroon-flush"
                        />
                        <Spacer class="w-[3rem]"/>
                        <ProgressBar
                          title="Back End"
                          detail="Since 2021"
                          progress={.4}
                          class="bg-yammer"
                        />
                        <Spacer class="w-[3rem]"/>
                        <ProgressBar
                          title="Graphic Design"
                          detail="Since 2016"
                          progress={.93}
                          class="bg-shimmer"
                        />
                    </div>
                </div>
            </div>
            <!--                    Bottom paragraph    -->
            <p class="text-center text-lg sm:text-xl pt-10">
                <!--                        todo flesh out -->
                Additionally familiar with xxxx, yyyyy, zeee, aaaa, bbbbbbb, cccc and dddddd.
            </p>
        </div>
    </section>


    <section id="Contact" class="h-[70vh] flex flex-col justify-center bg-gulf-blue">
        <CurvaciousDiv height="10rem" svg={blackGulfTopSvg}/>
        <div class="text-center container-resp">
            <h2 class="text-ebony-clay-50 font-quicksand">Let's get in touch</h2>
            <Spacer class="w-[3rem]"/>
            <p class="sm:p-3 text-lg sm:text-2xl text-scooter-400 extraLetterSpacing">simon@simonwalker.tech</p>
            <p class="sm:p-3 text-lg sm:text-2xl text-scooter-400 extraLetterSpacing">(970) 581 5899</p>
        </div>
        <Spacer class="w-[15rem]"/>
    </section>


</main>