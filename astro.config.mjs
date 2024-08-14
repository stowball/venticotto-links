import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import purgecss from 'astro-purgecss';

// import purgecss from 'astro-purgecss';

// export default {
// 	// ...
// 	// integrations: [purgecss()],
// };

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	integrations: [
		tailwind(),
		purgecss({
			content: [
				process.cwd() + '/src/**/*.{astro}', // Watching astro sources (for SSR, read the note below)
			],
			safelist: [/\[.*?\]/],
			variables: true,
		}),
	],
});
