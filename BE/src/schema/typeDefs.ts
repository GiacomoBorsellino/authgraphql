import { gql } from 'apollo-server'

const typeDefs = gql`

    type Utente {
        id: Int     
        first_name: String
        last_name: String                 
        email: String
        gender: String
        password: String
        roles: String
    }

    input UserInput {
        id: ID
        email: String
        password: String
        roles: String
    }

    type UserLogin {
        id: Int     
        first_name: String
        last_name: String
        email: String
        gender: String
        password: String
        token: String
        roles: String
    }

    type Query {
        getUsers: [User]
        user(id: ID!): User

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