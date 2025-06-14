// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightNextjsTheme from 'starlight-nextjs-theme'


import vercel from '@astrojs/vercel';


export default defineConfig({
  integrations: [
      starlight({
          plugins: [starlightNextjsTheme()],
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
                      { label: 'Quickstart', slug: 'getting_started' },
                      { label: 'Authentication', slug: 'authentication' }
                  ],
              },

              {
                  label: 'Exchange',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Overview', slug: 'exchange/overview' },
                      { label: 'Live Exchange', slug: 'exchange/live' },
                      { label: 'Currency conversion', slug: 'exchange/conversion'},
                      { label: 'Historical Exchange', slug: 'exchange/historical'},
                  ],
              },

              {
                  label: 'IP/Geolocation',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Usage', slug: 'ip/ip_api' }
                  ],
              },

              {
                  label: 'Value Added Tax (VAT)',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Overview', slug: 'vat/overview' },
                      { label: 'Validate VAT', slug: 'vat/validate' },
                      { label: 'Calculate VAT', slug: 'vat/calculate' },
                      { label: 'VAT categories', slug: 'vat/vat_categories' },
                  ],
              },

              {
                  label: 'Advanced',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Response object', slug: 'advanced/response_object' },
                      { label: 'Errors', slug: 'advanced/errors' },
                      { label: 'Handling errors', slug: 'advanced/handling_errors' },
                  ],
              },
          ],
      }),
	],

  adapter: vercel({
        webAnalytics: {
            enabled: true
        },
    }),
});