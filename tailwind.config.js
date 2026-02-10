/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6366f1",
                secondary: "#a855f7",
                background: {
                    light: "#0f172a",
                    dark: "#020617",
                },
                text: {
                    main: "#f8fafc",
                    muted: "#94a3b8",
                }
            },
            backgroundImage: {
                'accent-gradient': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            }
        },
    },
    plugins: [],
}
