import { db } from "../../../config/dbConfig";

const querySegnalazioniGetico = {
  async getCountSegnalazioniGetico(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN COUNT GETICO: ");

    const countTotale = await db.avr_main.segnalazione_getico.count({});

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

    const countIN = await db.avr_main.segnalazione_getico.count({
      where: {
        flg_stato: "IN",
      },
    });

    const countSopralluogoEffettuato =
      await db.avr_main.segnalazione_getico.count({
        where: {
          sopralluogo_effettuato: "true",
        },
      });

    const countSopralluogoNonEffettuato =
      await db.avr_main.segnalazione_getico.count({
        where: {
          sopralluogo_effettuato: "false",
        },
      });

    const count = {
      NC: countNC,
      DV: countDV,
      IM: countIM,
      IN: countIN,
      sopralluogoEffettuato: countSopralluogoEffettuato,
      sopralluogoNonEffettuato: countSopralluogoNonEffettuato,
      sopralluogoNonRichiesto:
        countTotale -
        (countSopralluogoEffettuato + countSopralluogoNonEffettuato),
    };

    console.log("GETICO Gestiti: ", count);

    // Controllo e return dati
    if (count !== undefined) {
      return count;
    } else {
      console.log("Nessuna lista");
      // Return error
      throw new Error("Nessuna lista");
    }
  },
  async getLastGetico(args: any, parent: any, context: any, info: any) {
    console.log("================= IN LAST GETICO: ");

    const lastGetico = await db.avr_main.segnalazione_getico.findMany({
      orderBy: {
        id: "desc",
      },
      take: 5,
    });

    const lastGeticoCleaned = [];
    lastGetico.map((getico) => {
      lastGeticoCleaned.push(getico.tipologia);
    });

    console.log("GETICO Gestiti: ", lastGeticoCleaned);

    // Controllo e return dati
    if (lastGeticoCleaned !== undefined) {
      return lastGeticoCleaned;
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
