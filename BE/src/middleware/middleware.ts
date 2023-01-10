// Import permessi
import { permessi } from '../permessi/permessi';

const checkToken = async (resolve, root, args, context, info) => {
    console.log('In MIDDLEWARE');

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
        // Controllo Authorization-Token
        if (context[0].authorization == "sono_il_token_123") {
            const result = await resolve(root, args, context, info)
            console.log(`il token è corretto`)
            return result
        } else {
            console.log(`il token NON è corretto`)
            throw new Error('Il token NON è corretto');
        }
    }

}

const middleware = {
    checkToken: checkToken
}

export { middleware };