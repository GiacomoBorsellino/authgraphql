// Import apollo server
import { ApolloServer } from 'apollo-server';

// Import dei typeDefs e dei resolvers
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';

// Import Middleware
import { middleware } from './middleware/middleware';

// Import GraphQL-Middleware
import { makeExecutableSchema } from '@graphql-tools/schema'
import { applyMiddleware } from 'graphql-middleware'

// Schema
const schema = makeExecutableSchema({ typeDefs, resolvers })

// Schema + Middleware
const schemaWithMiddleware = applyMiddleware(schema, middleware.checkToken) // middleware.checkToken

// Instanziamento Server + context
const server = new ApolloServer({
    schema: schemaWithMiddleware,
    context: (req) => {
        let body: any = req.req.body;
        let headers: any = req.req.headers;
        // console.log('In Context - Token: ', headers.authorization)
        // console.log('In Context - Body: ', body)
        return [headers, body]
    }
})

// ...in ascolto
server.listen().then(({ url }) => {
    console.log(`Welcome in my dungeon, fellow undead...: ${url}`);
})   