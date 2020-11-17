import { Router, Request, Response  } from "express";
import { container } from "../database";
import bcrypt from 'bcrypt';
import { Token } from "../classes/token";
import { verificaToken } from "../middlewares/auth";

const userRoutes = Router();
// User Test router - https://custom_url.com/user/test
userRoutes.get('/test', (req: Request, res: Response) => {
    res.json({
        ok: true,
        statusCode: 200,
        mensaje: 'Todo Ok'
    })
});
// User create router - https://custom_url.com/user/create
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
// User login router - https://custom_url.com/user/login
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

export default userRoutes;