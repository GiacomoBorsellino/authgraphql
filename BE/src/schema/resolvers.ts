
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
    Query: {
        users() {
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
    },
    Product: {
        category(parent: any) {
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