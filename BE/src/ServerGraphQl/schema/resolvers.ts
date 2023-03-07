// Import Resolvers
import { genericResolvers } from "./resolvers/genericResolvers";
import { utentiResolvers } from "./resolvers/utentiResolvers";
import { segnalazioniResolvers } from "./resolvers/segnalazioniResolvers";
import { segnaleticaTemporaneaResolvers } from "./resolvers/segnaleticaTemporaneaResolvers";
import { segnalazioniGeticoResolvers } from "./resolvers/segnalazioniGeticoResolvers";

const resolvers = {
  Query: {
    ...genericResolvers.queryGeneric,
    ...utentiResolvers.queryUtenti,
    ...segnalazioniResolvers.querySegnalazioni,
    ...segnaleticaTemporaneaResolvers.querySegnaleticaTemporanea,
    ...segnalazioniGeticoResolvers.querySegnalazioniGetico,
  },
  Mutation: {
    ...genericResolvers.mutationGeneric,
    ...utentiResolvers.mutationUtenti,
    ...segnalazioniResolvers.mutationSegnalazioni,
    ...segnaleticaTemporaneaResolvers.mutationSegnaleticaTemporanea,
    ...segnalazioniGeticoResolvers.mutationSegnalazioniGetico,
  },
};

export { resolvers };
