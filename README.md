# azf-shared-topic-to-db

Save all messages from a tobic to db

## Azure

You'll need a valid subscription and to setup the following resources

- resource group
- app service plan
- storage account
- servicebus namespace
- servicebus topic
- cosmosDB with MongoDB adapter

### Setup function

The easiest way to make this function run is to setup an app service, configure the app and get the function from GitHub.

- add function app
  - Runtime stack -> Node

Configuration for app (Application settings)
```
COSMOSDB_CONNECTION=mongodb://<your-cosmosdb-connection-string-including-db-name>
COSMOSDB_COLLECTION=cosmosdb-database-collection-name
SERVICEBUS_CONNECTION=sb-sharedaccesspolicies-rootmanagesharedaccesskey-primaryconnectionstring
SERVICEBUS_TOPIC_NAME=name-for-topic-to-subscribe-to
```

- add function
  - Plattform features -> deployment center
  - github
  - branch master

## Setup development

`local.settings.json`

```JavaScript
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "<storage-accesskeys-key1-connectionstring>",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "COSMOSDB_CONNECTION": "mongodb://<your-cosmosdb-connection-string-including-db-name>",
    "COSMOSDB_COLLECTION": "cosmosdb-database-collection-name",
    "SERVICEBUS_CONNECTION": "<sb-sharedaccesspolicies-rootmanagesharedaccesskey-primaryconnectionstring>",
    "SERVICEBUS_TOPIC_NAME": "<name-for-topic-to-subscribe-to>"
  }
}
```

# License

[MIT](LICENSE)