module.exports = {
  title: 'Samelogic Docs',
  tagline: '',
  url: 'https://samelogic.com/docs',
  baseUrl: process.env.DOCS_ENV && process.env.DOCS_ENV == "preview" ? '/' : '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Samelogic Inc.', // Usually your GitHub org/user name.
  projectName: 'Samelogic', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Samelogic Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/samelogic/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Our Mission',
              to: 'https://samelogic.com/#',
            },
            {
              label: 'Our Story',
              to: 'https://samelogic.com/#',
            },
            {
              label: 'Team Members',
              to: 'https://samelogic.com/#',
            },
          ],
        },
        {
          title: 'Learn',
          items: [
            {
              label: 'Tutorials',
              href: 'https://samelogic.com/#',
            },
            {
              label: 'How it works',
              href: 'https://samelogic.com/#',
            },
          ],
        },
        {
          title: 'Stories',
          items: [
            {
              label: 'Blog',
              to: 'https://samelogic.com/#',
            },
          ],
        },
        {
          title: 'Hire',
          items: [
            {
              label: 'Career',
              to: 'https://samelogic.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Samelogic, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: "./docs",
          routeBasePath: "/",
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
