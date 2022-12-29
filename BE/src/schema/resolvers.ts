
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
    Query: {

        users(args, parent, context, info) {
            if (context.authorization == "sono_il_token_124") {
                throw new Error('token rotto');
            } else {
                const usersList = prisma.users.findMany({})
                console.log("In Resolver: ", context.authorization);
                return usersList;
            }
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
    }
};

export { resolvers };