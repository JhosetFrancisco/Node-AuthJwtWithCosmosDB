import { Router, Request, Response  } from "express";

const indexRoute = Router();

indexRoute.get('/', (req: Request, res: Response) => {
    res.json({
        ok: true,
        statusCode: 200,
        mensaje: 'Bienvenido al Auth API :)'
    })
})

export default indexRoute;