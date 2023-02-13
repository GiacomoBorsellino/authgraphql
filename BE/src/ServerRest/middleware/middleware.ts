// Import
const jwt = require("jsonwebtoken"); // Ricorda di importare così, sennò non funzionerà !
import { permessi } from '../permessi/permessi';
import { secret } from '../../config/jwt.conf';
import { PrismaClient } from '@prisma/client'

// Instanziamento Prisma Client
const prisma = new PrismaClient()

// Middleware controllo Token
const checkToken = async (req: any, res: any, next: () => void) => {
    console.log('================= IN MIDDLEWARE REST');
    let token: string = req.headers.authorization;
    let route: string = req.route.path;
    let userData: any = JSON.parse(req.headers.userdata);
    console.log(userData.id);


    // Decrypt Token
    let decoded = await jwt.verify(token, secret.secret);

    const user = await prisma.utenti.findUnique({
        where: {
            id: +decoded.id
        }
    })

    const gruppo = await prisma.gruppo.findUnique({
        where: {
            id: +user.idGruppo
        }
    })
    let permesso = false;
    if (+user.id === + userData.id) {
        for (let i = 0; i < permessi.length; i++) {
            if (permessi[i].route === route) {
                for (let j = 0; j < permessi[i].roles.length; j++) {
                    console.log('zoza', permessi[i].roles[j], 'sos', gruppo.descrizione);
                    if (permessi[i].roles[j] === gruppo.descrizione) {
                        permesso = true;
                        next();
                        break;
                    } else {
                        permesso = false;
                    }
                }
                if (!permesso) {
                    return res.json({
                        success: false,
                        message: 'L\'utente non ha il permesso di accedere'
                    });
                }
            } else {
                console.log('Bad 2')
                return res.json({
                    success: false,
                    message: 'L\'utente non ha il permesso di accedere'
                });
            }
        }
    } else {
        console.log('Bad 1')
        return res.json({
            success: false,
            message: 'L\'utente non ha il permesso di accedere'
        });
    }
}

const middleware = {
    checkToken: checkToken
}

export { middleware };