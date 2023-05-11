/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */
const {
    colors
  } = require("tailwindcss/defaultTheme");
  const defaultTheme = require("tailwindcss/defaultTheme");
  module.exports = {
    content: [
        './node_modules/flowbite/**/*.js',
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */
        /*  Templates within theme app (
        <tailwind_app_name>
        /templates), e.g. base.html. */
        '../templates/**/*.html',
        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',
        /*
        * Templates in other django apps (BASE_DIR/
        <any_app_name>
        /templates).
        * Adjust the following line to match your project structure.
        */
        '../../**/templates/**/*.html',
        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',
        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
            fontSize: {
                'xxs': '.65rem'
            },
            fontFamily: {
                quicksand: ["Quicksand", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", , ...defaultTheme.fontFamily.sans],
                'montserrat': ['Montserrat','sans-serif'],
                'poppins': ['Poppins','sans-serif'],
                'inter': ['Inter','sans-serif'],
            },
            colors: {
                "primary-color": "#5E2987",
                "secondary-color": "#E3D6F1",
                "button-primary-color": "#5E2987",
                "button-second-color": "#7060AE",
                "login-bg": "#242154",
                "input-bg-color": "#EBEBEB",
                "input-text-color": "#807976",
                "background-grayec": "#ececec",
                "background-body": "#F8F9FA",
                "background-grayfa": "#fafafa",
                rede7: "#e72b2b",
            },
            keyframes: {
                navigation: {
                    "0%": {
                        width: "0%",
                        height: "3px"
                    },
                    "50%": {
                        width: "100%",
                        height: "3px"
                    },
                    "100%": {
                        width: "100%",
                        height: "100%",
                        backgroundColor: "theme('colors.primary-color')",
                    },
                },
                jelly: {
                    "0%": {
                        transform: "scale(1, 1)"
                    },
                    "100%": {
                        transform: "scale(1, 1)"
                    },
                    "25%": {
                        transform: "scale(0.9, 1.1)"
                    },
                    "50%": {
                        transform: "scale(1.1, 0.9)"
                    },
                    "75%": {
                        transform: "scale(0.95, 1.05)"
                    },
                },
            },
            animation: {
                "nav-move": "navigation 800ms forwards",
                "btn-search": "jelly 500ms",
            },
            gridTemplateColumns: {
                "product-detail": "3fr 19fr 23fr",
                "product-category": "10fr 37fr",
                cart: "163fr 72fr",
                "cart-item": "29fr 11fr 9fr 9fr",
            },
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
            'md': '768px',
            // => @media (min-width: 768px) { ... }
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require('flowbite/plugin')
    ],
  }
  