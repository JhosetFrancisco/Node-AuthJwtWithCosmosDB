import Server from "./classes/server";
import indexRoute from "./routes";
import userRoutes from "./routes/user";
import bodyParser from 'body-parser';

const server = new Server();

server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json());

server.app.use('/', indexRoute);
server.app.use('/user', userRoutes);

server.start(() => {
    console.log(`Servidor corriendo en el pouerto ${server.port}`);
});