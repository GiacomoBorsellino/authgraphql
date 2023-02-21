import { db } from "../../config/dbConfig";
import { secret } from "../../config/jwt.conf";
const jwt = require("jsonwebtoken"); // Ricorda di importare così, sennò non funzionerà !

const resolvers = {
  Query: {
    async getUsers(args: any, parent: any, context: any, info: any) {
      console.log("================= IN UTENTI");

      const count = await db.avr_main.utenti.count({});
      const data = await db.avr_main.utenti.findMany({
        skip: +parent.input.indexPoint,
        take: 10,
      });

      const typeColumns = await db.avr_main.utenti.findMany({
        skip: +parent.input.indexPoint,
        take: 10,
      });

      console.log("typeColumns: ", typeColumns);
      let arrayAppoggio = [];
      typeColumns.map((oggetto) => {
        oggetto;
      });

      if (data !== undefined || count !== undefined) {
        return { data, count };
      } else {
        console.log("Utente non aggiunto");
        // Return error
        throw new Error("Nessuna lista utenti");
      }
    },
    user(args: any, parent: any, context: any, info: any) {
      const utentiList = db.avr_main.utenti.findMany({});
      return utentiList;
    },

    hello: (args: any, parent: any, context: any, info: any) => {
      console.log(`3. resolver: hello`);
      console.log("contesto", context);

      return `Hello ${args.name ? args.name : "world"}!`;
    },
    bye: (args: any, parent: any, context: any, info: any) => {
      console.log(`3. resolver: bye`);
      return `Bye ${args.name ? args.name : "world"}!`;
    },
  },
  Mutation: {
    async login(args: any, parent: any, context: any, info: any) {
      console.log("================= LOGIN");
      console.log(args, parent);

      const user = await db.avr_main.utenti.findFirst({
        where: {
          email: parent.input.email,
        },
      });
      console.log("USER: ", user);

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
      console.log("================= UPDATEUSER");
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
  },
};

export { resolvers };
