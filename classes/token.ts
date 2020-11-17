import jwt from 'jsonwebtoken';
// Declaración de la clase Token, solo se usará los métodos estáticos. 
export class Token {
    // Realice las modificaciones de los parámetros 'seed' y 'caducidad'.
    private static seed: string = 'este-es-el-secret';
    private static caducidad: string = '30d';

    constructor () {}
    // Generador JWT a partir de un payload (en mi caso uso el ID del usuario)
    static getJwtToken(payload:any): string {
        return jwt.sign({
            usuario: payload
        }, this.seed, {expiresIn: this.caducidad});
    }
    // Validador del token
    static comprobarToken(userToken:string) {
        return new Promise((resolve, reject) => {
            jwt.verify(userToken, this.seed, (err, decoded) => {
                if(err) {
                    reject();
                }
                else {
                    resolve(decoded);
                }
            })
        });
    }
}