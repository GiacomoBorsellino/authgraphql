// Import
const jwt = require("jsonwebtoken"); // Ricorda di importare così, sennò non funzionerà !
import { permessi } from '../permessi/permessi';
import { secret } from '../../config/jwt.conf';
import { PrismaClient } from '@prisma/client'

// Instanziamento Prisma Client
const prisma = new PrismaClient()

// Middleware controllo Token
const checkToken = async (resolve, root, args, context, info) => {
    console.log('================= IN MIDDLEWARE CHECKTOKEN');

    // log di controllo
    // console.log('MID 1: ', resolve);
    // console.log('MID 2: ', root);
    // console.log('MID 3: ', args);
    // console.log('MID 4: ', context);
    // console.log('MID 5: ', info);
    // console.log('MID 6: ', info.fieldName);
    // console.log('MID 7: ', context[1].tag);            

    /*
        Controllo della chiamata attraverso i permessi: 
        1. Se bisogna fare un controllo del token
        2. Quali ruoli può fare la chiamata
    */
    let tagResolver = context[1].operationName
    let rolesRoute: string[];
    let checkField: boolean
    permessi.forEach((field) => {
        if (field.operationName === tagResolver) {
            checkField = field.checkToken;
            rolesRoute = field.roles;
        }
    })

    if (!checkField) {
        const result = await resolve(root, args, context, info)
        console.log('================= IN MIDDLEWARE 1 - Permesso di saltare il controllo del token');
        return result
    } else {
        console.log('================= IN MIDDLEWARE 1 - Controllo del token');
        // Token da FE
        let token = context[0].authorization;
        // Dati Utente da FE
        let userData = JSON.parse(context[0].userdata);

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

        // Controllo se l'utente appartiene ai gruppi che posso fare la chiamata
        let isInGroup = rolesRoute.includes(gruppo.descrizione)

        if (decoded.id === userData.id || isInGroup) {
            const result = await resolve(root, args, context, info)
            console.log('================= IN MIDDLEWARE 2 - Utente può fare la chiamata');
            return result
        } else {
            console.log('================= IN MIDDLEWARE 2 - Utente non autorizzato fare la chiamata');
            throw new Error('Non sei autorizzato ad effettuazre questa operazione');
        }
    }

}

const middleware = {
    checkToken: checkToken
}

export { middleware };