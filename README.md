# Bricknode.Soap.Docs

Developer guide for the Bricknode SOAP API.

> The best and simplest way how to play with the API is to clone this repository and open it in [Visual Studio Code](https://code.visualstudio.com/download). This allows you to use recommended extension "Rest Client" for sending example requests to the API.

## How to setup manual playground with Visual Studio Code

1. Install [Visual Studio Code](https://code.visualstudio.com/download)
2. Clone this repository and open it in VS Code
3. Install the recommended extension `Rest Client`
4. Setup access credentials in `.vscode/settings.json` and pick the target environment by `F1` -> `Rest Client: Switch Environment`
5. Run any API request by pressing `Send Request` button directly in any `*.http` document

## How to use the SDK

Here is a how-to article about [the usage of the SDK](howto/use-of-sdk.md).

## Operations

Full API documentation [here](https://bricknode.atlassian.net/wiki/spaces/API/overview).

- Users (Legal entities)
  - [CreatePersons](https://bricknode.atlassian.net/wiki/spaces/API/pages/57639004/CreatePersons) - [examples](operations/CreatePersons.http)
  - [GetPersons](https://bricknode.atlassian.net/wiki/spaces/API/pages/57639002/GetPersons) - [examples](operations/GetPersons.http)
- Accounts
  - [CreateAccounts](https://bricknode.atlassian.net/wiki/spaces/API/pages/52003249/CreateAccounts) - [examples](operations/CreateAccounts.http)
  - [GetAccounts](https://bricknode.atlassian.net/wiki/spaces/API/pages/52002947/GetAccounts) - [examples](operations/GetAccounts.http)
- Instruments (Assets)
  - [CreateInstruments](https://bricknode.atlassian.net/wiki/spaces/API/pages/56328268/CreateInstruments) - [examples](operations/CreateInstruments.http)
  - [GetInstruments](https://bricknode.atlassian.net/wiki/spaces/API/pages/58261553/GetInstruments) - [examples](operations/GetInstruments.http)
- Markets (Venues)
  - [CreateTradingVenues](https://bricknode.atlassian.net/wiki/spaces/API/pages/1457979715/CreateTradingVenues)
  - [GetTradingVenues](https://bricknode.atlassian.net/wiki/spaces/API/pages/83132616/GetTradingVenues)
- Orders
  - [CreateTradeOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/52002940/CreateTradeOrders)
  - [GetTradeOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/52002923/GetTradeOrders) - [examples](operations/GetTradeOrders.http)
  - [ExecuteOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/2714271827/ExecuteOrders)
  - [SettleOrders](https://bricknode.atlassian.net/wiki/spaces/API/pages/2714304848/SettleOrders)
- Reservations
  - [CreateReservations]([CreateReservations](https://bricknode.atlassian.net/wiki/spaces/API/pages/1747353889/CreateReservations))
  - [GetReservations](https://bricknode.atlassian.net/wiki/spaces/API/pages/1750007934/GetReservations) - [examples](operations/GetReservations.http)
  - [DeleteReservations](https://bricknode.atlassian.net/wiki/spaces/API/pages/1749385447/DeleteReservations)
- Transactions
  - [CreateBusinessTransactions](https://bricknode.atlassian.net/wiki/spaces/API/pages/60031192/CreateBusinessTransaction)
  - [GetBusinessTransactions](https://bricknode.atlassian.net/wiki/spaces/API/pages/58916910/GetBusinessTransactions) - [examples](operations/GetBusinessTransactions.http)

## Workflows

Full examples of how to integrate with the BFS system.

- [Manual order](workflows/manual-order.http): create, execute and settle manual order; create a custom transaction for the order
- [Instruments and Markets](workflows/instrument-market.http): create venue (market) and instrument; update the price of the instrument
