const base = process.env.BASE || '/'

module.exports = {
  title: 'VitePress',
  description: 'Life is short, Keep it simple.',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  base: base,
  // locales: {
  //   '/': { lang: 'en-US' },
  //   '/zh/': { lang: 'zh-CN'},
  // },
  themeConfig: {
    repo: 'xinlei3166/vitepress-theme-demoblock',
    logo: '/logo.svg',
    docsDir: 'docs',
    docsBranch: 'master',

    // locales
    // locales: {
    //   '/': { label: 'English' },
    //   '/zh/' : { label: '简体中文' },
    // },

    // demoblock locales
    demoblock: {
      '/': {
        'hide-text': 'Hide',
        'show-text': 'Expand',
        'copy-button-text': 'Copy',
        'copy-success-text': 'Copy success'
      },
      '/zh': {
        'hide-text': '隐藏代码',
        'show-text': '显示代码',
        'copy-button-text': '复制代码片段',
        'copy-success-text': '复制成功'
      }
    },

    // nav
    nav: [
      { text: 'css-guide', link: '/css-guide/' }
    ],

    // sidebar
    sidebar: { '/css-guide/': [
        {
          text: 'css指南',
          children: [
            {
              text: 'css技巧',
              link: '/css-guide/card'
            },
            {
              text: '第三方',
              link: '/css-guide/other'
            }
          ]
        }
      ]
    },

    // page meta
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2] },

    config: (md) => {
      const { demoBlockPlugin } = require('../../demoblock')
      md.use(demoBlockPlugin, {
        cssPreprocessor: 'less',
        scriptImports: ["import * as ElementPlus from 'element-plus'"],
        scriptReplaces: [
          { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
            replaceValue: 'const { defineComponent: _defineComponent } = Vue'
          },
          { searchValue: /import ({.*}) from 'element-plus'/g,
            replaceValue: (s, s1) => `const ${s1} = ElementPlus`
          }
        ]
      })
    }
  }
}
