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
  async getCountSegnalazioniProntoIntervento(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN SEGNALAZIONI: ");

    let filter = {
      statoCorrenteSegnalazione: "A",
      tipoEvento: 1,
      del: "0",
    };
    // Numero utenti
    const count = await db.avr_main.segnalazione.count({
      where: filter,
    });

    // console.log("COUNT: ", count);

    // Controllo e return dati
    if (count !== undefined) {
      return count;
    } else {
      console.log("Nessuna lista");
      // Return error
      throw new Error("Nessuna lista");
    }
  },
  async getCountFonteRichiedenti(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN SEGNALAZIONI: ");

    // Numero Fonte Diretta
    const countDiretta = await db.avr_main.segnalazione.count({
      where: {
        fonteSegnalazione: 1,
      },
    });

    // Numero Fonte Diretta
    const countTelefonica = await db.avr_main.segnalazione.count({
      where: {
        fonteSegnalazione: 2,
      },
    });

    // Numero Fonte Diretta
    const countEmail = await db.avr_main.segnalazione.count({
      where: {
        fonteSegnalazione: 3,
      },
    });

    // Numero Fonte Diretta
    const countFax = await db.avr_main.segnalazione.count({
      where: {
        fonteSegnalazione: 4,
      },
    });

    // Numero Fonte Diretta
    const countWeb = await db.avr_main.segnalazione.count({
      where: {
        fonteSegnalazione: 5,
      },
    });

    console.log("============== ", countDiretta);

    const count = {
      diretta: countDiretta,
      telefonica: countTelefonica,
      email: countEmail,
      fax: countFax,
      web: countWeb,
    };

    console.log("COUNT: ", count);

    // Controllo e return dati
    if (count !== undefined) {
      return count;
    } else {
      console.log("Nessuna lista");
      // Return error
      throw new Error("Nessuna lista");
    }
  },
  async getCountSegnalazioniQuartiere(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN getCountSegnalazioniQuartiere: ", parent);

    let quartiere = parent.input;
    console.log("QQQ ", quartiere);

    let quartiereSelezionato = "";

    if (quartiere == "Q1") {
      quartiereSelezionato = "CENTRO STORICO";
    } else if (quartiere == "Q2") {
      quartiereSelezionato = "CAMPO DI MARTE";
    } else if (quartiere == "Q3") {
      quartiereSelezionato = "GAVINANA GALLUZZO";
    } else if (quartiere == "Q4") {
      quartiereSelezionato = "ISOLOTTO LEGNAIA";
    } else if (quartiere == "Q5") {
      quartiereSelezionato = "RIFREDI";
    }
    console.log(quartiere, quartiereSelezionato);
    // Numero Segnalazioni
    const countTotale = await db.avr_main.segnalazione.count({
      where: {
        localizzazioneDichiarataQuartiere: quartiereSelezionato,
      },
    });

    let moment = new Date().toISOString().slice(0, -1);
    let startDay = moment.slice(0, 11) + "00:00:00.000";
    let endDay = moment.slice(0, 11) + "23:59:59.000";

    const countGiornaliero = await db.avr_main.segnalazione.count({
      where: {
        localizzazioneDichiarataQuartiere: quartiereSelezionato,
        dataCreazione: {
          gt: startDay,
          lt: endDay,
        },
      },
    });

    const countProntoIntervento = await db.avr_main.segnalazione.count({
      where: {
        localizzazioneDichiarataQuartiere: quartiereSelezionato,
        statoCorrenteSegnalazione: "C",
        tipoEvento: 1,
        del: "0",
        dataCreazione: {
          gt: startDay,
          lt: endDay,
        },
      },
    });

    const count = {
      totaleQuartiere: countTotale,
      giornalieroQuartiere: countGiornaliero,
      prontoInterventoQuartiere: countProntoIntervento,
    };

    console.log("COUNT: ", count);

    // Controllo e return dati
    if (count !== undefined) {
      return count;
    } else {
      console.log("Nessuna lista");
      // Return error
      throw new Error("Nessuna lista");
    }
  },
  async getLastSegnalazioni(args: any, parent: any, context: any, info: any) {
    console.log("================= IN LAST SEGNALAZIONI: ");

    // Controllo solo giorno odierno
    let moment = new Date().toISOString().slice(0, -1);
    let startDay = moment.slice(0, 11) + "00:00:00.000";
    let endDay = moment.slice(0, 11) + "23:59:59.000";

    const lastSegnalazioni = await db.avr_main.segnalazione.findMany({
      where: {
        dataCreazione: {
          gt: startDay,
          lt: endDay,
        },
      },
      orderBy: {
        id: "desc",
      },
      take: 5,
    });

    const lastSegnalazioniCleaned = [];
    const lastSegnalazioniCleanedDecoded = [];
    lastSegnalazioni.map((segnalazione) => {
      lastSegnalazioniCleaned.push(segnalazione.categoriaAnomalia);
    });

    for (let i = 0; i < lastSegnalazioni.length; i++) {
      let decodedCategoriaAnomalia =
        await db.avr_main.categoriaanomalia.findUnique({
          where: { id: lastSegnalazioniCleaned[i] },
        });
      lastSegnalazioniCleanedDecoded.push(
        decodedCategoriaAnomalia.value +
          " - " +
          lastSegnalazioni[i].localizzazioneDichiarata
      );
    }

    console.log("GETICO Gestiti: ", lastSegnalazioniCleanedDecoded);

    // Controllo e return dati
    if (lastSegnalazioniCleanedDecoded !== undefined) {
      return lastSegnalazioniCleanedDecoded;
    } else {
      console.log("Nessuna lista");
      // Return error
      throw new Error("Nessuna lista");
    }
  },
  async getSegnalazioniSeverita(
    args: any,
    parent: any,
    context: any,
    info: any
  ) {
    console.log("================= IN SEGNALAZIONI SEVERITA: ");

    console.log("========== INPUT E FILTER: ", parent.input);
    let counts;

    // Controllo e return dati
    if (counts !== undefined || counts !== undefined) {
      return { counts };
    } else {
      console.log("Nessuna lista segnalazioni");
      // Return error
      throw new Error("Nessuna lista segnalazioni");
    }
  },
};

const mutationSegnalazioni = {};

const segnalazioniResolvers = {
  querySegnalazioni: querySegnalazioni,
  mutationSegnalazioni: mutationSegnalazioni,
};

export { segnalazioniResolvers };
