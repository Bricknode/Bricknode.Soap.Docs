# CreateBusinessTransactions

Posibility to create transactions: super transactions and their children business transactions.

## Inputs (Array of SuperTransactions) inherits from [EntityBase](https://bricknode.atlassian.net/wiki/display/API/EntityBase)

| Name | Type | Description | Mandatory | Available as of version |
|---|---|---|---|---|
| BusinessTransactions | BusinessTransaction[] | See table below |  |  |
| InsurancePolicy | Guid | The Guid of the insurance policy for the super transaction |  | 2.02 |
| InsuranceClaim | Guid | The Guid of the insurance claim for the super transaction |  | 2.02 |
| Batch | Guid | The Guid of the batch for the super transaction |  | 2.09 |
| BusinessEventId | Guid | The Guid of the business event that the super transaction should be connected to. By associating a super transaction to a business event it is possible to include them in various GUI views, for example for corporate actions or other events. |  | 2.27 |
| OrderId | Guild | The Guid of the order that the super transaction should be connected to.After associating a super transaction to a order, the business transactions inside will be shown with a direct link to the order in the admin UI. |  | 2.40 |
| NoteId | Guid | The Guid of the note that the super transaction should be connected to. When a link between a node and a transaction is specified then the transaction will be listed on the trade note generated into a PDF. |  | 2.40 |

## Inputs (Array of BusinessTransactions) inherits from [EntityBase](https://bricknode.atlassian.net/wiki/display/API/EntityBase)

> CustomFields entered on BusinessTransactions are not being saved (use CustomFields on the SuperTransaction to store that type of data which then can be retrieved using GetBusinessTransactions). From version **2.39** the CustomFields you enter on the individual Business Transaction will be saved on that particular Business Transaction. It will as before be possible to add CustomFields on the Super Transaction, as well.

| Name | Type | Description | Mandatory | Available as of version |
|---|---|---|---|---|
| BrickId | Guid | Not used. |  |  |
| Account | Guid | The Guid of the account where the transaction should be created. Empty guid is not allowed | True |  |
| BusinessTransactionType | string | Empty string is not allowed | True |  |
| TransactionReference | string | Transaction reference (This will show on the customer front in the section called "Comment") |  |  |
| Asset1 | Guid | The GUID of the asset/financial instrument of the first leg of the transaction |  |  |
| Asset2 | Guid | The GUID of the asset/financial instrument of the second leg of the transaction |  |  |
| AmountAsset1 | decimal | The amount of the first leg of the transaction. (Number of decimals allowed is controlled by the number of decimals defined on the Cash object, although minimum 2 and maximum 6 decimals as from version 2.14) |  |  |
| AmountAsset2 | decimal | The amount of the second leg of the transaction |  |  |
| CustodyAccountAsset1 | Guid | The internal id of the custody account of the first leg of the transaction *Obsolete as of version 2.02. Transactions for custody accounts should be created as separate business transactions as of version 2.02.* |  |  |
| CustodyAccountAsset2 | Guid | The internal id of the custody account of the second leg of the transaction *Obsolete as of version 2.02. Transactions for custody accounts should be created as separate business transactions as of version 2.02.* |  |  |
| TradeDate | DateTime | Trade date |  |  |
| SettlementDate | DateTime | Settlement date |  |  |
| ValueDate | DateTime | Value date |  |  |
| Price | double | Price. Below zero is not allowed |  |  |
| AcquisitionValue | double | Acquisition value |  |  |
| AcquisitionValueAccountCurrency | double | The acquisition value expressed in the account currency. |  |  |
| SettlementType | string | Settlementtype, could be "Internal" or "External". "Internal" is default. *Obsolete as of version 2.02. Transactions for custody accounts should be created as separate business transactions as of version 2.02.* |  |  |

## Response rows

No entities is returned in the response due to internal limitations in BFS.

## Code examples
  
### C# - Create Business Transactions

```csharp
//Create a business event for a deposit with four business transactions using the CreateBusinessTransaction method
var client = new BFSServiceReference.bfsapiSoapClient();

var credentials = new BFSServiceReference.Credentials()
{
    UserName = bfsusername, //Username of administrative user in your instance of BFS
    Password = bfspassword, //Password of the administrative user in your instance of BFS
};

var response = client.CreateBusinessTransactions(new BFSServiceReference.CreateBusinessTransactionRequest()
{
    Credentials = credentials,

    identify = bfsidentifier, //Identifier is a unique token for your instance of BFS        

    Entities = new[]
    {
        new SuperTransaction()
        {
            BusinessTransactions = new BusinessTransaction[]
            {
                //Transaction for customer BFS-account
              new BusinessTransaction()
              {
                  Account = new Guid("cbfe4a0d-bf05-4a7e-bdc8-1ee809817bee"),
                  BusinessTransactionType = "Default_Transfer_Trade_Cash",
                  TransactionReference = "Test",
                  Asset1 = new Guid("21b0718c-bce9-4c6b-b1c9-520b65121ff6"),
                  AmountAsset1 = 100M,
                  //Since the transaction type is for only the Trade dimension as suggested by the transaction name 
                  TradeDate = DateTime.Parse("2016-04-18")
              },
              //Transaction for customer BFS-account
              new BusinessTransaction()
              {
                  Account = new Guid("cbfe4a0d-bf05-4a7e-bdc8-1ee809817bee"),
                  BusinessTransactionType = "Default_Transfer_Settle_Cash",
                  TransactionReference = "Test",
                  Asset1 = new Guid("21b0718c-bce9-4c6b-b1c9-520b65121ff6"),
                  AmountAsset1 = 100M,
                  //Since the transaction type is for only the Settle dimension as suggested by the transaction name 
                  SettlementDate = DateTime.Parse("2016-04-18"),
                  ValueDate = DateTime.Parse("2016-04-18")
              },
              //Transaction for house Custody account
              new BusinessTransaction()
              {
                  Account = new Guid("25c7b534-c2b6-47a9-a3df-1dcc88b1f49c"),
                  BusinessTransactionType = "Default_Transfer_Trade_Cash",
                  TransactionReference = "Test",
                  Asset1 = new Guid("21b0718c-bce9-4c6b-b1c9-520b65121ff6"),
                  AmountAsset1 = 100M,
                  //Since the transaction type is for only the Trade dimension as suggested by the transaction name 
                  TradeDate = DateTime.Parse("2016-04-18")
              },
              //Transaction for house Custody account
              new BusinessTransaction()
              {
                  Account = new Guid("25c7b534-c2b6-47a9-a3df-1dcc88b1f49c"),
                  BusinessTransactionType = "Default_Transfer_Settle_Cash",
                  TransactionReference = "Test",
                  Asset1 = new Guid("21b0718c-bce9-4c6b-b1c9-520b65121ff6"),
                  AmountAsset1 = 100M,
                  //Since the transaction type is for only the Settle dimension as suggested by the transaction name 
                  SettlementDate = DateTime.Parse("2016-04-18"),
                  ValueDate = DateTime.Parse("2016-04-18")
              },
            },
        },                    
    }

});

Console.WriteLine(response.Message);
```