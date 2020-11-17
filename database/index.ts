import { Container, CosmosClient, Database } from '@azure/cosmos';
import config from '../config';
// Declaración directa de los parametros para la conexión al Cosmos DB
// Recomendable realizar llamadas de variables de entorno
// Estos parámetros son para testing, la llave puede estar en deshuso
const endpoint:string = config.endpoint;
const key:string = config.key;
const databaseId:string = config.databaseId;
const containerId:string = config.containerId;
// Declarando Objetos necesarios
const client:CosmosClient = new CosmosClient({ endpoint, key });
const database:Database = client.database(databaseId);
const container:Container = database.container(containerId);

export { client, database, container };