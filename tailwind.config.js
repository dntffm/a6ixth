import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        colors: {
            ...colors,
            'footer': '#292D32',
            'background': '#FFFEF2',
            'white': '#FFFFFF',
            'bone': '#F8F3DF',
            'olive': '#E1DCC7',
        },
        extend: {
            fontFamily: {
                cantarell: ['Cantarell', ...defaultTheme.fontFamily.sans],
                bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
                neuton: ['Neuton', ...defaultTheme.fontFamily.sans],
                averia: ['Averia Serif Libre', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms, typography, require('taos/plugin')],

    safelist: [
        '!duration-[0ms]',
        '!delay-[0ms]',
        'html.js :where([class*="taos:"]:not(.taos-init))'
    ],
};
