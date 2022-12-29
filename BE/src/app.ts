// // Import di Apollo server
// import { ApolloServer } from 'apollo-server';
// // Import dei typeDefs e dei resolvers
// import { typeDefs } from './schema/typeDefs';
// import { resolvers } from './schema/resolvers';

// // Instanziamento del server apollo
// const server = new ApolloServer({
//     typeDefs, resolvers,
//     context: ({ req }) => {
//         let headers: any = req.headers
//         console.log(headers)
//         return headers
//     },
// });

// server.listen().then(({ url }) => {
//     console.log(`Welcome in my dungeon, fellow undead...: ${url}`);
// })

// Import di Apollo server

import { ApolloServer } from 'apollo-server';
// Import dei typeDefs e dei resolvers
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';
// Import Middleware

// Import GraphQL-Middleware
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'

// Middleware
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

const schema = makeExecutableSchema({ typeDefs, resolvers })

const schemaWithMiddleware = applyMiddleware(schema, checkToken)

const server = new ApolloServer({
    schema: schemaWithMiddleware,
    context: (req) => {
        let headers: any = req.req.headers
        console.log('In Context: ', headers.authorization)
        return headers
    }
})

server.listen().then(({ url }) => {
    console.log(`Welcome in my dungeon, fellow undead...: ${url}`);
})   