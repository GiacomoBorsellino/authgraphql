
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {

    Query: {
        users(args, parent, context, info) {
            console.log("=============================================== USERS");
            const usersList = prisma.users.findMany({})
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


        // hello: (root, args, context, info) => {
        //     console.log(`3. resolver: hello`)
        //     console.log('contesto', context);

        //     return `Hello ${args.name ? args.name : 'world'}!`
        // },
        // bye: (root, args, context, info) => {
        //     console.log(`3. resolver: bye`)
        //     return `Bye ${args.name ? args.name : 'world'}!`
        // },
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
        // login(args, parent, context, info) {
        //     console.log("=============================================== LOGIN");
        //     console.log(args, parent);

        //     const user = prisma.users.findUnique({
        //         where: {
        //             id: 1
        //         }
        //     })
        //     return user
        // },
        addUser(args, parent) {
            console.log('================= ADDUSER');

            console.log(args, parent);

            const user = prisma.users.create({
                data: {
                    email: parent.input.email,
                    ip_address: parent.input.ip_address,
                },
            })

            return user

        },
        updateUser(args, parent) {
            console.log(args, parent);

            const user = prisma.users.update({
                where: {
                    id: 1
                },
                data: {
                    email: 'elsa@prisma.io',
                    ip_address: 'Elsa Prisma',
                },
            })
            return user
        },
        deleteUser(args, parent) {
            console.log(args, parent);

            const user = prisma.users.delete({
                where: {
                    id: 1
                },
            })

            return null

        }
    }
};

export { resolvers };