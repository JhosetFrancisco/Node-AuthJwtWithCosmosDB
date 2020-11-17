# Autenticación con JWT y Cosmos DB

<div>
    <img src="https://sa2020staticfiles.blob.core.windows.net/img/node-logo.png"
        alt="Node Logo"
        height=60
        style="margin-right: 10px;" />
    <img src="https://sa2020staticfiles.blob.core.windows.net/img/typescript-logo.png"
        alt="Typescript Logo"
        height=60
        style="margin-right: 10px;" />
    <img src="https://sa2020staticfiles.blob.core.windows.net/img/express-logo.png"
        alt="Express Logo"
        height=60
        style="margin-right: 10px;" />
    <img src="https://sa2020staticfiles.blob.core.windows.net/img/azure-cosmos-db-logo.png"
        alt="Azure Cosmos DB Logo"
        height=60
        style="margin-right: 10px;" />
</div>

Este es un ejemplo de un servisio de autenticación usando Node, Typescript, Express y Azure Cosmo DB.

### Configuración del proyecto

Primero debe clonar el repositorio

```
git clone https://github.com/JhosetFrancisco/Node-AuthJwtWithCosmosDB.git
```

Ingresamos al archivo `config/index.ts` y editamos los parámetros de conexión a nuestro Azure CosmosDB

* `endpoint` -> Url de conexión
* `key` -> Llave de conexión
* `databaseId` -> Nombre de la base de datos
* `containerId` -> Nombre del contenedor


### Levantar servidor de manera local

Instalar las dependencias

```
npm install
```

Construir el proyecto Typescript

```
npm run build
```

Correr el proyecto de manera local

```
npm run start
```