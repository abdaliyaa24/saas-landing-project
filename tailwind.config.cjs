/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#54BD95",        // зелёный Biccas (подгони из Figma)
                primaryDark: "#36976F",
                primaryLight: "#E8FFF5",
                dark: "#1E1F4B",
                body: "#6F6C90",
                sectionBg: "#F5F5F5",
            },
            boxShadow: {
                soft: "0 24px 60px rgba(15, 23, 42, 0.08)",
            },
            borderRadius: {
                "3xl": "1.5rem",
                "4xl": "2rem",
            },
        },
    },
    plugins: [],
};
