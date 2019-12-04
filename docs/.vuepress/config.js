module.exports = {
  base: '/credit.github.io/',
  title: '云信用基础架构文档',
  description: 'Vuepress credit doc',
  head: [
    ['link', { rel: 'icon', href: '/creditcloud.jpg' }]
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
      ['/credit/Credit.md', '服务说明'],
      ['/credit/QucikStart.md', '快速开始'],
      ['/credit/TechDetail.md', '技术说明']
    ]
  }
}