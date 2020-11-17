import { Router, Request, Response  } from "express";
// Index router - https://custom_url.com/
const indexRoute = Router();

indexRoute.get('/', (req: Request, res: Response) => {
    res.json({
        ok: true,
        statusCode: 200,
        mensaje: 'Auth JWT with Cosmos DB - By Jhosetp Chino'
    })
})

export default indexRoute;