// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "thingsgateway",
  tagline: "物联网",
  url: "https://thingsgateway.cn/",
  baseUrl: '/',
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  projectName: "ThingsGateway",
  scripts: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
    localeConfigs: {
      zh: {
        htmlLang: 'zh-cn',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://gitee.com/ThingsGateway/Doc/tree/master/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,

        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector:
          ".markdown :not(em) > img,.markdown > img, article img[loading]",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {},
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        additionalLanguages: ["powershell", "csharp", "sql"],
      },
      navbar: {
        title: "ThingsGateway",
        logo: {
          alt: "ThingsGateway Logo",
          src: "img/ThingsGatewayLogo.png",
        },
        hideOnScroll: true,
        items: [
          {
            label: "更新日志",
            position: "left",
            to: "docs/upgrade"
          },
          {
            label: "博客",
            position: "left",
            to: "docs/blog"
          },
          {
            label: "视频",
            position: "left",
            to: "docs/video"
          },
          {
            label: "源码",
            position: "right",
            items: [
              {
                label: "Gitee（主库）",
                href: "https://gitee.com/ThingsGateway/ThingsGateway",
              },
              {
                label: "GitHub",
                href: "https://github.com/ThingsGateway/ThingsGateway",
              },
              {
                label: "GitCode",
                href: "https://gitcode.com/ThingsGateway/ThingsGateway",
              },
              {
                label: "Nuget",
                href: "https://www.nuget.org/profiles/kimdiego",
              },
            ],
          }

        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "入门",
                to: "docs",
              },
              {
                label: "手册",
                to: "docs",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "讨论",
                href: "https://gitee.com/diego2098/ThingsGateway/issues",
              },
              {
                label: "看板",
                href: "https://gitee.com/diego2098/ThingsGateway/board",
              },
            ],
          },
          {
            title: "更多",
            items: [
              {
                label: "仓库",
                href: "https://gitee.com/diego2098/ThingsGateway",
              }
            ],
          },
        ],
        copyright: `Copyright © 2020-${new Date().getFullYear()} Diego  <a href="https://beian.miit.gov.cn/">粤ICP备2024310170号-1</a>`,
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
        options: {
          maxTextSize: 500,
        },
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: [
    ['@docusaurus/theme-mermaid',
      {
        theme: { light: 'neutral', dark: 'forest' },
        options: {
          maxTextSize: 500,
        },
      }
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["zh", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ]
};

export default config;
