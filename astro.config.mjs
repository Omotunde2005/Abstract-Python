// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Abstract-Python',
			logo: {
				src: './src/assets/abstract-api-logo.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Omotunde2005/abstractpython' }],
			sidebar: [
				{
					label: 'Getting started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', slug: 'getting_started' },
						{ label: 'Authentication', slug: 'authentication' },
					],
				},
			],
		}),
	],
});
