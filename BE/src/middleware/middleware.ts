const checkToken = async (resolve, root, args, context, info) => {
    if (context.authorization == "sono_il_token_123") {
        const result = await resolve(root, args, context, info)
        console.log(result);

        console.log(`il token è corretto`)
        return result
    } else {
        console.log(`il token NON è corretto`)
        throw new Error('Il token NON è corretto');
    }
}

const middleware = {
    checkToken: checkToken
}

export { middleware };