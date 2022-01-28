# Briknode.Soap.Docs

Developer guide for the Bricknode SOAP API.

> Best and simplest way how to play with the API is to clone this repository and open it in [Visual Studio Code](https://code.visualstudio.com/download).

## Operataions

- Orders
  - [GetTradeOrders](operations/GetTradeOrders.md) - [examples](operations/GetTradeOrders.http)
- Transactions
  - [GetBusinessTransactions](operations/GetBusinessTransactions.md) - [examples](operations/GetBusinessTransactions.http)
  - [CreateBusinessTransactions](operations/CreateBusinessTransactions.md)

## Workflows

Examples how to integrate with BFS system.

- [Manual order](workflows/manual-order.http): create, execute and settle manual order; create a custom transaction for the order
- [Instruments and Markets](workflows/instrument.http): create venue (market) and instrument; update price of the instrument
