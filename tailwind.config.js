/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                auth: "url('/bg-auth.jpg')",
                collection: "url('/collection-all.jpg')",
            },
        },
    },
    plugins: [],
}
