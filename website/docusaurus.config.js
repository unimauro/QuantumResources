// @ts-check
// Docusaurus configuration for the Quantum Resources Learning Hub.
// This runs in Node.js — don't use client-side code here.

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quantum Resources',
  tagline: 'The Ultimate Open Quantum Computing Learning Hub',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://unimauro.github.io',
  baseUrl: '/QuantumResources/',

  organizationName: 'unimauro',
  projectName: 'QuantumResources',
  trailingSlash: false,

  // Internal cross-links between sibling docs are validated; warn instead of
  // failing the production build so a single typo never blocks a deploy.
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    format: 'detect',
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      // Offline / client-side search (no Algolia account required).
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        indexBlog: true,
        docsRouteBasePath: 'docs',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {tagName: 'link', rel: 'icon', href: '/QuantumResources/img/favicon.svg'},
          {tagName: 'link', rel: 'manifest', href: '/QuantumResources/manifest.json'},
          {tagName: 'meta', name: 'theme-color', content: '#0b1026'},
          {tagName: 'meta', name: 'apple-mobile-web-app-capable', content: 'yes'},
          {tagName: 'meta', name: 'apple-mobile-web-app-status-bar-style', content: '#0b1026'},
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/unimauro/QuantumResources/tree/master/website/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Quantum Updates',
          blogDescription: 'Monthly updates, release notes and featured contributors',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Quantum Resources Updates',
          },
          editUrl:
            'https://github.com/unimauro/QuantumResources/tree/master/website/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/quantum-social-card.png',
      metadata: [
        {name: 'keywords', content: 'quantum computing, quantum machine learning, qiskit, cirq, pennylane, qubit, learning hub, quantum algorithms, QML, qubits, bloch sphere'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'star_repo',
        content:
          '⭐️ If you find Quantum Resources useful, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/unimauro/QuantumResources">GitHub</a>!',
        backgroundColor: '#1a1f4d',
        textColor: '#e6f1ff',
        isCloseable: true,
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      navbar: {
        title: 'Quantum Resources',
        hideOnScroll: true,
        logo: {
          alt: 'Quantum Resources Logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'Learn'},
          {to: '/docs/roadmaps/overview', label: 'Roadmaps', position: 'left'},
          {to: '/docs/labs/overview', label: 'Labs', position: 'left'},
          {to: '/docs/frameworks/overview', label: 'Frameworks', position: 'left'},
          {to: '/docs/interactive/bloch-sphere', label: 'Interactive', position: 'left'},
          {to: '/docs/career/overview', label: 'Careers', position: 'left'},
          {to: '/blog', label: 'Updates', position: 'left'},
          {
            href: 'https://github.com/unimauro/QuantumResources',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {label: 'Getting Started', to: '/docs/intro'},
              {label: 'Roadmaps', to: '/docs/roadmaps/overview'},
              {label: 'Hands-on Labs', to: '/docs/labs/overview'},
              {label: 'Frameworks', to: '/docs/frameworks/overview'},
            ],
          },
          {
            title: 'Explore',
            items: [
              {label: 'Resources', to: '/docs/resources/overview'},
              {label: 'Research Papers', to: '/docs/resources/papers'},
              {label: 'Careers', to: '/docs/career/overview'},
              {label: 'Interactive Tools', to: '/docs/interactive/bloch-sphere'},
            ],
          },
          {
            title: 'Community',
            items: [
              {label: 'GitHub', href: 'https://github.com/unimauro/QuantumResources'},
              {label: 'Contribute', href: 'https://github.com/unimauro/QuantumResources/blob/master/CONTRIBUTING.md'},
              {label: 'Updates', to: '/blog'},
              {label: 'Report an issue', href: 'https://github.com/unimauro/QuantumResources/issues'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quantum Resources — Open educational content (MIT). Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'latex'],
      },
    }),
};

export default config;
