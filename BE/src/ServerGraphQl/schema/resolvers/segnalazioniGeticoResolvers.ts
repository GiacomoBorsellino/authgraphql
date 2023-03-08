import { db } from "../../../config/dbConfig";

const querySegnalazioniGetico = {
  async getCountSegnalazioniGetico(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN COUNT GETICO: ");

    // Numero Getico Gestiti
    const countNC = await db.avr_main.segnalazione_getico.count({
      where: {
        flg_stato: "NC",
      },
    });
    const countDV = await db.avr_main.segnalazione_getico.count({
      where: {
        flg_stato: "DV",
      },
    });
    const countIM = await db.avr_main.segnalazione_getico.count({
      where: {
        flg_stato: "IM",
      },
    });

    const count = countNC + countDV + countIM;

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
