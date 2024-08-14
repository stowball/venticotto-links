/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
		extend: {
			fontFamily: {
				'open-sans': ['Open Sans', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color emoji"],
			},
		},
	},
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        // Extend Tailwind's built-in class since 100dvh is preferred to 100vh
        // https://www.bram.us/2020/05/06/100vh-in-safari-on-ios/
        ".min-h-screen": {
          "@supports (min-height: 100dvh)": {
            minHeight: "100dvh",
          },
        },
      });
    }),
  ],
};
