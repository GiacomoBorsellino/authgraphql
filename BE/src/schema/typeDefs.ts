import { gql } from 'apollo-server'

const typeDefs = gql`

    type Utente {
        id: ID                        
        idAppalto: Int?
        nome: String?                   
        cognome: String?                    
        username: String?                    
        password: String?                    
        email: String?                    
        status: String?                    
        permessi: String?                   
        dataCreazione: String?                    
        dataModifica: String?                    
        dataSospensione: String?                    
        idGruppo: Int?
        del: String?                    
        scadenzaPassword: String?                    
        roles: String?                    
        catastoanomalia: [catastoanomalia]?
        catastolinker: [catastolinker]?
        lavoro_lavoro_idUtenteStatoToutenti: [lavoro]?                  
        lavoro_lavoro_idUtenteToutenti: [lavoro]?                   
        lavorostorico_lavorostorico_idUtenteStatoToutenti: [lavorostorico]?            
        lavorostorico_lavorostorico_idUtenteToutenti: [lavorostorico]?          
        livelliservizio: [livelliservizio]?
        oggettocivetta: [oggettocivetta]?
        pratica: [pratica]?
        praticastorico: [praticastorico]?
        registrorichiedente: [registrorichiedente]?
        segnalazione_segnalazione_idUtenteStatoToutenti: [segnalazione]?             
        segnalazione_segnalazione_idUtenteToutenti: [segnalazione]?             
        segnalazionestatostorico: [segnalazionestatostorico]?
        segnalazionestorico_segnalazionestorico_idUtenteStatoToutenti: [segnalazionestorico]?      
        segnalazionestorico_segnalazionestorico_idUtenteToutenti: [segnalazionestorico]?      
        gruppo: gruppo?                    
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