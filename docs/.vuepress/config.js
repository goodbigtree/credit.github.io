module.exports = {
  base: '/',
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
      ['/credit/Credit.md', '基础环境'],
      ['/credit/QucikStart.md', '快速开始'],
      ['/credit/OnlineInfo.md', '服务说明'],
      ['/credit/TechDetail.md', '技术说明']
    ]
  }
}