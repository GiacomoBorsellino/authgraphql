// import { PrismaClient } from '@prisma/client'

import { PrismaClient as PrismaClient1 } from "../../../prisma/generated/client1";
const client1 = new PrismaClient1();

import { secret } from "../../config/jwt.conf";
const jwt = require("jsonwebtoken"); // Ricorda di importare così, sennò non funzionerà !

// const prisma = new PrismaClient()

const resolvers = {
  Query: {
    async getUsers(args, parent, context, info) {
      console.log("================= IN UTENTI");
      const utentiList = await client1.utenti.findMany({});
      console.log("LISTA");
      return utentiList;
    },
    user() {
      const utentiList = client1.utenti.findMany({});
      return utentiList;
    },

    hello: (root, args, context, info) => {
      console.log(`3. resolver: hello`);
      console.log("contesto", context);

      return `Hello ${args.name ? args.name : "world"}!`;
    },
    bye: (root, args, context, info) => {
      console.log(`3. resolver: bye`);
      return `Bye ${args.name ? args.name : "world"}!`;
    },
  },
  // Product: {
  //     category(parent: any) {
  //         // console.log(parent);

  //         let categoryId = parent.categoryid
  //         const categoryName = prisma.category.findUnique({
  //             where: {
  //                 id: categoryId
  //             }
  //         })
  //         return categoryName
  //     },
  // },
  Mutation: {
    async login(args, parent) {
      console.log("================= LOGIN");
      console.log(args, parent);

      const user = await client1.utenti.findFirst({
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
    async addUser(args, parent) {
      console.log("================= IN ADDUSER");

      console.log(args, parent);

      const addUser = await client1.utenti.create({
        data: {
          email: parent.input.email,
          password: parent.input.password,
        },
      });

      const user = await client1.utenti.findUnique({
        where: {
          id: +addUser.id,
        },
      });
      console.log("LISTA-UTENTE: ", user);

      return user;
    },
    async updateUser(args, parent) {
      console.log("================= UPDATEUSER");
      console.log(args, parent);

      await client1.utenti.update({
        where: {
          id: +parent.input.id,
        },
        data: {
          email: parent.input.email,
          password: parent.input.password,
          roles: parent.input.roles,
        },
      });

      const user = await client1.utenti.findUnique({
        where: {
          id: +parent.input.id,
        },
      });
      console.log(user);

      return user;
    },
    async deleteUser(args, parent) {
      console.log("================= DELETEUSER");
      console.log(args, parent);

      const deleteUser = await client1.utenti.delete({
        where: {
          id: +parent.input.id,
        },
      });
      return deleteUser;
    },
  },
};

export { resolvers };
