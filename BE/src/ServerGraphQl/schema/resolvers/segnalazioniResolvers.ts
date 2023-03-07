import { db } from "../../../config/dbConfig";

const querySegnalazioni = {
  async getSegnalazioni(args: any, parent: any, context: any, info: any) {
    console.log("================= IN SEGNALAZIONI: ");

    let filter = JSON.parse(parent.input.filter);
    let order = JSON.parse(parent.input.order);

    console.log("========== INPUT E FILTER: ", parent.input, filter, order);

    // Definisce il tipo di dato per colonna, così da usare filtri dinamici nel FE
    const colonne: any = await db.avr_main
      .$queryRaw`SELECT * FROM information_schema.columns WHERE table_name = \'segnalazione\'`;

    // Creazione lista totale colonne
    let typeDataColumns: any = [];
    colonne.map((colonna: any) => {
      typeDataColumns.push({
        nameColumn: colonna.column_name,
        typeData: colonna.data_type,
      });
    });
    typeDataColumns = JSON.stringify(typeDataColumns);

    // Numero utenti
    const count = await db.avr_main.segnalazione.count({
      where: filter,
      orderBy: order,
    });

    // Dati utenti
    const data = await db.avr_main.segnalazione.findMany({
      skip: +parent.input.indexPoint,
      take: 10,
      where: filter,
      orderBy: order,
    });

    // Controllo e return dati
    if (data !== undefined || count !== undefined) {
      return { data, count, typeDataColumns };
    } else {
      console.log("Nessuna lista segnalazioni");
      // Return error
      throw new Error("Nessuna lista segnalazioni");
    }
  },
  async getCountSegnalazioni(args: any, parent: any, context: any, info: any) {
    console.log("================= IN SEGNALAZIONI: ");

    // Numero utenti
    const count = await db.avr_main.segnalazione.count({});

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

const mutationSegnalazioni = {};

const segnalazioniResolvers = {
  querySegnalazioni: querySegnalazioni,
  mutationSegnalazioni: mutationSegnalazioni,
};

export { segnalazioniResolvers };
