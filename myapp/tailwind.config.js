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
            'NexonGothic': ['NexonGothic', 'sans-serif'],
            'pt': ['PT Sans', 'sans-serif'],
            'dmSerif': ['DM Serif Display', 'serif'],
            'goblin': ['Goblin One', 'serif'],
            'kaushan': ['Kaushan Script', 'cursive'],
            'rozha': ['Rozha One', 'serif'],
            'chonburi': ['Chonburi', 'serif'],
            'abril': ['Abril Fatface', 'serif'],
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