import { CosmosClient } from '@azure/cosmos';

const endpoint:string = "https://jf-database.documents.azure.com:443/";
const key:string = "jF5AbK4Bt05i6EYQkcUFqiFQGV72ClwNJBVXxBgTREsKfDQdL0zcEsqgfgEbvoRLFKZlBIPDWKJDojLdtGn2nA==";
const databaseId:string = "JF_Test";
const containerId:string = "Usuario";

const client = new CosmosClient({ endpoint, key });
const database = client.database(databaseId);
const container = database.container(containerId);

export {container};