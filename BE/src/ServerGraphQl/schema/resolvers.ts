import { db } from "../../config/dbConfig";
import { secret } from "../../config/jwt.conf";
// VVV Ricorda di importare così, sennò non funzionerà !
const jwt = require("jsonwebtoken");

import { resolversUtenti } from "./resolversUtenti";
import { resolversSegnalazioni } from "./resolversSegnalazioni";
import { resolversGeneric } from "./resolversGeneric";

const resolvers = {
  Query: {
    ...resolversGeneric.queryGeneric,
    ...resolversUtenti.queryUtenti,
    ...resolversSegnalazioni.querySegnalazioni,
  },
  Mutation: {
    ...resolversUtenti.mutationUtenti,
  },
};

export { resolvers };
