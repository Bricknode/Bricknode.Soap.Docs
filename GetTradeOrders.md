# GetTradeOrders

Endpoint for retrieving orders. Multiple arguments/filters can be specified or combined together. A request with no filter returns all orders in the system.

## Filter inputs

| Name | Type | Description | Mandatory | Available from version |
|---|---|---|---|---|
| BrickIds | Guid[] | Filter by array of BrickIds. BrickId is the internal id of a trade order. |  | 2.30 |
| TradeOrderType | String | Filter trade orders by type. |  |  |
| States | String[] | Filter trade orders by states. |  |  |
| Instruments | Guid[] | Filter by array of InstrumentIds. |  |  |
| Accounts | Guid[] | Filter by array of AccountIds. |  |  |
| ExternalReference | String | Filter by ExternalReference |  |  |
| OrderNos | String[] | Filter by order numbers |  | 2.02 |
| ExternalFundBatchOrders | Guid[] | Filter by array of External Fund Batch Orders |  | 2.02.20160422 |
| FundBatchOrders | Guid[] | Filter by array of FundBatchOrders. FundBatchOrders is a legacy property which is used for batch orders with regards to the Execution Interface called MFEX. If a TradeOrder is created with Execution Interface set to MFEX and the TradeOrders are batched together for sending one order to MFEX a FundBatchOrder will be created. |  | 2.32 |
| IsPrePayed | Bool | True if the orders should be filtered on the pre pay order process |  | 2.02.20160513 |
| AllocationInstance | Guid[] | The BrickIds of the associated allocation instance if any. An allocation instance is created when implementing a new allocation model in the user interface of BFS |  | 2.02.20160513 |
| AllocationOrder | Guid[] | The BrickIds of any associated Allocation Orders |  | 2.02.20160513 |
| ExecutionInterface | Guid[] | The BrickId of any associated Execution Interface |  | 2.02.20160513 |
| ExecutionInterfaceKey | String[] | The key name of any associated Execution Interface |  | 2.02.20160513 |
| CreatedDateFrom | DateTime | When used, both from date and to date should be provided in the request |  |  |
| CreatedDateTo | DateTime |  |  |
| SellType | string | Filter by the value that indicates whether the sell is a short sell or not. Can be on of the following values: "UNDI", "SELL", "SSEX", "SESH" | false | This property will be deprecated as of verson 2.29 and ShortSellingIndicator should be used instead.2.12 |
| DecisionMakerWithinFirm | Guid | Filter by the BrickId of the person that decided to place the order that led to the deal. | false | 2.12 |
| OrderTypeKeys | string[] | Filter on OrderTypeKeys (for Internal and manual orders) |  | 2.22 |
| Resellers | Guid[] | Filter by reseller ids | false | 2.23 |
| ShortSellingIndicator | Enum | TRS property. The short selling indicator is used in TRS reporting to define if a trade of the type Sell was a short sale or not. The allowed values are:SESH = Short sale with no exemptionSELL = No short sale, selling a current positionSSEX = Short sale with exemptionUNDI = Information not availableNotApplicable = This can be used if the order was a buy order and the short sale indicator is not applicable. This will be set by default by BFS for any Buy orders. |  | 2.27 |
| FourEyesStatus | Enum | The allowed values are:UnApproved = Waiting for approvalsApproved = The order has been approvedInProgress = Approval process is in progress and waiting for all approvals to be finished |  | 2.27 |
| SubscriptionOrderId | Guid[] | Filter by array of SubscriptionOrderId |  | 2.30 |

## Response rows (Array)

| Name | Type | Description | Available from version |
|---|---|---|---|
| BrickId | Guid | The BrickId of the trade order |  |
| TradeOrderType | String | The type of the order |  |
| Account | Guid | The trade order's associated account |  |
| CashAmount | Decimal | The amount in cash |  |
| InstrumentAmount | Decimal | The amount in units |  |
| TradeOrderDirectionKey | String | "Buy" or "Sell" |  |
| Instrument | Guid | The associated instrument |  |
| Cash | Guid | The associated Cash |  |
| Price | Double | The price of the trade order |  |
| State | String | The current state of the trade order |  |
| IsUnitOrder | Bool | True if the order is traded in units |  |
| OrderNo | String | The order number of the trade order |  |
| LimitPrice | Decimal | The limit price of the trade order |  |
| CashTradeDate | DateTime | The date when the trade was executed | 2.02.20160422 |
| CashSettlementDate | DateTime | The date the trade order was settled | 2.02.20160422 |
| InstrumentTradeDate | DateTime | The date when the trade was executed | 2.02.20160422 |
| InstrumentSettlementDate | DateTime | The date the instrument units was settled | 2.02.20160422 |
| ExternalReference | String | External reference on the order |  |
| OrderSettlementType | Enum | Order settlement type is only applicable for orders with the Internal execution interface.PAYMENTCONFIRMATIONPRICE (Not supported) | 2.02 |
| ExecutionInterfaceKey | String | The key name of the associated execution interface | 2.02 |
| ExecutionInterface | Guid | The BrickId of the execution interface | 2.02 |
| AllocationOrder | Guid | The BrickId of the associated Allocation Order if any | 2.02 |
| AllocationInstance | Guid | The BrickId of the associated allocation instance if any. An allocation instance is created when implementing a new allocation model in the user interface of BFS | 2.02 |
| CreatedDate | DateTime | The timestamp of when the order was created | 2.02 |
| IsPrePayed | Bool | True if the order follows the pre pay order process | 2.02 |
| ExternalFundBatchOrder | Guid | The BfsId of any associated ExternalFundBatchOrder | 2.02.20160422 |
| FundBatchOrder | Guid | The BfsId of any associated FundBatchOrder. FundBatchOrders is a legacy property which is used for batch orders with regards to the Execution Interface called MFEX. If a TradeOrder is created with Execution Interface set to MFEX and the TradeOrders are batched together for sending one order to MFEX a FundBatchOrder will be created. | 2.32 |
| DisplayPercentagePrice | Bool | If price is in persentage of MinimumLotSize | 2.02 |
| CustomFields | Object[] | CustomFields is an array of CustomField objects. Each CustomField consists of two strings, FieldName and Value. There are no datatypes associated with these properties, they are just a way for api-users to add custimized data to the object. | 2.09 |
| IsNominalValueOrderEntry | Bool | Indicates whether the order is a nominal value order or not. | 2.12 |
| SellType | string | The value that indicates whether the sell is a short sell or not. Can be on of the following values: "UNDI", "SELL", "SSEX", "SESH" | 2.12 |
| DecisionMakerWithinFirm | Guid | The BrickId of the person that decided to place the order that led to the deal. | 2.12 |
| FeeAmount | Decimal | The total sum of fees on the order | 2.21.1 |
| OrderFeeCategories | OrderFeeCategory[] | Array of OrderFeeCategories. Each OrderFeeCategory consists of:decimal Amountdouble? Percentagestring Keystring TypeKeydecimal MinAmountbool ApplyDiscountGuid? FeeAccountGuid? ToCustodyAccountGuid? FromCustodyAccountbool? HasCreatedTransactionsdecimal CalculatedAmountLabel[] LabelsLabel consists of:string LabelKeystring LabelValue | 2.21.1; Labels from 2.22 |
| OrderTypeKey | string | OrderTypeKey for Internal and Manual orders |  |
| Reseller | Guid | The reseller of the order | 2.23 |
| FilledCashAmount | decimal | If the orders is filled, this is the amount of cash that is filled. | 2.26 |
| FilledInstrumentAmount | decimal | If the orders is filled, this is the amount of instrument units that is filled. | 2.26 |
| FourEyesStatus | Enum | The allowed values are:UnApproved = Waiting for approvalsApproved = The order has been approvedInProgress = Approval process is in progress and waiting for all approvals to be finished | 2.27 |
| SubscriptionOrderId | Guid | The Id of the Subscription Order | 2.30 |
| BusinessEventId | Guid | The Guid of the associated business event to the order. | 2.40 |
| NoteId | Guid | The Guid of the associated trade note to the order. | 2.40 |

## Code examples

### **C# with**

```csharp
//Use the GetTradeOrders method to get all trading related orders with a certain reference in the BFS instance and write
//the information in the console
var client = new BFSServiceReference.bfsapiSoapClient();

var credentials = new BFSServiceReference.Credentials()
{
    UserName = bfsusername, //Username of administrative user in your instance of BFS
    Password = bfspassword, //Password of the administrative user in your instance of BFS
};

var accounttypes = client.GetTradeOrders(new BFSServiceReference.GetTradeOrdersRequest()
{
    Credentials = credentials,

    identify = bfsidentifier, //Identifier is a unique token for your instance of BFS  

    Args = new GetTradeOrdersArgs()
    {
        ExternalReference = "MyTestOrder"

    },

    Fields = new BFSServiceReference.GetTradeOrderFields()
    {
        BrickId = true,
        TradeOrderType = true,
        Account = true,
        CashAmount = true,
        InstrumentAmount = true,
        TradeOrderDirectionKey = true,
        Instrument = true,
        Cash = true,
        Price = true,
        State = true,
        IsUnitOrder = true,
        OrderNo = true,
        LimitPrice = true,
        CashTradeDate = true,
        CashSettlementDate = true,
        InstrumentTradeDate = true,
        InstrumentSettlementDate = true,
        ExternalReference = true,
        OrderSettlementType = true,
        ExecutionInterfaceKey = true,
        AllocationOrder = true,
        AllocationInstance = true,
        CreatedDate = true,
        ExecutionInterface = true,
        IsPrePayed = true,
        ExternalFundBatchOrder = true,
    },
});

foreach (var c in accounttypes.Result)
{
    Console.WriteLine(c.BrickId + ","
        + c.TradeOrderType
        + ","
        + c.Account
        + ","
        + c.CashAmount
        + ","
        + c.InstrumentAmount
        + ","
        + c.TradeOrderDirectionKey
        + ","
        + c.Instrument
        + ","
        + c.Cash
        + ","
        + c.Price
        + ","
        + c.State
        + ","
        + c.IsUnitOrder
        + ","
        + c.OrderNo
        + ","
        + c.LimitPrice
        + ","
        + c.CashTradeDate
        + ","
        + c.CashSettlementDate
        + ","
        + c.InstrumentTradeDate
        + ","
        + c.InstrumentSettlementDate
        + ","
        + c.ExternalReference
        + ","
        + c.OrderSettlementType
        + ","
        + c.ExecutionInterfaceKey
        + ","
        + c.ExecutionInterface
        + ","
        + c.AllocationOrder
        + ","
        + c.AllocationInstance
        + ","
        + c.CreatedDate
        + ","
        + c.IsPrePayed
        + ","
        + c.ExternalFundBatchOrder

        );
}
```
