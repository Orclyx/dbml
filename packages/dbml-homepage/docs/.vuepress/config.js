module.exports = {
  title: 'DBML',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/home/' },
      { text: 'Docs', link: '/docs/' },
      { text: 'Github',link: 'https://github.com/holistics/dbml'},
      { text: 'Community', link: 'https://community.dbdiagram.io/'},
      { text: 'Submit Feedback', link:'https://goo.gl/forms/88AmYOyiIiTuFuzG3'},
    ],
    sidebarDepth: 2,
    sidebar: {
      '/docs/':[
        ''
      ],
      //home sidebar
      '/home/':[
        ''
      ],
    }
  },
  ga: `${require('./secret').ga}`,
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': `${require('./secret').ga}`
      }
    ]
  ]
}