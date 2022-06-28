// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Accomdemy - Learning Groups',
  tagline: 'Accomdemy = Accompany + Academy',
  url: 'https://accomdemy.github.io/Learn',
  baseUrl: '/Learn/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Accomdemy', // Usually your GitHub org/user name.
  projectName: 'Learn', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Accomdemy - Learning Groups',
        logo: {
          alt: 'My Site Logo',
          src: 'img/accomdemy.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'TinyML',
            position: 'left',
            label: 'TinyML 🧠',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/accomdemy/Learn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learing Groups',
            items: [
              {
                label: 'TinyML 🧠',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gcYAGQ9qWr',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/accomdemy',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Accomdemy/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/accomdemy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Accomdemy, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
