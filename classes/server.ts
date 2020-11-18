import express from 'express';
// Declaración del Server Express a levantar, port 3000 (puede ser modificable)
export default class Server {
    public app:express.Application;
    public port = process.env.PORT || 3000;

    constructor() {
        this.app = express();
    }

    start(callback: ()=>void) {
        this.app.listen(this.port, callback);
    }
}