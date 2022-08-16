module.exports = {
    lang: 'en-US',
    title: 'BFS Soap API',
    description: 'Developer guide for the Bricknode SOAP API',
    head: [
        ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/images/icons/favicon-16x16.png' }],
        ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/icons/favicon-32x32.png' }],
    ],
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      repo: 'Bricknode/Bricknode.Soap.Docs',
      navbar: [
        {
          text: 'Guide',
          link: '/howto/',
        },
        {
          text: 'Operations',
          children: [
              {
                  text: 'Transactions',
                  children: [
                    '/operations/GetBusinessTransactions.md',
                    '/operations/CreateBusinessTransactions.md',
                  ]
              },
              {
                  text: 'TradeOrders',
                  children: [
                      '/operations/GetTradeOrders.md',
                  ]
              }
            ],
        },
        {
            text: 'Workflows',
            children: [
                '/workflows/manual-order.md',
                '/workflows/instrument-market.md'
            ]
        },
      ],
    },
    plugins: [
        [
            '@vuepress/plugin-search',
            {
                locales: {
                    '/': { placeholder: 'Search', },
                },
            },
        ],
    ],
}