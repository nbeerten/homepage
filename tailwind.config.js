/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./resources/**/*.html",
        "./public/**.html",
        "./resources/**/*.js",
    ],
    theme: {
        fontFamily: {
            sans: ['"MontserratVariable"', "ui-sans-serif"],
            serif: ["ui-serif", "Georgia"],
            mono: ['"Fira CodeVariable"', "ui-monospace"],
            display: ["MontserratVariable", "ui-sans-serif"],
            body: ["MontserratVariable", "ui-sans-serif"],
        },
        plugins: [],
    },
};
