import { db } from "../../../config/dbConfig";

const queryGeneric = {
  async getColumns(args: any, parent: any, context: any, info: any) {
    console.log("================= IN getColumns", parent.input);

    const table = parent.input;
    const columnsQuery: any = await db.avr_main
      .$queryRaw`SELECT * FROM information_schema.columns WHERE table_name = ${table}`;

    let columns: any = [];

    columnsQuery.map((colonna: any) => {
      columns.push(colonna.column_name);
    });
    columns = JSON.stringify(columns);

    console.log(columns);
    if (columns) {
      return columns;
    } else {
      throw new Error("Errore ricerca colonne");
    }
  },
};

const mutationGeneric = {};

const genericResolvers = {
  queryGeneric: queryGeneric,
  mutationGeneric: mutationGeneric,
};

export { genericResolvers };
