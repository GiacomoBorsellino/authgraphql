import { db } from "../../../config/dbConfig";
import { secret } from "../../../config/jwt.conf";
// VVV Ricorda di importare così, sennò non funzionerà !
const jwt = require("jsonwebtoken");

const queryUtenti = {
  async getUsers(args: any, parent: any, context: any, info: any) {
    console.log("================= IN USERS: ");

    let filter = JSON.parse(parent.input.filter);
    let order = JSON.parse(parent.input.order);

    console.log("========== INPUT E FILTER: ", parent.input, filter, order);

    // Definisce il tipo di dato per colonna, così da usare filtri dinamici nel FE
    const colonne: any = await db.avr_main
      .$queryRaw`SELECT * FROM information_schema.columns WHERE table_name = \'utenti\'`;

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
    const count = await db.avr_main.utenti.count({
      where: filter,
      orderBy: order,
    });

    // Dati utenti
    const data = await db.avr_main.utenti.findMany({
      skip: +parent.input.indexPoint,
      take: 10,
      where: filter,
      orderBy: order,
    });

    // Controllo e return dati
    if (data !== undefined || count !== undefined) {
      return { data, count, typeDataColumns };
    } else {
      console.log("Nessuna lista utenti");
      // Return error
      throw new Error("Nessuna lista utenti");
    }
  },
};

const mutationUtenti = {
  async login(args: any, parent: any, context: any, info: any) {
    console.log("================= LOGIN");
    console.log(args, parent);

    const user = await db.avr_main.utenti.findFirst({
      where: {
        email: parent.input.email,
      },
    });

    console.log("USER: ", user);

    if (user) {
      if (
        user.email === parent.input.email &&
        user.password === parent.input.password
      ) {
        let userAccepted = {};
        userAccepted = user;

        let token = jwt.sign(
          {
            id: user.id,
            nome: user.nome,
            cognome: user.cognome,
            email: user.email,
            idGruppo: user.idGruppo,
          },
          secret.secret,
          {
            expiresIn: "24h", // expires in 24 hours
          }
        );

        userAccepted["token"] = token;
        console.log("userAccepted: ", userAccepted);
        return userAccepted;
      } else {
        // return null
        throw new Error("Login non corretto");
      }
    } else {
      console.log("Login non corretto");

      // return null
      throw new Error("Login non corretto");
    }
  },
  async addUser(args: any, parent: any, context: any, info: any) {
    console.log("================= IN ADDUSER");
    console.log(parent);
    if (parent !== undefined) {
      const addUser = await db.avr_main.utenti.create({
        data: {
          email: parent.input.email,
          password: parent.input.password,
        },
      });

      const user = await db.avr_main.utenti.findUnique({
        where: {
          id: +addUser.id,
        },
      });

      return user;
    } else {
      console.log("Utente non aggiunto");
      // return error
      throw new Error("Utente non aggiunto");
    }
  },
  async updateUser(args: any, parent: any, context: any, info: any) {
    // console.log("================= UPDATEUSER");
    console.log(parent);
    if (parent !== undefined) {
      await db.avr_main.utenti.update({
        where: {
          id: +parent.input.id,
        },
        data: {
          email: parent.input.email,
          password: parent.input.password,
          roles: parent.input.roles,
        },
      });

      const user = await db.avr_main.utenti.findUnique({
        where: {
          id: +parent.input.id,
        },
      });
      return user;
    } else {
      console.log("Utente non modificato");
      // return error
      throw new Error("Utente non modificato");
    }
  },
  async deleteUser(args: any, parent: any, context: any, info: any) {
    console.log("================= DELETEUSER");
    console.log(parent);
    if (parent !== undefined) {
      const deleteUser = await db.avr_main.utenti.delete({
        where: {
          id: +parent.input.id,
        },
      });
      return deleteUser;
    } else {
      console.log("Utente non cancellato");
      // return error
      throw new Error("Utente non cancellato");
    }
  },
};

const utentiResolvers = {
  queryUtenti: queryUtenti,
  mutationUtenti: mutationUtenti,
};

export { utentiResolvers };