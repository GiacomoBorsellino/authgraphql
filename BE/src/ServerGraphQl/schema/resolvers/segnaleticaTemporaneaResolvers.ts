import { db } from "../../../config/dbConfig";

const querySegnaleticaTemporanea = {
  async getCountSegnaleticaTemporanea(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    // console.log("================= IN SEGNALetica temporanea: ");

    // Numero Segnaletica temporanea Attiva
    const count = await db.gsfi_catasto.tab27C_segn_vert_temp.count({
      where: {
        NOT: [
          {
            data_dismissione: null,
          },
        ],
      },
    });

    // Controllo e return dati
    if (count !== undefined) {
      return count;
    } else {
      console.log("Nessuna lista");
      // Return error
      throw new Error("Nessuna lista");
    }
  },
};

const mutationSegnaleticaTemporanea = {};

const segnaleticaTemporaneaResolvers = {
  querySegnaleticaTemporanea: querySegnaleticaTemporanea,
  mutationSegnaleticaTemporanea: mutationSegnaleticaTemporanea,
};

export { segnaleticaTemporaneaResolvers };
