module.exports = {
  title: '爱秀的你',
  description: '爱秀的你的个人博客',
  base: '/blog/',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  port: 3000,
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    lastUpdated: '最后更新时间',
    sidebar: 'auto',
    repo: 'https://github.com/aixiudeni/blog',
    repoLabel: 'Github',
    nav : [
      {
        text: '前端面试之道',
        link: '/interview/'
      }
    ],
    sidebar: {
      '/interview/': ['interview/']
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@images': '../images'
      }
    }
  }
}