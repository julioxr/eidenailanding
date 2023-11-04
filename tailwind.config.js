/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                mainBlue: "#0A0D18",
            },
            fontFamily: {
                fuentelato: ["var(--font-lato)"],
                fuenteroboto: ["var(--font-roboto)"],
            },
            lineClamp: {
                12: "12",
            },
        },
    },
    plugins: [],
};
