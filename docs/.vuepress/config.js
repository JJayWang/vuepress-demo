module.exports = {
    title: "JJ",
    description: 'JJ Blog',
    theme: 'reco',
    themeConfig: {
        // navbar: false,
        nav: [
            { text: 'Google', link: 'https://google.com' },
            {
                text: 'Link', items: [
                    { text: "Google", link: "https://google.com" }
                ]
            },
            {
                text: "HandBook1", link: "/handbook/1"
            }
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b', 'Explicit link text']
        ]
    }
};