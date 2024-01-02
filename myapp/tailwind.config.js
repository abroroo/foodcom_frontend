module.exports = {
    // mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        fontFamily: {
            'monts': ['Montserrat', 'sans-serif'],
            'dm': ['DM Sans', 'sans-serif'],
            'outfit': ['Outfit', 'sans-serif'],
            'kalam': ['Kalam', 'cursive'],
            'poppins': ['Poppins', 'sans-serif'],
            'quick': ['Quicksand', 'sans-serif'],
            'caveat': ['Caveat', 'cursive'],
            'kr': ['Noto Serif KR', 'serif'],
            'cormorant': ['Cormorant Garamond', 'serif'],
            'zermatt': ['zermatt', 'sans-serif'],
            'NexonGothic': ['NexonGothic', 'sans-serif'],
        }
    },

    variants: {},

    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
        "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    ],
};