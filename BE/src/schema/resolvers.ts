
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
        async addUser(args, parent) {
            console.log('================= ADDUSER');

            console.log(args, parent);

            const addUser = await prisma.users.create({
                data: {
                    email: parent.input.email,
                    ip_address: parent.input.ip_address,
                },
            })

            return addUser

        },
        async updateUser(args, parent) {
            console.log('================= UPDATEUSER');
            console.log(args, parent);

            const updateUser = await prisma.users.update({
                where: {
                    id: +parent.input.id
                },
                data: {
                    email: parent.input.email,
                    ip_address: parent.input.ip_address,
                },
            })
            return updateUser
        },
        async deleteUser(args, parent) {
            console.log('================= DELETEUSER');
            console.log('AAA ', args, parent);

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