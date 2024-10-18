// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#fea928",
                secondary: "#ed8900",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                },
            },
            backgroundImage: {
                "banner-login": "url('/src/assets/website/background.jpg')",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
