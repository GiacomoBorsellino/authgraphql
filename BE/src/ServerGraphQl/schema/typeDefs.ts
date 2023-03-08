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

  # Model Segnaletica Temporanea
  type tab27C_segn_vert_temp {
    id_master: Int
    tipo_oggetto: Tipo_oggetto_t
    id_lavoro: Int
    id_segnale_temp: Int
    quartiere: String
    toponimo: String
    civico_ini: String
    famiglia_temp: Famiglia_t
    num_segn_temp: Int
    cod_via: String
    rete: Int
    id_elem_var: Int
    strada_var: String
    origine: Tipo_origine_t
    dataora_ini_lavoro: String
    data_attivazione: String
    dataora_fine_lavoro: String
    data_dismissione: String
    note: String
    img: String
    img_url: String
    simbolo: String
    simbolo_url: String
    sc: String
    sf: String
    geom: String
    rione: String
    unesco: String
    gestore: Gestore_t
  }

  enum Tipo_oggetto_t {
    area_di_circolazione_veicolare
    area_di_sosta
    area_di_marcia_veicolare
    isole_spartitraffico
    area_di_circolazione_pedonale
    area_di_circolazione_ciclabile
    muri_di_sostegno_del_corpo_stradale
    scarpate_e_pendii
    ponti_viadotti_sovrappassi
    giunti_dei_ponti
    pile_dei_ponti
    gallerie
    sottopassi
    gallerie_e_sottopassi
    cunette_di_margine
    arginelli
    protezione_corpo_stradale
    protezione_ambiente_circostante
    impianti_di_illuminazione
    piazzole_di_sosta
    dispositivi_di_ritenuta
    attenuatori_d_urto
    pertinenze_di_servizio
    opere_di_continuit__idraulica
    sottoservizi
    accessi
    cippi
    case_cantoniere
    attenuatori_di_velocit_
    vegetazione_puntuale
    vegetazione_lineare
    vegetazione_areale
    supporti_per_segnaletica
    cartelli_per_segnaletica_verticale
    cartelli_per_segnaletica_verticale_temporanea
    cartelli_per_impianti_pubblicitari
    segnaletica_orizzontale_puntuale
    segnaletica_orizzontale_lineare
    impianti_semaforici
    pannelli_a_messaggio_variabile
    varchi_telematici
    impianti_controllo_violazioni
    impianti_misurazione_traffico
    sensori_meteo
    sbarre_per_controllo_accessi
    delimitazione_centri_abitati
    passaggi_a_livello
    parapedonali_e_dissuasori_di_sosta
    manufatti_minori_lineari
    arredo_urbano
    indici_prestazionali_della_pavimentazione
    dossi_rallentatori
    dissuasori_di_sosta_e_parapedonali
    rastrelliere
    tombini__griglie__caditoie
    pozzetti_sottoservizi
    impianti_tecnologici
    abbattimenti_barriere_architettoniche
  }

  enum Famiglia_t {
    limite_di_velocita
    divieto_di_sorpasso
    restringimento
    fine_cantiere
    strada_senza_sfondo
    strada_chiusa
    senso_unico_alternato
    ernato
    lavori_in_corso
    pedoni_lato_opposto
    passaggio_obbligato
    pericolo_generico
    strada_dissestata
    divieto_di_sosta
    lampada
    transenna
    altro
  }

  enum Tipo_origine_t {
    VAR
    GPS
    cartografia
    rilievo_topografico
    celerimetrico_originale
    celerimetrico_scorrimento_vertici
    celerimetrico_diviso
    celerimetrico_parzialmente_modificato
    altri_opendata
    altri_opendata___toponomastica
    altri_opendata___mobilita
    altri_opendata___publiacqua
    altri_opendata___SAS
    as_built
    celerimetrico_eliminato
    altro
  }

  enum Gestore_t {
    Comune_Firenze_proprietario
    Comune_Firenze_privato_uso_pubblico
    ANAS
    Ferrovie_dello_Stato
    privato
    altro
    SILFI
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

  #  Output Fonte Richiedenti
  type FonteRichiedentiCounts {
    diretta: Int
    telefonica: Int
    email: Int
    fax: Int
    web: Int
  }

  #  Output Segnalazioni Quartiere
  type SegnalazioniQuartiere {
    totaleQuartiere: Int
    giornalieroQuartiere: Int
    prontoInterventoQuartiere: Int
  }

  type Query {
    getColumns(input: String): String
    getUsers(input: Pagination): UtenteConnection
    getSegnalazioni(input: Pagination): SegnalazioneConnection
    user(id: ID!): Utente

    getCountSegnaleticaTemporanea: Int
    getCountSegnalazioni: Int
    getCountSegnalazioniProntoIntervento: Int
    getCountSegnalazioniGetico: Int
    getCountFonteRichiedenti: FonteRichiedentiCounts
    getCountSegnalazioniQuartiere(input: String): SegnalazioniQuartiere
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
