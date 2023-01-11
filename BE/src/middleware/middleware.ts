// Import permessi
import { permessi } from '../permessi/permessi';
import { secret } from '../config/jwt.conf';
const jwt = require("jsonwebtoken"); // Ricorda di importare così, sennò non funzionerà !

const checkToken = async (resolve, root, args, context, info) => {
    // console.log('================= IN MIDDLEWARE');

    // Controllo permessi
    // console.log('MID 1: ', resolve);
    // console.log('MID 2: ', root);
    // console.log('MID 3: ', args);
    // console.log('MID 4: ', context);
    // console.log('MID 5: ', info);
    // console.log('MID 6: ', info.fieldName);
    // console.log('MID 0: ', context[1].tag); 

    let tagResolver = context[1].operationName

    let checkField: boolean
    permessi.forEach((field) => {
        if (field.operationName === tagResolver) {
            checkField = field.checkToken;
        }
    })

    if (!checkField) {
        const result = await resolve(root, args, context, info)
        console.log(`Permesso di saltare il controllo del token`)
        return result
    } else {
        let token = context[0].authorization;
        console.log('================= IN MIDDLEWARE 1');
        // let check = false;
        var decoded = jwt.verify(token, secret.secret);
        // console.log('DECOded: ', decoded);

        if (decoded.id === 6) {
            const result = await resolve(root, args, context, info)
            console.log('================= IN MIDDLEWARE 2 - RISULTATO');
            return result
        } else {
            console.log(`il token NON è corretto`)
            throw new Error('Il token NON è corretto');
        }

        // Controllo Authorization-Token
        // await jwt.verify(token, secret.secret, async (err: any, decoded: any) => {
        //     // console.log('ERRORONE: ', err, 'DECODE', decoded);

        //     if (err) {
        //         check = false
        //         console.log(`ERRORE - il token NON è corretto`)
        //         throw new Error('Il token NON è corretto');
        //     } else {

        //         // Comparazione se token è ok
        //         if (decoded.id === 6) {
        //             // /*  */console.log('================= IN BUON ESITO');
        //             // console.log('RISULTATO: ');
        //             // console.log(`il token è corretto`)
        //             // console.log(' opo 1')
        //             const result = await resolve(root, args, context, info)
        //             console.log('================= IN MIDDLEWARE 2 - RISULTATO');
        //             return result
        //         } else {
        //             console.log(`il token NON è corretto`)
        //             throw new Error('Il token NON è corretto');
        //         }
        //     }
        // });

        // if (true) {
        //     const result = await resolve(root, args, context, info)
        //     console.log('================= IN MIDDLEWARE 2 - RISULTATO');
        //     return result
        // } else {
        //     console.log(`il token NON è corretto`)
        //     throw new Error('Il token NON è corretto');
        // }
    }

}

const middleware = {
    checkToken: checkToken
}

export { middleware };