<script>
    import Sidebar from "$lib/Sidebar.svelte";
    import Spacer from "$lib/Spacer.svelte";

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
            preview: "https://static.bandainamcoent.eu/high/dark-souls/dark-souls-1/00-page-setup/ds1_game-thumbnail.jpg"
        },
        {
            title: "A Simple Blog",
            date: "March, 2022",
            description: "A website that aims to be a simple blog. It uses SvelteKit and TailwindCSS. It uses the Netlify CMS to manage the posts. It was ultimately a huge success. It all started with a simple idea." +
                "We decided to do something radical. We decided to make a blog. We wanted to make a blog that was simple, easy to use, and easy to manage. We wanted to make a blog that was easy to use, easy to manage, and easy to manage.",
            techs: [
                "SvelteKit", "TailwindCSS", "Netlify CMS"
            ],
            preview: "https://w0.peakpx.com/wallpaper/149/468/HD-wallpaper-dark-blue-hud-modern-tech-technology-thumbnail.jpg"
        },
        {
            title: "Weather App",
            date: "April, 2019",
            description: "An original weather app that aims to be simple and easy to use. It features a simple and clean design. It uses the OpenWeatherMap API to fetch the weather data. It uses the Google Maps API to fetch the location data.",
            techs: [
                "Svelte", "TailwindCSS", "OpenWeatherMap API", "Google Maps API"
            ],
            preview: "https://w0.peakpx.com/wallpaper/149/468/HD-wallpaper-dark-blue-hud-modern-tech-technology-thumbnail.jpg"
        }
    ];
</script>

<div class="flex w-full">
    <!--    Sidebar  -->
    <Sidebar />

    <main class="w-full">


        <section id="About" class="full-page-section container-resp">
            <h3 class="mb-6 text-primary -rotate-2 -translate-x-5">Hello, I'm</h3>
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
            {#each projects as item, i}
                <div
                  class="w-full p-10"
                  class:bg-card-primary={i % 2 === 0}
                  class:bg-card-secondary={i % 2 === 1}
                >
                    <div
                      class="flex container-resp"
                      class:flex-row-reverse={i % 2 === 1}
                    >
                        <div>
                            <h6
                              class="p-2 text-primary  -translate-x-5"
                              class:relative={i % 2 === 1}
                              class:-rotate-2={i % 2 === 0}
                              class:rotate-2={i % 2 === 1}
                              class:text-right={i % 2 === 1}
                            >
                                {item.date}
                            </h6>
                            <h3 class="p-2 text-white">{item.title}</h3>
                            <p class="p-2">{item.description}</p>
                            <Spacer size=".75rem"/>
                            {#each item.techs as tech}
                                <span class="p-2 text-secondary">{tech}</span>
                            {/each}
                            <span>
                                <a href={item.github}>
<!--                                    todo put icon in static     -->
                                    <img class="w-14 inline-block p-2" src="https://cdn-icons-png.flaticon.com/512/25/25231.png">
                                </a>
                            </span>
                        </div>
                        <Spacer size="10rem" />
                        <img class="neumorphism max-w-[50%]" src={item.preview} />
                    </div>
                </div>
            {/each}
        </section>


        <Spacer size="50vh" />


    </main>
</div>