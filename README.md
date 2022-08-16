# Bricknode.Soap.Docs

Developer guide for the Bricknode SOAP API.

> The best and simplest way how to play with the API is to clone this repository and open it in [Visual Studio Code](https://code.visualstudio.com/download). This allows you to use recommended extension "Rest Client" for sending example requests to the API.

Here is a how-to article about [the usage of the SDK](howto/use-of-sdk.md).

## Operations

Full API documentation [here](https://bricknode.atlassian.net/wiki/spaces/API/overview).

- Users (Legal entities)
  - [GetPersons](https://bricknode.atlassian.net/wiki/spaces/API/pages/57639002/GetPersons)
- Accounts
  - [GetAccounts](https://bricknode.atlassian.net/wiki/spaces/API/pages/52002947/GetAccounts)
- Instruments (Assets)
  - [GetInstruments](https://bricknode.atlassian.net/wiki/spaces/API/pages/58261553/GetInstruments)
  - [CreateInstruments](https://bricknode.atlassian.net/wiki/spaces/API/pages/56328268/CreateInstruments)
- Markets (Venues)
  - [GetTradingVenues](https://bricknode.atlassian.net/wiki/spaces/API/pages/83132616/GetTradingVenues)
  - [CreateTradingVenues](https://bricknode.atlassian.net/wiki/spaces/API/pages/1457979715/CreateTradingVenues)
- Orders
  - [GetTradeOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/52002923/GetTradeOrders) - [examples](operations/GetTradeOrders.http)
  - [CreateTradeOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/52002940/CreateTradeOrders)
  - [ExecuteOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/2714271827/ExecuteOrders)
  - [SettleOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/2714304848/SettleOrders)
- Transactions
  - [GetBusinessTransactions](https://bricknode.atlassian.net/wiki/spaces/API/pages/58916910/GetBusinessTransactions) - [examples](operations/GetBusinessTransactions.http)
  - [CreateBusinessTransactions](https://bricknode.atlassian.net/wiki/spaces/API/pages/60031192/CreateBusinessTransaction)

## Workflows

Full examples of how to integrate with the BFS system.

- [Manual order](workflows/manual-order.http): create, execute and settle manual order; create a custom transaction for the order
- [Instruments and Markets](workflows/instrument-market.http): create venue (market) and instrument; update price of the instrument
