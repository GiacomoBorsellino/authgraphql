import { gql } from "apollo-server";

const typeDefs = gql`
  type Utente {
    id: ID
    idAppalto: Int
    nome: String
    cognome: String
    username: String
    password: String
    email: String
    status: String
    permessi: String
    dataCreazione: String
    dataModifica: String
    dataSospensione: String
    idGruppo: Int
    del: String
    scadenzaPassword: String
    roles: String
  }

  type Allegato {
    id: Int
    tabella_appartenenza: String
    id_tabella_appartenenza: Int
    descrizione: String
    path: String
    filename_disk: String
    filename_originale: String
    id_operatore_salvataggio: Int
    dt_salvataggio: String
    del: Int
  }

  input UserInput {
    id: ID
    email: String
    password: String
    roles: String
  }

  type UserLogin {
    id: ID
    nome: String
    cognome: String
    username: String
    email: String
    idGruppo: Int
    token: String
  }

  input Pagination {
    indexPoint: Int
    filter: String
  }

  type UtenteConnection {
    data: [Utente]
    count: Int
    typeDataColumns: String
  }

  type Query {
    getColumns(input: String): String
    getUsers(input: Pagination): UtenteConnection

    user(id: ID!): Utente

    hello(name: String): String
    bye(name: String): String
  }

  type Mutation {
    login(input: UserInput): UserLogin

    addUser(input: UserInput): Utente
    updateUser(input: UserInput): Utente
    deleteUser(input: UserInput): Utente
  }
`;

export { typeDefs };

// Pezzo tolto da utenti
// catastoanomalia: [catastoanomalia]
// catastolinker: [catastolinker]
// lavoro_lavoro_idUtenteStatoToutenti: [lavoro]
// lavoro_lavoro_idUtenteToutenti: [lavoro]
// lavorostorico_lavorostorico_idUtenteStatoToutenti: [lavorostorico]
// lavorostorico_lavorostorico_idUtenteToutenti: [lavorostorico]
// livelliservizio: [livelliservizio]
// oggettocivetta: [oggettocivetta]
// pratica: [pratica]
// praticastorico: [praticastorico]
// registrorichiedente: [registrorichiedente]
// segnalazione_segnalazione_idUtenteStatoToutenti: [segnalazione]
// segnalazione_segnalazione_idUtenteToutenti: [segnalazione]
// segnalazionestatostorico: [segnalazionestatostorico]
// segnalazionestorico_segnalazionestorico_idUtenteStatoToutenti: [segnalazionestorico]
// segnalazionestorico_segnalazionestorico_idUtenteToutenti: [segnalazionestorico]
// gruppo: gruppo
