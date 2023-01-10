import { gql } from 'apollo-server'

const typeDefs = gql`

    type User {
        id: Int     
        first_name: String
        last_name: String
        email: String
        gender: String
        ip_address: String
    }

    type Product {
        id: Int     
        name: String 
        price: String 
        address: String 
        categoryId: Int
        category: Category
    }

    type Category {
        id: Int     
        name: String
    }

    input UserInput {
        id: ID
        email: String
        ip_address: String
    }

    type UserLogin {
        id: Int     
        first_name: String
        last_name: String
        email: String
        gender: String
        ip_address: String
        token: String
    }

    type Query {
        getUsers: [User]
        user(id: ID!): User
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category

        hello(name: String): String
        bye(name: String): String
    }

    type Mutation {
        login(input: UserInput): UserLogin

        addUser(input: UserInput): User
        updateUser(input: UserInput): User
        deleteUser(input: UserInput): User
    }

`

export { typeDefs };      