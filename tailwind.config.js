/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                lightBlue: "#3493b9",
                darkBlue: "#0f255d",
				darkerBlue: "#05143a"
            },
        },
    },
    plugins: [],
};
