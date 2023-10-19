// 完整的 config.js 文件内容，可根据需要自行删减
module.exports = {
    // locales: {
    //     '/': {
    //         lang: 'zh-CN'
    //     }
    // },
    //theme: 'reco',
    //title: 'Cleaner',
    //description: 'Cleanerblog',
    // head: [
    //     ['link', { rel: 'icon', href: '/favicon.ico' }],
    //     // 主题 移动端优化
    //     ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    // ],
    // base: '/',
    // markdown: {
    //     lineNumbers: true // 代码块显示行号
    // },
    // plugins: [
    //     ['@vuepress-reco/vuepress-plugin-back-to-top']
    // ],
    themeConfig: {
        // 主题模式 博客模式
        type: 'blog',
        //autohor: 'Cleaner',
        // 个人信息的头像
        //authorAvatar: '/avator.jpg',
        // 内置搜索
        //search: true,
        //searchMaxSuggestions: 10,
        // 子侧边栏
        //subSidebar: 'auto',
        //sidebarDepth: 1,
        //lastUpdated: '更新时间',
        // 设置时区偏移量（8小时）
        //timezoneOffset: 8 * 60 * 60 * 1000,
        // 博客配置
        blogConfig: {
            socialLinks: [
                { icon: 'reco-github', link: 'https://github.com/SongJian-99' }
            ]
        },
        // 导航栏配置
        nav: [
            { text: 'Docker', link: '/docker/preface', icon: 'iconfont icon-docker' },
            { text: '书籍', link: '/books/bookList', icon: 'reco-document' },
            { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
        ],
        sidebar: {
            '/books/': [
                {
                    title: '传统文化',
                    collapsable: true,
                    children: [
                        { title: '素书', path: '/books/素书' },
                    ]
                }
            ],
            '/docker/': [
                {
                    title: 'Docker 应用',
                    collapsable: true,
                    children: [
                        { title: '使用 Docker Compose 部署 Elasticsearch + Kibana', path: '/docker/Elasticsearch' },
                        { title: '使用 Dockerfile + Docker Compose 部署 Web 项目', path: '/docker/Web' }
                    ]
                }
            ]
        },
        // 评论插件配置
        // valineConfig: {
        //     appId: '替换为自己的appId',
        //     appKey: '替换为自己的appKey',
        //     showComment: false
        //     // isShowComments: true  在需要添加评论的页面加上这个配置
        // }
    }
};