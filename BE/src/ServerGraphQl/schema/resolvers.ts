// Import Resolvers
import { genericResolvers } from "./resolvers/genericResolvers";
import { utentiResolvers } from "./resolvers/utentiResolvers";
import { segnalazioniResolvers } from "./resolvers/segnalazioniResolvers";
import { segnaleticaTemporaneaResolvers } from "./resolvers/segnaleticaTemporaneaResolvers";

const resolvers = {
  Query: {
    ...genericResolvers.queryGeneric,
    ...utentiResolvers.queryUtenti,
    ...segnalazioniResolvers.querySegnalazioni,
    ...segnaleticaTemporaneaResolvers.querySegnaleticaTemporanea,
  },
  Mutation: {
    ...genericResolvers.mutationGeneric,
    ...utentiResolvers.mutationUtenti,
    ...segnalazioniResolvers.mutationSegnalazioni,
    ...segnaleticaTemporaneaResolvers.mutationSegnaleticaTemporanea,
  },
};

export { resolvers };
