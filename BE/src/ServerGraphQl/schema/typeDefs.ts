import { gql } from "apollo-server";

const typeDefs = gql`
  # Model Utente
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

  # Model Segnalazione
  type Segnalazione {
    id: Int
    idAppalto: Int
    noteSegnalatore: String
    segnalatori: [Int]
    dataCreazione: String
    dataModifica: String
    dataRichiesta: String
    localizzazioneDichiarata: String
    localizzazioneDichiarataCivico: String
    localizzazioneNote: String
    descrizioneAnomalia: String
    commentoAnomalia: String
    idEvento: Int
    idPratica: Int
    dataModificaStato: String
    stato: String
    notaStato: String
    idUtente: Int
    idUtenteStato: Int
    idSegnalatore: Int
    fonteSegnalazione: Int
    categoriaAnomalia: Int
    dettaglioAnomalia: Int
    severitaEvento: Int
    tipoEvento: Int
    idTecnico: Int
    localizzazioneDichiarataQuartiere: String
    idLavoroAssociato: String
    dataChiusura: String
    statoCorrenteSegnalazione: String
    del: String
    idSegnalazioneGetico: Int
    delOggettiCatasto: String
    sottoservizi: String
    sinistri: String
    richiestaSopralluogo: String
    numeroProvvedimento: String
    idTipoProvvedimento: Int
  }

  # Model Allegato
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

  # Input per Login
  input UserInput {
    id: ID
    email: String
    password: String
    roles: String
  }

  # Output Login
  type UserLogin {
    id: ID
    nome: String
    cognome: String
    username: String
    email: String
    idGruppo: Int
    token: String
  }

  # Input Query
  input Pagination {
    indexPoint: Int
    filter: String
    order: String
  }

  # Output Utenti
  type UtenteConnection {
    data: [Utente]
    count: Int
    typeDataColumns: String
  }

  #  Output Segnalazioni
  type SegnalazioneConnection {
    data: [Segnalazione]
    count: Int
    typeDataColumns: String
  }

  type Query {
    getColumns(input: String): String
    getUsers(input: Pagination): UtenteConnection
    getSegnalazioni(input: Pagination): SegnalazioneConnection
    user(id: ID!): Utente
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
