import Server from "./classes/server";
import indexRoute from "./routes";
import userRoutes from "./routes/user";
import bodyParser from 'body-parser';
import cors from 'cors';
// Declaración del Server
const server = new Server();
// Usando BodyParser
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());
// Configurar CORS
server.app.use(cors({ origin: true, credentials: true }));
// Agregando las rutas
server.app.use('/', indexRoute);
server.app.use('/user', userRoutes);
// Iniciando el servicio
server.start(() => {
    console.log(`Servidor corriendo en el pouerto ${server.port}`);
});