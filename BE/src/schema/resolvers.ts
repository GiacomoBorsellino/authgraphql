
import { PrismaClient } from '@prisma/client'
import { secret } from '../config/jwt.conf';
const jwt = require("jsonwebtoken"); // Ricorda di importare così, sennò non funzionerà !

const prisma = new PrismaClient()

const resolvers = {

    Query: {
        async getUsers(args, parent, context, info) {
            console.log('================= IN USERS');
            const usersList = await prisma.users.findMany({})
            console.log('LISTA');
            return usersList;
        },
        user() {
            const usersList = prisma.users.findMany({})
            return usersList;
        },
        products() {
            const productsList = prisma.products.findMany({})
            return productsList;
        },
        product() {
            const productsList = prisma.products.findMany({})
            return productsList;
        },
        categories() {
            const categoryList = prisma.category.findMany({})
            return categoryList;
        },
        category() {
            const categoryList = prisma.category.findMany({})
            return categoryList;
        },


        hello: (root, args, context, info) => {
            console.log(`3. resolver: hello`)
            console.log('contesto', context);

            return `Hello ${args.name ? args.name : 'world'}!`
        },
        bye: (root, args, context, info) => {
            console.log(`3. resolver: bye`)
            return `Bye ${args.name ? args.name : 'world'}!`
        },
    },
    Product: {
        category(parent: any) {
            // console.log(parent);

            let categoryId = parent.categoryid
            const categoryName = prisma.category.findUnique({
                where: {
                    id: categoryId
                }
            })
            return categoryName
        },
    },
    Mutation: {
        async login(args, parent) {
            console.log('================= LOGIN');
            console.log(args, parent);

            const user = await prisma.users.findUnique({
                where: {
                    id: +parent.input.id
                }
            })

            if (user.email === parent.input.email) {
                let userAccepted = {}
                userAccepted = user;

                let token = jwt.sign(
                    {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        ip_address: user.ip_address
                    },
                    secret.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );

                userAccepted["token"] = token
                console.log('userAccepted: ', userAccepted);
                return userAccepted
            } else {
                // return null
                throw new Error('Login non corretto');
            }
        },
        async addUser(args, parent) {
            console.log('================= IN ADDUSER');

            console.log(args, parent);

            const addUser = await prisma.users.create({
                data: {
                    email: parent.input.email,
                    ip_address: parent.input.ip_address,
                },
            })

            const user = await prisma.users.findUnique({
                where: {
                    id: +addUser.id
                }
            })
            console.log('LISTA-UTENTE: ', user);

            return user

        },
        async updateUser(args, parent) {
            console.log('================= UPDATEUSER');
            console.log(args, parent);

            await prisma.users.update({
                where: {
                    id: +parent.input.id
                },
                data: {
                    email: parent.input.email,
                    ip_address: parent.input.ip_address,
                    roles: parent.input.roles
                },
            })

            const user = await prisma.users.findUnique({
                where: {
                    id: +parent.input.id
                }
            })
            console.log(user);

            return user
        },
        async deleteUser(args, parent) {
            console.log('================= DELETEUSER');
            console.log(args, parent);

            const deleteUser = await prisma.users.delete({
                where: {
                    id: +parent.input.id
                },
            })
            return deleteUser
        }
    }
};

export { resolvers };