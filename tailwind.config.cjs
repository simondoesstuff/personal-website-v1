/** @type {import("tailwindcss").Config} */
module.exports = {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {


            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif'],
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
    plugins: []
};