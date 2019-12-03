module.exports = {
  base: '/credit/',
  title: 'credit',
  description: 'Vuepress credit doc',
  head: [
    ['link', { rel: 'icon', href: '/vue-logo.png' }]
  ],
  themeConfig: {
  	// 你的GitHub仓库
    repo: 'https://github.com/goodbigtree/credit.github.io.git',
    // 自定义仓库链接文字。
    repoLabel: 'credit doc',
  	nav: [
  		{ text: '首页', link: '/' },
  		{ text: '云信用', link: '/credit/Credit.md' }
  	],
  	sidebar: [
      ['/', '首页'],
      ['/credit/Credit.md', '架构说明']
    ]
  }
}