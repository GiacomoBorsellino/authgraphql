
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        users() {
            const usersList = prisma.users.findMany({})
            return usersList;
        },
        products() {
            const productsList = prisma.products.findMany({})
            return productsList;
        },
        categories() {
            const categoryList = prisma.category.findMany({})
            return categoryList;
        },
        user() {
            const usersList = prisma.users.findMany({})
            return usersList;
        },
        product() {
            const productsList = prisma.products.findMany({})
            return productsList;
        },
        category() {
            const categoryList = prisma.category.findMany({})
            return categoryList;
        },
    }
};

export { resolvers };