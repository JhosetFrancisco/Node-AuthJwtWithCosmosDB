import { Container, CosmosClient, Database } from '@azure/cosmos';
// Declaración directa de los parametros para la conexión al Cosmos DB
// Recomendable realizar llamadas de variables de entorno
// Estos parámetros son para testing, la llave puede estar en deshuso
const endpoint:string = "https://jf-database.documents.azure.com:443/";
const key:string = "jF5AbK4Bt05i6EYQkcUFqiFQGV72ClwNJBVXxBgTREsKfDQdL0zcEsqgfgEbvoRLFKZlBIPDWKJDojLdtGn2nA==";
const databaseId:string = "JF_Test";
const containerId:string = "Usuario";
// Declarando Objetos necesarios
const client:CosmosClient = new CosmosClient({ endpoint, key });
const database:Database = client.database(databaseId);
const container:Container = database.container(containerId);

export { client, database, container };