# How to use C# SDK in your application

The SDK is available in NuGet package [BrickNode.Soap.Sdk](https://www.nuget.org/packages/Bricknode.Soap.Sdk/).

## How to get started?

Dependency injection is used so simply add the following code to your service collection to add all the BFS API services.

```csharp
_serviceCollection.AddBfsApiClient(bfsApiConfiguration =>
    {
        bfsApiConfiguration.Credentials = new Credentials
        {
            UserName = options.Credentials.UserName,
            Password = options.Credentials.Password
        };
        bfsApiConfiguration.EndpointAddress = options.EndpointAddress;
        bfsApiConfiguration.Identifier = options.Identifier;
    }
);
```

The credentials that you are adding including Username and Password are obtained from Bricknode and once you have an instance running of Bricknode Financial Systems you can create new users in the admin role which can be used to log on to the API.

The EndpointAddress and Identifier are also obtained from Bricknode when your instance is created.

In the classes where you want to use any of the BFS API Services you can then simply inject the services like for example:

```csharp
public class MyClass
{
    private IBfsLegalEntitiesService _bfsLegalEntitiesService;
    
    public MyClass(IBfsLegalEntitiesService bfsLegalEntitiesService)
    {
        _bfsLegalEntitiesService = bfsLegalEntitiesService;
    }
    
    public async Task GetHouseInformation()
    {
         var houseInformation = await _bfsLegalEntitiesService.GetHouseInformationAsync();
    }
}
```

### Multi client support

If you want to target multiple BFS API instances in the same application you can use the multi client feature provided in this package. This feature allows you to inject multiple named BFS clients in the DI container.

```csharp
services.AddMultiBfsApiClient()
    .AddNamedBfsApiClient("client1", configuration =>
    {
        configuration.EndpointAddress = "https://bfs1.bricknode.com/test1/api/bfsapi.asmx";
        configuration.Identifier = "123";
        configuration.Credentials = new Credentials
        {
            UserName = "test1",
            Password = "test1"
        };
    }).AddNamedBfsApiClient("client2", configuration =>
    {
        configuration.EndpointAddress = "https://bfs1.bricknode.com/test2/api/bfsapi.asmx";
        configuration.Identifier = "1234";
        configuration.Credentials = new Credentials
        {
            UserName = "test2",
            Password = "test2"
        };
    }).BuildClients();
```

To target one of the injected BFS clients simply provide the name used when registering the client with AddNamedBfsApiClient() extension method when calling a service method.

```csharp
public class MyClass
{
    private IBfsLegalEntitiesService _bfsLegalEntitiesService;
    
    public MyClass(IBfsLegalEntitiesService bfsLegalEntitiesService)
    {
        _bfsLegalEntitiesService = bfsLegalEntitiesService;
    }
    
    public async Task GetHouseInformation()
    {
        var houseInformation = await _bfsLegalEntitiesService.GetHouseInformationAsync(bfsApiClientName: "client1");
    }
}
```

## Available services

The available services are the following:

- BfsAccountService
- BfsAllocationProfileService
- BfsAssetService
- BfsAuthenticationService
- BfsBankIdService
- BfsBusinessEventService
- BfsCountryService
- BfsCurrencyService
- BfsDealService
- BfsFileService
- BfsInstructionService
- BfsInsuranceService
- BfsLegalEntitiesService
- BfsMessageService
- BfsNoteService
- BfsOrderService
- BfsPositionService
- BfsPowerOfAttorneyService
- BfsPriceService
- BfsReservationService
- BfsTaskService
- BfsTaxService
- BfsTransactionNoteService
- BfsTransactionService
- BfsTransferReceiverService
- BfsTrsService
- BfsWhiteLabelService
- BfsWebhookService

## Console example in .net 6

````csharp
// don't forget to add dependency to Bricknode.Soap.Sdk NuGet package
using BfsApi;
using Bricknode.Soap.Sdk.Extensions;
using Bricknode.Soap.Sdk.Services;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.Abstractions;

var services = new ServiceCollection();
services.AddTransient<ILogger, NullLogger>(_ => NullLogger.Instance);

services.AddBfsApiClient(bfsApiConfiguration =>
    {
        bfsApiConfiguration.Credentials = new Credentials
        {
            UserName = "user",
            Password = "passw0rd"
        };
        bfsApiConfiguration.EndpointAddress = "instance.host/api/bfsapi.asmx";
        bfsApiConfiguration.Identifier = "identifier";
    }
);

var provider = services.BuildServiceProvider();
var userService = provider.GetRequiredService<IBfsLegalEntitiesService>();

Console.WriteLine("Sending request to GetLegalEntities...");

var response = await userService.GetLegalEntitiesAsync(new GetPersonArgs
{
    IsNaturalPerson = true,
    UserDomains = new[] { "bricknode" },
});

Console.WriteLine($"Number of users: {response.Result.Length}");
```
