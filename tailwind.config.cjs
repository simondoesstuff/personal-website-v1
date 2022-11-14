/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {


            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif'],
            },


            fontSize: {
                '8xl-resp': 'clamp(3rem, 7vw, 6rem)',
                '5xl-resp': 'clamp(2rem, 5vw, 3rem)',
            },


            colors: {
                "bittersweet": "#FA7268",
                "swamp": "#001220",
                "gulf-blue": "#06134e",
                'maroon-flush': '#e12d87',
                'yammer': '#9668e6',
                'shimmer': '#2de190',

                "scooter": {
                    DEFAULT: "#2DC0E1",
                    "50": "#CEF0F8",
                    "100": "#BCEBF5",
                    "200": "#98E0F0",
                    "300": "#74D5EB",
                    "400": "#51CBE6",
                    "500": "#2DC0E1",
                    "600": "#1B9EBB",
                    "700": "#14748A",
                    "800": "#0D4B59",
                    "900": "#062228"
                },

                "ebony-clay": {
                    DEFAULT: "#1D202E",
                    "50": "#B0B5CD",
                    "100": "#A3A9C5",
                    "200": "#8A92B5",
                    "300": "#717BA6",
                    "400": "#5C6692",
                    "500": "#4C5479",
                    "600": "#3D4360",
                    "700": "#2D3147",
                    "800": "#1D202E",
                    "900": "#12131e"
                }
            }


        }
    },
    plugins: [
        require('tailwindcss-fluid-type')({
            settings: {
                fontSizeMin: 1.005, // 1.125rem === 18px
                fontSizeMax: 1.25, // 1.25rem === 20px
                ratioMin: 1.120, // Multiplicator Min
                ratioMax: 1.18, // Multiplicator Max
                screenMin: 20, // 20rem === 320px
                screenMax: 96, // 96rem === 1536px
                unit: 'rem', // default is rem but it's also possible to use 'px'
                prefix: '', // set a prefix to use it alongside the default font sizes
                extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
            }
        })
    ]
};