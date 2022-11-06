<script lang="ts">
    import Sidebar from "$lib/Sidebar.svelte";
    import Spacer from "$lib/Spacer.svelte";
    import ProjectCard from "$lib/ProjectCard.svelte";

    const projects = [
        {
            title: "Spotify Profile",
            date: "March, 2022",
            description: "A Spotify profile page made with Svelte and TailwindCSS. It uses the Spotify API to fetch the user's data. And it uses the Spotify Web Playback SDK to play the user's top tracks.",
            techs: [
                "Svelte", "TailwindCSS", "Spotify API", "Spotify Web Playback SDK"
            ],
            github: "https://github.com/rodrigodmd/spotify-profile",
            link: "https://spotify-profile.vercel.app/",
            image: "https://static.bandainamcoent.eu/high/dark-souls/dark-souls-1/00-page-setup/ds1_game-thumbnail.jpg",
            gotoLink: "https://spotify-profile.vercel.app/"
        },
        {
            title: "A Simple Blog",
            date: "March, 2022",
            description: "A website that aims to be a simple blog. It uses SvelteKit and TailwindCSS. It uses the Netlify CMS to manage the posts. It was ultimately a huge success. It all started with a simple idea." +
                "We decided to do something radical. We decided to make a blog. We wanted to make a blog that was simple, easy to use, and easy to manage. We wanted to make a blog that was easy to use, easy to manage, and easy to manage.",
            techs: [
                "SvelteKit", "TailwindCSS", "Netlify CMS"
            ],
            image: "https://github.com/simondoesstuff/TexToIL/raw/model2/DemoGif.gif"
        },
        {
            title: "Weather App",
            date: "April, 2019",
            description: "An original weather app that aims to be simple and easy to use. It features a simple and clean design. It uses the OpenWeatherMap API to fetch the weather data. It uses the Google Maps API to fetch the location data.",
            techs: [
                "Svelte", "TailwindCSS", "OpenWeatherMap API", "Google Maps API"
            ],
            image: "https://w0.peakpx.com/wallpaper/149/468/HD-wallpaper-dark-blue-hud-modern-tech-technology-thumbnail.jpg",
            gotoLink: "https://weather-app-rodrigodmd.vercel.app/"
        }
    ];
</script>

<div class="flex w-full">
    <!--    Sidebar  -->
    <Sidebar />

    <main class="w-full">


        <section id="About" class="full-page-section container-resp">
            <h3 class="mb-6 -translate-x-5 -rotate-2 text-primary">Hello, I'm</h3>
            <h1 class="mb-6">Simon Walker</h1>
            <p class="w-[75%] text-xl">
                I'm a software engineer based in the UK. I'm currently working at
                <a href="https://www.oxforduniversitypress.com/">Oxford University Press</a>
                as a Senior Software Engineer. I'm also a co-founder of the <a href="https://www.oxfordhack.org/">Oxford
                Hack</a> hackathon.
                I have a passion for building things and learning new things.
            </p>
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