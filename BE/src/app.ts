// Import di Apollo server
import { ApolloServer } from 'apollo-server';
// Import dei typeDefs e dei resolvers
import { typeDefs } from './schema/typeDefs';
import { resolvers } from './schema/resolvers';
// Instanziamento del server apollo
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Welcome in my dungeon, fellow undead...: ${url}`);
})                    