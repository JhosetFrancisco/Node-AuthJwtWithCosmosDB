import { Router, Request, Response  } from "express";
import { container } from "../database";
import bcrypt from 'bcrypt';
import { Token } from "../classes/token";
import { verificaToken } from "../middlewares/auth";

const userRoutes = Router();

userRoutes.get('/test', (req: Request, res: Response) => {
    res.json({
        ok: true,
        statusCode: 200,
        mensaje: 'Todo Ok'
    })
});

userRoutes.post('/create', (req: Request, res: Response) => {
    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }
    
    container.items.create(user).then((ItemResponse) => {
        const userDB = ItemResponse.resource!;
        const tokenUser =Token.getJwtToken({
            id: userDB.id
        });

        res.json({
            ok: true,   
            statusCode: 200,
            token: tokenUser,
        })
    }).catch((err) => {
        res.json({
            ok: false,
            statusCode: 500,
            mensaje: err
        })
    });
});

userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;

    const querySpec = {
        query: `SELECT * from c where c.email="${body.email}"`
    };
    
    container.items.query(querySpec).fetchAll().then((FeedResponse) => {
        const userDB = FeedResponse.resources[0];
        if(typeof userDB != "undefined") {
            if(bcrypt.compareSync(body.password, userDB.password)) {
                const tokenUser =Token.getJwtToken({
                    id: userDB.id
                });

                res.json({
                    ok: true,   
                    statusCode: 200,
                    token: tokenUser,
                })
            }
            else {
                res.json({
                    ok: false,
                    statusCode: 400,
                    mensaje: '¡Usuario/Contraseaa no válida!'
                })
            }
        }
        else {
            res.json({
                ok: false,
                statusCode: 400,
                mensaje: '¡Usuario/Contraseaa no válida!'
            })
        }
    }).catch((err) => {
        res.json({
            ok: false,
            statusCode: 400,
            mensaje: err
        })
    });
});

userRoutes.post('/update', verificaToken, (req: any, res: Response) => {
    const user = {
        nombre: req.body.nombre,
        email: req.body.email
    }
    console.log(container.item("4b31431a-0e02-40c0-8377-f0f592453de8").read());
    container.item('7c86af04-bc5d-43e7-b6dd-46d8f9244de7').replace(user).then((exito) => {
        console.log(exito);
        res.json({  
            ok: true,
            statusCode: 200,
            mensaje: 'Actualizado con exito'
        });
    }).catch((err) => {
        console.log(err);
        res.json({  
            ok: false,
            statusCode: 500,
            mensaje: err
        })
    });
});

export default userRoutes;