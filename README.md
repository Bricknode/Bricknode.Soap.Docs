---
home: true
title: Home
heroImage: /images/hero.png
actions:
  - text: Guide
    link: /howto/
    type: primary
  - text: C# SDK
    link: /howto/use-of-sdk.md
    type: secondary
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
  - title: Themes
    details: Providing a default theme out of the box. You can also choose a community theme or create your own one.
  - title: Plugins
    details: Flexible plugin API, allowing plugins to provide lots of plug-and-play features for your site. 
  - title: Bundlers
    details: Default bundler is Vite, while Webpack is also supported. Choose the one you like!
footer: MIT Licensed | Copyright © 2012 Bricknode
---
# Bricknode.Soap.Docs

Developer guide for the Bricknode SOAP API.

> The best and simplest way how to play with the API is to clone this repository and open it in [Visual Studio Code](https://code.visualstudio.com/download). This allows you to use recommended extension "Rest Client" for sending example requests to the API.

## Operataions

- Orders
  - [GetTradeOrders](operations/GetTradeOrders.md) - [examples](operations/GetTradeOrders.http)
- Transactions
  - [GetBusinessTransactions](operations/GetBusinessTransactions.md) - [examples](operations/GetBusinessTransactions.http)
  - [CreateBusinessTransactions](operations/CreateBusinessTransactions.md)

## Workflows

Examples how to integrate with BFS system.

- [Manual order](workflows/manual-order.http): create, execute and settle manual order; create a custom transaction for the order
- [Instruments and Markets](workflows/instrument-market.http): create venue (market) and instrument; update price of the instrument
