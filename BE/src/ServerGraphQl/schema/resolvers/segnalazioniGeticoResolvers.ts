import { db } from "../../../config/dbConfig";

const querySegnalazioniGetico = {
  async getCountSegnalazioniGetico(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN COUNT GETICO: ");

    // Numero utenti
    const count = await db.avr_main.segnalazione_getico.count({});
    console.log("GETICO: ", count);

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

const mutationSegnalazioniGetico = {};

const segnalazioniGeticoResolvers = {
  querySegnalazioniGetico: querySegnalazioniGetico,
  mutationSegnalazioniGetico: mutationSegnalazioniGetico,
};

export { segnalazioniGeticoResolvers };
