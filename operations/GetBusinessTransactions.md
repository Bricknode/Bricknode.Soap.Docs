# GetBusinessTransactions

Retrive business transactions already existing in BFS instance.

## Filter inputs

| Name | Type | Description | Mandatory | Available from version |
|---|---|---|---|---|
| BrickId | Guid[] | Filter by array of BrickIds. BrickId is the internal id of a Business Transaction. |  |  |
| ReturnCalculationType | string[] | "Trade", "Transfer" or "Payment" |  | 2.02.20160506 |
| BusinessTransactionTypeKeys | string[] | Filter by transaction type keys. Filter will combine this with BusinessTransactionTypeIds if used at the same time. |  | 2.12 |
| BusinessTransactionTypeIds | Guid[] | Filter by transaction types. Filter will combine this with BusinessTransactionTypeKeys if used at the same time. |  | 2.03.01 |
| Accounts | Guid[] | Filter by array of Accounts. This is the GUID of the Account which can be retrieved using GetAccounts. |  |  |
| Assets | Guid[] | Filter by array of Assets. This is the GUID of the Asset (financial instrument) which can be retrieved using GetInstruments |  |  |
| AccountDimensionKeys | string[] | A business transaction may consist of two account transactions, one in settle and one in trade. |  |  |
| AccountTypeKeys | string[] | The account type of the account where the transaction was made |  | 2.02 |
| AmountAsset1From | decimal? | When used, both from AmountAsset1 and to AmountAsset1 should be provided in the request |  | 2.02 |
| AmountAsset1To | decimal? |  |
| AmountAsset2From | decimal? | When used, both from AmountAsset2 and to AmountAsset2 should be provided in the request |  | 2.02 |
| AmountAsset2To | decimal? |  |
| TradeDateFrom | DateTime? | When used, both from date and to date should be provided in the request |  |  |
| TradeDateTo | DateTime? |  |  |
| SettlementDateFrom | DateTime? | When used, both from date and to date should be provided in the request |  |  |
| SettlementDateTo | DateTime? |  |  |
| SequenceNoFrom | Int | When used, both from sequence number and to sequence number should be provided in the request |  | 2.02 |
| SequenceNoTo | Int |  |
| CreatedDateFrom | DateTime? | When used, both from date and to date should be provided in the requestBFS will add 1 day and remove 1 second to the given DateTime (on CreatedDateTo) to make sure that all transactions up until the end of the day for the given date is returned. If you supply time yourself you need to take this into account. |  |  |
| CreatedDateTo | DateTime? |  |  |
| BatchIds | Guid[] | Filter by the id of transaction batches |  | 2.03.01 |
| TransactionReferences | string[] | Filter by array of transaction references |  | 2.10 |
| OrderIds | Guid[] | Filter by OrderId |  | 2.12 |
| ReportingTypes | string[] | String representation of the reporting type associated with the transaction through its transaction type |  | 2.12 |
| CorrectionDateFrom | DateTime? | When used, both from date and to date should be provided in the request |  | 2.12 |
| CorrectionDateTo | DateTime? |  | 2.12 |
| SuperTransactionIds | Guid[] | Ids of SuperTransactions for the BusinessTransactions |  | 2.14 |
| SuperTransactionBusinessEventIds | Guid[] | Ids for the BusinessEvents that the SuperTransactions are connected to |  | 2.27 |

## Response rows (Array) inherits from [EntityBase](https://bricknode.atlassian.net/wiki/display/API/EntityBase)

| Name | Type | Description | Available from version |
|---|---|---|---|
| BrickId | Guid[] | The BrickId of the transaction |  |
| SequenceNo | int | Transaction number |  |
| Account | Guid | The GUID of the account where the transaction was made |  |
| AccountTypeKey | string | The account type of the account where the transaction was made | 2.02 |
| Leg1Dimensions | string[] | A business transaction may consist of two account transactions, one in settle and one in trade. |  |
| Leg2Dimensions | string[] | A business transaction may consist of two account transactions, one in settle and one in trade. |  |
| Asset1CurrencyCode | string | The currency code of the first asset in the transaction, the first leg of a trade so to speak |  |
| Asset2CurrencyCode | string | The currency code of the second asset in the transaction, the second leg of a trade so to speak |  |
| Asset1 | Guid | The GUID of the asset/financial instrument of the first leg of the transaction |  |
| Asset2 | Guid | The GUID of the asset/financial instrument of the second leg of the transaction |  |
| NameAsset1 | string | The name of asset1 | 2.02 |
| NameAsset2 | string | The name of asset2 | 2.02 |
| Asset1TypeKey | string | The type of asset1 ("Cash" or "GenericInstrument") | 2.02 |
| Asset2TypeKey | string | The type of asset2 ("Cash" or "GenericInstrument") | 2.02 |
| BusinessTransactionTypeKey | string | The type key of the transaction type that you can get from GetBusinessTransactionTypes |  |
| BusinessTransactionType | Guid | The GUID of the transaction type that you can get from GetBusinessTransactionTypes |  |
| AmountAsset1 | decimal | The amount of the first leg of the transaction |  |
| AmountAsset2 | decimal | The amount of the second leg of the transaction |  |
| InstrumentName | string | The name of Asset2 |  |
| TradeDate | DateTime | The trade date of the transaction |  |
| SettlementDate | DateTime | The settlement date of the transaction |  |
| ValueDate | DateTime | The value date of the transaction |  |
| AccountingDate | DateTime | The accounting date of the transaction |  |
| CreatedDate | DateTime | The timestamp of when the transaction was created |  |
| IsCorrected | bool | If the transaction was corrected by another linked transaction |  |
| CorrectionComment | string | A comment made in conjunction with a correction |  |
| Price | double | The price of Asset 2 |  |
| AcquisitionValue | double | Acquisition Value |  |
| AcquisitionValueAccountCurrency | double | The Acquisition Value expressed in the accounts currency |  |
| ReturnCalculationType | string | "Trade", "Transfer" or "Payment" | 2.02.20160506 |
| TransactionReference | string | The reference text saved on a transaction | 2.02.20160708 |
| SuperTransactionId | Guid | The BrickId of the parent transaction | 2.02.20160708 |
| BatchId | Guid | The id of the transaction batch | 2.03.01 |
| OrderId | Guid | If transaction is associated with an order, the OrderId is returned | 2.12 |
| ReportingType | string | String representation of the reporting type associated with the transaction through its transaction type | 2.12 |
| CorrectionDate | DateTime? | The timestamp of when the transaction was corrected | 2.12 |
| SuperTransactionBusinessEventId | Guid | The id of the business event that the super transaction is connected to. By associating a super transaction to a business event it is possible to include them in various GUI views, for example for corporate actions or other events. | 2.27 |
| SuperTransactionCustomFields | CustomFields[] | The CustomFields that are stored on the SuperTransaction which ties together a number of BusinessTransactions | 2.27 |

## Code examples

### **C# - Get Business Transactions**

```csharp
//Use the GetBusinessTransactions method to get all Business Transactions between certain dates in the BFS instance and write
//the information in the console
var client = new BFSServiceReference.bfsapiSoapClient();
var credentials = new BFSServiceReference.Credentials()
{
    UserName = bfsusername, //Username of administrative user in your instance of BFS
    Password = bfspassword, //Password of the administrative user in your instance of BFS
};
var accounttypes = client.GetBusinessTransactions(new BFSServiceReference.GetBusinessTransactionsRequest()
{
    Credentials = credentials,
    identify = bfsidentifier, //Identifier is a unique token for your instance of BFS  
    
    Args = new GetBusinessTransactionArgs()
    {        
        TradeDateFrom = DateTime.Now.AddDays(-20),
        TradeDateTo = DateTime.Now,
        
    },
    Fields = new BFSServiceReference.GetBusinessTransactionFields()
    {
        SequenceNo = true,
        Account = true,       
        Asset1CurrencyCode = true,
        Asset2CurrencyCode = true,
        Asset1 = true,
        Asset2 = true,
        BusinessTransactionTypeKey = true,
        BusinessTransactionType = true,
        AmountAsset1 = true,
        AmountAsset2 = true,
        InstrumentName = true,
        TradeDate = true,
        SettlementDate = true,
        CreatedDate = true,
        IsCorrected = true,
        CorrectionComment = true,
        Price = true,
        AcquisitionValue = true,
        AcquisitionValueAccountCurrency = true,       
    },
});
foreach (var c in accounttypes.Result)
{
    Console.WriteLine(c.BrickId + "," + c.SequenceNo + "," 
        + c.Account
        + "," 
        + c.Asset1CurrencyCode
        + ","
        + c.Asset2CurrencyCode
        + ","
        + c.Asset1
        + ","
        + c.Asset2
        + ","
        + c.BusinessTransactionTypeKey
        + ","
        + c.BusinessTransactionType
        + ","
        + c.AmountAsset1
        + ","
        + c.AmountAsset2
        + ","
        + c.InstrumentName
        + ","
        + c.TradeDate
        + ","
        + c.SettlementDate
        + ","
        + c.CreatedDate
        + ","
        + c.IsCorrected
        + ","
        + c.CorrectionComment
        + ","
        + c.Price
        + ","
        + c.AcquisitionValue
        + ","
        + c.AcquisitionValueAccountCurrency
        );
}
```
