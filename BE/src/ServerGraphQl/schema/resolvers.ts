// Import Resolvers
import { genericResolvers } from "./resolvers/genericResolvers";
import { utentiResolvers } from "./resolvers/utentiResolvers";
import { segnalazioniResolvers } from "./resolvers/segnalazioniResolvers";

const resolvers = {
  Query: {
    ...genericResolvers.queryGeneric,
    ...utentiResolvers.queryUtenti,
    ...segnalazioniResolvers.querySegnalazioni,
  },
  Mutation: {
    ...genericResolvers.mutationGeneric,
    ...utentiResolvers.mutationUtenti,
    ...segnalazioniResolvers.mutationSegnalazioni,
  },
};

export { resolvers };
