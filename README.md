# Autenticación con JWT y Cosmos DB

[![Build Status](https://dev.azure.com/JhosetpFrancisco/Node%20Proyect/_apis/build/status/jf-node-auth-cosmosdb-sql%20-%20CI?branchName=master)](https://dev.azure.com/JhosetpFrancisco/Node%20Proyect/_build/latest?definitionId=6&branchName=master)

<!-- Insertar HTML en un archivo Markdown no es legal >:v -->
<div style="margin-bottom: 10px;">
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

Este es un ejemplo de un servicio de autenticación usando Node, Typescript, Express y Azure Cosmo DB.
**OBS: Este proyecto funciona con la versión SQL API del Cosmo DB.**

### Configuración del proyecto

Primero clonamos el repositorio localmente:

```
git clone https://github.com/JhosetFrancisco/Node-AuthJwtWithCosmosDB.git
```

Ingresamos al archivo `config/index.ts` y editamos los parámetros de conexión a nuestro Azure CosmosDB. 

* `endpoint` -> Url de conexión
* `key` -> Llave de conexión
* `databaseId` -> Nombre de la base de datos
* `containerId` -> Nombre del contenedor


### Despliegue del servidor de manera local

Instalamos las dependencias:

```
npm install
```

Construimos el proyecto Typescript:

```
npm run build
```

Ejecutamos el proyecto de manera local:

```
npm run start
```

### Notas

Este proyecto cuenta con cuatro metodos REST:

* Index `/`

```http
GET / HTTP/1.1
Host: localhost:3000
```

```javascript
[RESPONSE]
{
    "ok": true,
    "statusCode": 200,
    "mensaje": "Auth JWT with Cosmos DB - By Jhosetp Chino"
}
```

* Testing de la ruta `/user`

```http
GET /user/test HTTP/1.1
Host: localhost:3000
```

```javascript
[RESPONSE]
{
    "ok": true,
    "statusCode": 200,
    "mensaje": "Todo Ok"
}
```

* Creando Usuario `/user/create`

```http
POST /user/create HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded

nombre="your-name-here"
&email="your-email-here"
&password="your-password-here"
```

```javascript
[RESPONSE]
{
    "ok": true,   
    "statusCode": 200,
    "token": "here-is-the-token",
}
```

* Ingresando un usuario `/user/login`

```http
POST /user/login HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded

email="your-email-here"
&password="your-password-here"
```

```javascript
[RESPONSE]
{
    "ok": true,   
    "statusCode": 200,
    "token": "here-is-the-token",
}
```

OBS: Este proyecto se encuentra en su versión Alfa 0.1 (Inicializando su estructura). Con forme esté utilizando esta herramienta ire agregando el resto de funcionalidades como el `[POST] /user/update` y  `[GET] /user/info`. 