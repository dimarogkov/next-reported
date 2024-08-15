import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: '#222831',
                red: '#da4934',
                gray: '#e5e5e5',
                white: '#fffefa',
            },
        },
    },
    plugins: [require('daisyui')],
};

export default config;
