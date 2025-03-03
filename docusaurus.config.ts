import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'WhatIfAI?',
  tagline: '10x Your Coding Productivity with AI',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://autonateai.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/WhatIfAI-Coders/',

  // GitHub pages deployment config.
  organizationName: 'AutoNateAI', // Your GitHub org/user name.
  projectName: 'WhatIfAI-Coders', // Your repository name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AutoNateAI/WhatIfAI-Coders/tree/main/',
        },
        blog: {
          routeBasePath: 'podcasts',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/AutoNateAI/WhatIfAI-Coders/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.png',
    metadata: [
      // Twitter Card
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:title', content: 'WhatIfAI? - AI Dev Docs'},
      {name: 'twitter:description', content: '10x Your Coding Productivity with AI'},
      {name: 'twitter:image', content: 'https://autonateai.github.io/WhatIfAI-Coders/img/social-card.png'},
      
      // Open Graph (Facebook, iMessage, etc)
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'WhatIfAI? - AI Dev Docs'},
      {property: 'og:description', content: '10x Your Coding Productivity with AI'},
      {property: 'og:image', content: 'https://autonateai.github.io/WhatIfAI-Coders/img/social-card.png'},
      {property: 'og:image:alt', content: 'WhatIfAI Logo'},
      {property: 'og:url', content: 'https://autonateai.github.io/WhatIfAI-Coders/'},
      {property: 'og:site_name', content: 'WhatIfAI?'},
      
      // Apple-specific
      {name: 'apple-mobile-web-app-title', content: 'WhatIfAI?'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
    ],
    
    // Replace with a modern tech color scheme
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    
    navbar: {
      logo: {
        alt: 'WhatIfAI Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
        width: 100,
        height: 50,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'AI Dev Docs',
        },
        {to: '/digital-assets', label: 'Digital Assets', position: 'left'},
        {to: '/podcasts', label: 'Podcasts', position: 'left'},
        {
          href: 'https://github.com/AutoNateAI/WhatIfAI-Coders',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'AI Dev Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Podcasts',
              to: '/podcasts',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AutoNateAI/WhatIfAI-Coders',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Digital Assets',
              to: '/digital-assets',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} WhatIfAI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
