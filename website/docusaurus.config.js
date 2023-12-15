/** @type {import('@docusaurus/theme-common').UserThemeConfig} */
const themeConfig = {
  colorMode: {},
  navbar: {
    title: 'Angular Training',
    logo: {
      alt: 'Angular Logo',
      src: 'img/logo.svg',
    },
    items: [
      {
        type: 'doc',
        position: 'left',
        docId: 'intro/overview',
        label: 'Docs',
      },
      {
        type: 'dropdown',
        label: 'Links',
        position: 'left',
        items: [
          {
            label: 'Angular',
            to: '/links/angular',
          },
          {
            label: 'HTML, DOM und CSS',
            to: '/links/html-dom-css',
          },
          {
            label: 'JavaScript',
            to: '/links/javascript',
          },
          {
            label: 'TypeScript',
            to: '/links/typescript',
          },
        ],
      },
      {
        href: 'https://github.com/lean-ng/training',
        label: 'GitHub',
        position: 'right',
      },
    ],
  },
  docs: {
    sidebar: {
      autoCollapseCategories: false,
    },
  },
  footer: {
    copyright: `Copyright © 2023 Michael Buchholz`,
  },
};

/** @type {import('@docusaurus/plugin-content-docs').PluginOptions} */
const docsPluginOptions = {
  editUrl: 'https://github.com/lean-ng/training/tree/main/website',
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Angular Training',
  baseUrl: '/',
  url: 'https://ng-training.vercel.app',

  favicon: '/favicon.ico',

  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },

  themes: ['@docusaurus/theme-classic'],
  plugins: [
    ['@docusaurus/plugin-content-pages', {}],
    ['@docusaurus/plugin-content-docs', docsPluginOptions],
  ],

  themeConfig,
};

export default config;
