/* =================================== GRAPHQL CONFIG =========================================== */

// Import apollo server
import { ApolloServer } from 'apollo-server';

// Import dei typeDefs e dei resolvers
import { typeDefs } from './ServerGraphQl/schema/typeDefs';
import { resolvers } from './ServerGraphQl/schema/resolvers';

// Import Middleware
import { middleware } from './ServerGraphQl/middleware/middleware';

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

// ...in ascolto su Porta 4000
server.listen().then(({ url }) => {
  console.log(`
    .---------.
    |.-------.|
    ||>run#  ||
    ||4000   ||
    |"-------'|
  .-^---------^-.
  | ---~ GraphQl|
  "-------------'`);
})

/* =================================== API REST CONFIG =========================================== */

// API Config - Import Express, Cors, BodyParser
import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';
const bodyParser = require('body-parser');

// Import Routes
import { router as apiTest } from "./ServerRest/modules/apiTest/apiTest.routes"

const app: express.Application = express();

app.use(cors())
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API-BE Attivo' });
});

// Routes
app.use('/', apiTest)

// ...in ascolto su Porta 3000
app.listen(3000, () => {
  console.log(`
    .---------.
    |.-------.|
    ||>run#  ||
    ||3000   ||
    |"-------'|
  .-^---------^-.
  | ---~ ApiRest|
  "-------------'`);
});