
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AllegatoScalarFieldEnum = makeEnum({
  id: 'id',
  tabella_appartenenza: 'tabella_appartenenza',
  id_tabella_appartenenza: 'id_tabella_appartenenza',
  descrizione: 'descrizione',
  path: 'path',
  filename_disk: 'filename_disk',
  filename_originale: 'filename_originale',
  id_operatore_salvataggio: 'id_operatore_salvataggio',
  dt_salvataggio: 'dt_salvataggio',
  del: 'del'
});

exports.Prisma.AppaltoScalarFieldEnum = makeEnum({
  id: 'id',
  tipologia: 'tipologia',
  dataModifica: 'dataModifica'
});

exports.Prisma.AttrezzaturaScalarFieldEnum = makeEnum({
  id: 'id',
  tipologiaAttrezzatura: 'tipologiaAttrezzatura',
  descrizione: 'descrizione',
  dataModifica: 'dataModifica'
});

exports.Prisma.Catasto_monitoraggioScalarFieldEnum = makeEnum({
  id: 'id',
  tabellaCatasto: 'tabellaCatasto',
  tabellaMonitoraggio: 'tabellaMonitoraggio',
  idElemento: 'idElemento'
});

exports.Prisma.CatastoanomaliaScalarFieldEnum = makeEnum({
  id: 'id',
  idUtente: 'idUtente',
  idAppalto: 'idAppalto',
  dataModifica: 'dataModifica',
  adjacentLayer: 'adjacentLayer',
  adjacentLayerGeom: 'adjacentLayerGeom'
});

exports.Prisma.CatastolinkerScalarFieldEnum = makeEnum({
  id: 'id',
  idCatasto: 'idCatasto',
  idAppalto: 'idAppalto',
  idUtente: 'idUtente',
  dataModifica: 'dataModifica',
  idSegnalazione: 'idSegnalazione',
  idLavoro: 'idLavoro',
  statoSegnalazione: 'statoSegnalazione',
  statoLavoro: 'statoLavoro',
  flg_catasto: 'flg_catasto',
  idPratica: 'idPratica',
  geojson: 'geojson'
});

exports.Prisma.CategoriaanomaliaScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  tabellaNome: 'tabellaNome',
  modalitaInserimento: 'modalitaInserimento'
});

exports.Prisma.Categoriaanomalia_sottocategoriaanomaliaScalarFieldEnum = makeEnum({
  id: 'id',
  id_categoria_anomalia: 'id_categoria_anomalia',
  id_sottocategoria_anomalia: 'id_sottocategoria_anomalia'
});

exports.Prisma.Categoriaanomalia_sottocategorialavoroScalarFieldEnum = makeEnum({
  id: 'id',
  id_categoria_lavoro: 'id_categoria_lavoro',
  id_sottocategoria_lavoro: 'id_sottocategoria_lavoro'
});

exports.Prisma.ContabilitaScalarFieldEnum = makeEnum({
  id: 'id',
  prezzario: 'prezzario',
  descrizioneContabilita: 'descrizioneContabilita',
  proprieta: 'proprieta'
});

exports.Prisma.EventoScalarFieldEnum = makeEnum({
  id: 'id',
  idUtente: 'idUtente',
  idAppalto: 'idAppalto',
  tipoEvento: 'tipoEvento',
  generatoDa: 'generatoDa',
  idPratica: 'idPratica',
  noteEvento: 'noteEvento',
  lavoriEvento: 'lavoriEvento',
  statoEvento: 'statoEvento',
  documentiCorrelati: 'documentiCorrelati',
  propietaEvento: 'propietaEvento',
  severitaEvento: 'severitaEvento'
});

exports.Prisma.FilelinkerScalarFieldEnum = makeEnum({
  id: 'id',
  metadata: 'metadata'
});

exports.Prisma.FiltroScalarFieldEnum = makeEnum({
  id: 'id',
  idUtente: 'idUtente',
  json: 'json',
  tipo: 'tipo',
  nome: 'nome'
});

exports.Prisma.Filtro_colonneScalarFieldEnum = makeEnum({
  id: 'id',
  idUtente: 'idUtente',
  json: 'json',
  tabella: 'tabella'
});

exports.Prisma.FontiScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.GruppoScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  descrizione: 'descrizione',
  dataModifica: 'dataModifica'
});

exports.Prisma.ImpresaScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.LavoroScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  idEvento: 'idEvento',
  idPratica: 'idPratica',
  idPOI: 'idPOI',
  idUtente: 'idUtente',
  dataCreazione: 'dataCreazione',
  dataModifica: 'dataModifica',
  dataChiusura: 'dataChiusura',
  localizzazioneDichiarata: 'localizzazioneDichiarata',
  categoriaLavoro: 'categoriaLavoro',
  dettaglioLavoro: 'dettaglioLavoro',
  noteLavoro: 'noteLavoro',
  contabilitaLavoro: 'contabilitaLavoro',
  attrezzaturaLavoro: 'attrezzaturaLavoro',
  mezzoLavoro: 'mezzoLavoro',
  personaleLavoro: 'personaleLavoro',
  dataModificaStato: 'dataModificaStato',
  stato: 'stato',
  notaStato: 'notaStato',
  idUtenteStato: 'idUtenteStato',
  localizzazioneDichiarataQuartiere: 'localizzazioneDichiarataQuartiere',
  statoCorrenteLavoro: 'statoCorrenteLavoro',
  del: 'del',
  dataInizioProgrammata: 'dataInizioProgrammata',
  dataInizioEffettiva: 'dataInizioEffettiva',
  dataInizioMassima: 'dataInizioMassima',
  dataFineProgrammata: 'dataFineProgrammata',
  dataFineEffettiva: 'dataFineEffettiva',
  dataFineMassima: 'dataFineMassima',
  delOggettiCatasto: 'delOggettiCatasto',
  quantita: 'quantita',
  operatore: 'operatore',
  sospeso: 'sospeso',
  dataora_ini_sospensione: 'dataora_ini_sospensione',
  dataora_fine_sospensione: 'dataora_fine_sospensione',
  tempo_sospensione: 'tempo_sospensione',
  note_sospensione: 'note_sospensione',
  impresaEsecutrice: 'impresaEsecutrice',
  segnaleticatemporanea: 'segnaleticatemporanea',
  tipolavoro: 'tipolavoro',
  statoMessaInSicurezza: 'statoMessaInSicurezza',
  dataMessaInSicurezza: 'dataMessaInSicurezza',
  notePubbliche: 'notePubbliche'
});

exports.Prisma.LavorostoricoScalarFieldEnum = makeEnum({
  id: 'id',
  idLavoro: 'idLavoro',
  idAppalto: 'idAppalto',
  idEvento: 'idEvento',
  idPratica: 'idPratica',
  idPOI: 'idPOI',
  idUtente: 'idUtente',
  dataCreazione: 'dataCreazione',
  dataModifica: 'dataModifica',
  dataChiusura: 'dataChiusura',
  localizzazioneDichiarata: 'localizzazioneDichiarata',
  categoriaLavoro: 'categoriaLavoro',
  dettaglioLavoro: 'dettaglioLavoro',
  noteLavoro: 'noteLavoro',
  contabilitaLavoro: 'contabilitaLavoro',
  attrezzaturaLavoro: 'attrezzaturaLavoro',
  mezzoLavoro: 'mezzoLavoro',
  personaleLavoro: 'personaleLavoro',
  dataModificaStato: 'dataModificaStato',
  stato: 'stato',
  notaStato: 'notaStato',
  idUtenteStato: 'idUtenteStato',
  sospeso: 'sospeso',
  dataora_ini_sospensione: 'dataora_ini_sospensione',
  dataora_fine_sospensione: 'dataora_fine_sospensione',
  tempo_sospensione: 'tempo_sospensione',
  note_sospensione: 'note_sospensione',
  dataInizioProgrammata: 'dataInizioProgrammata',
  dataInizioEffettiva: 'dataInizioEffettiva',
  dataInizioMassima: 'dataInizioMassima',
  dataFineProgrammata: 'dataFineProgrammata',
  dataFineEffettiva: 'dataFineEffettiva',
  dataFineMassima: 'dataFineMassima',
  localizzazioneDichiarataQuartiere: 'localizzazioneDichiarataQuartiere',
  statoCorrenteLavoro: 'statoCorrenteLavoro',
  delOggettiCatasto: 'delOggettiCatasto',
  del: 'del',
  quantita: 'quantita',
  operatore: 'operatore',
  impresaEsecutrice: 'impresaEsecutrice',
  segnaleticatemporanea: 'segnaleticatemporanea',
  tipolavoro: 'tipolavoro',
  statoMessaInSicurezza: 'statoMessaInSicurezza',
  dataMessaInSicurezza: 'dataMessaInSicurezza',
  flgCambioStato: 'flgCambioStato',
  notePubbliche: 'notePubbliche'
});

exports.Prisma.LivelliservizioScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  idUtente: 'idUtente',
  dataModifica: 'dataModifica',
  idLds: 'idLds',
  risultato: 'risultato',
  detrazioneEffettivo: 'detrazioneEffettivo',
  premioEffettivo: 'premioEffettivo',
  chiave: 'chiave',
  unita: 'unita',
  idSegnalazione: 'idSegnalazione',
  idLavoro: 'idLavoro',
  dataIntervalloDa: 'dataIntervalloDa',
  dataIntervalloA: 'dataIntervalloA',
  dataRichiesta: 'dataRichiesta',
  dataInizioEffettivaLavoro: 'dataInizioEffettivaLavoro',
  dataChiusuraSegnalazione: 'dataChiusuraSegnalazione',
  dataFineMassima: 'dataFineMassima',
  elaborato: 'elaborato',
  idSchedulatore: 'idSchedulatore',
  tipolavoro: 'tipolavoro',
  note: 'note',
  dataCreazioneSegnalazione: 'dataCreazioneSegnalazione'
});

exports.Prisma.LivelliserviziocanoneScalarFieldEnum = makeEnum({
  id: 'id',
  idLds: 'idLds',
  anno: 'anno',
  semestre: 'semestre',
  trimestre: 'trimestre',
  canoneCalcoloLdS: 'canoneCalcoloLdS'
});

exports.Prisma.LivelliserviziodescrizioneScalarFieldEnum = makeEnum({
  id: 'id',
  ambito: 'ambito',
  lds: 'lds',
  parametroValutazione: 'parametroValutazione',
  ldsOT: 'ldsOT',
  ldsCPT: 'ldsCPT',
  indiceScostamento: 'indiceScostamento',
  penaleUnitaria: 'penaleUnitaria',
  controllo: 'controllo',
  note: 'note',
  tipo: 'tipo',
  funzione: 'funzione',
  tipoEstrazione: 'tipoEstrazione'
});

exports.Prisma.LivelliservizioschedulatoreScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  tipologia: 'tipologia',
  anno: 'anno',
  semestre: 'semestre',
  stato: 'stato',
  idUtente: 'idUtente',
  dataCreazione: 'dataCreazione'
});

exports.Prisma.MezzoScalarFieldEnum = makeEnum({
  id: 'id',
  tipologiaMezzo: 'tipologiaMezzo',
  descrizione: 'descrizione',
  dataModifica: 'dataModifica'
});

exports.Prisma.OggettoScalarFieldEnum = makeEnum({
  id: 'id',
  catastoId: 'catastoId'
});

exports.Prisma.OggettocivettaScalarFieldEnum = makeEnum({
  id: 'id',
  idSegnalazione: 'idSegnalazione',
  idOggettoCatasto: 'idOggettoCatasto',
  idAppalto: 'idAppalto',
  idUtente: 'idUtente',
  dataModifica: 'dataModifica',
  idRifCivetta: 'idRifCivetta'
});

exports.Prisma.PersonaleScalarFieldEnum = makeEnum({
  id: 'id',
  idUtente: 'idUtente',
  tipologiaPersonale: 'tipologiaPersonale',
  descrizione: 'descrizione',
  dataModifica: 'dataModifica'
});

exports.Prisma.PoiScalarFieldEnum = makeEnum({
  id: 'id',
  descrizione: 'descrizione',
  dataInizio: 'dataInizio',
  dataFine: 'dataFine',
  idAppalto: 'idAppalto',
  notePOI: 'notePOI'
});

exports.Prisma.PraticaScalarFieldEnum = makeEnum({
  id: 'id',
  idUtente: 'idUtente',
  idAppalto: 'idAppalto',
  dataModifica: 'dataModifica',
  dataChiusura: 'dataChiusura',
  nomePratica: 'nomePratica',
  localizzazioneDichiarataQuartiere: 'localizzazioneDichiarataQuartiere',
  localizzazioneDichiarata: 'localizzazioneDichiarata',
  notePratica: 'notePratica',
  importoPratica: 'importoPratica',
  del: 'del',
  dataCreazione: 'dataCreazione',
  statoCorrentePratica: 'statoCorrentePratica',
  delLavori: 'delLavori'
});

exports.Prisma.PraticastoricoScalarFieldEnum = makeEnum({
  id: 'id',
  idPratica: 'idPratica',
  idAppalto: 'idAppalto',
  idUtente: 'idUtente',
  nomePratica: 'nomePratica',
  localizzazioneDichiarataQuartiere: 'localizzazioneDichiarataQuartiere',
  localizzazioneDichiarata: 'localizzazioneDichiarata',
  dataModifica: 'dataModifica',
  dataChiusura: 'dataChiusura',
  notePratica: 'notePratica',
  importoPratica: 'importoPratica',
  del: 'del',
  dataCreazione: 'dataCreazione',
  statoCorrentePratica: 'statoCorrentePratica',
  delLavori: 'delLavori'
});

exports.Prisma.PrezzarioScalarFieldEnum = makeEnum({
  id: 'id',
  descrizione: 'descrizione',
  unitaDiMisura: 'unitaDiMisura',
  prezzo: 'prezzo'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.RegistrorichiedenteScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  noteSegnalatore: 'noteSegnalatore',
  dataCreazione: 'dataCreazione',
  dataModifica: 'dataModifica',
  dataRichiesta: 'dataRichiesta',
  localizzazioneNote: 'localizzazioneNote',
  descrizioneAnomalia: 'descrizioneAnomalia',
  idUtente: 'idUtente',
  idSegnalazione: 'idSegnalazione',
  idSegnalatore: 'idSegnalatore',
  fonteSegnalazione: 'fonteSegnalazione',
  idSegnalazioneGetico: 'idSegnalazioneGetico',
  del: 'del'
});

exports.Prisma.SegnalatoreScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  tipoSegnalatore: 'tipoSegnalatore',
  nomeSegnalatore: 'nomeSegnalatore',
  cognomeSegnalatore: 'cognomeSegnalatore',
  telefonoSegnalatore: 'telefonoSegnalatore',
  emailSegnalatore: 'emailSegnalatore',
  cellulareSegnalatore: 'cellulareSegnalatore',
  pecSegnalatore: 'pecSegnalatore'
});

exports.Prisma.SegnalazioneScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  noteSegnalatore: 'noteSegnalatore',
  segnalatori: 'segnalatori',
  dataCreazione: 'dataCreazione',
  dataModifica: 'dataModifica',
  dataRichiesta: 'dataRichiesta',
  localizzazioneDichiarata: 'localizzazioneDichiarata',
  localizzazioneDichiarataCivico: 'localizzazioneDichiarataCivico',
  localizzazioneNote: 'localizzazioneNote',
  descrizioneAnomalia: 'descrizioneAnomalia',
  commentoAnomalia: 'commentoAnomalia',
  idEvento: 'idEvento',
  idPratica: 'idPratica',
  dataModificaStato: 'dataModificaStato',
  stato: 'stato',
  notaStato: 'notaStato',
  idUtente: 'idUtente',
  idUtenteStato: 'idUtenteStato',
  idSegnalatore: 'idSegnalatore',
  fonteSegnalazione: 'fonteSegnalazione',
  categoriaAnomalia: 'categoriaAnomalia',
  dettaglioAnomalia: 'dettaglioAnomalia',
  severitaEvento: 'severitaEvento',
  tipoEvento: 'tipoEvento',
  idTecnico: 'idTecnico',
  localizzazioneDichiarataQuartiere: 'localizzazioneDichiarataQuartiere',
  idLavoroAssociato: 'idLavoroAssociato',
  dataChiusura: 'dataChiusura',
  statoCorrenteSegnalazione: 'statoCorrenteSegnalazione',
  del: 'del',
  idSegnalazioneGetico: 'idSegnalazioneGetico',
  delOggettiCatasto: 'delOggettiCatasto',
  sottoservizi: 'sottoservizi',
  sinistri: 'sinistri',
  richiestaSopralluogo: 'richiestaSopralluogo',
  numeroProvvedimento: 'numeroProvvedimento',
  idTipoProvvedimento: 'idTipoProvvedimento'
});

exports.Prisma.Segnalazione_geticoScalarFieldEnum = makeEnum({
  id: 'id',
  id_ticket: 'id_ticket',
  segnalante_nome: 'segnalante_nome',
  segnalante_cognome: 'segnalante_cognome',
  segnalante_email: 'segnalante_email',
  segnalante_telefono: 'segnalante_telefono',
  luogo_indirizzo: 'luogo_indirizzo',
  luogo_civico: 'luogo_civico',
  luogo_ubicazione: 'luogo_ubicazione',
  descrizione: 'descrizione',
  tipologia: 'tipologia',
  flg_stato: 'flg_stato',
  luogo_quartiere: 'luogo_quartiere',
  dataRichiesta: 'dataRichiesta',
  dataInoltro: 'dataInoltro',
  ufficioProvenienza: 'ufficioProvenienza',
  luogo_civico2: 'luogo_civico2',
  luogo_indirizzo2: 'luogo_indirizzo2',
  ufficio_inoltro: 'ufficio_inoltro',
  json_uffici: 'json_uffici',
  note_esito: 'note_esito',
  sopralluogo: 'sopralluogo',
  sopralluogo_note: 'sopralluogo_note',
  sopralluogo_effettuato: 'sopralluogo_effettuato',
  sopralluogo_importato: 'sopralluogo_importato',
  sopralluogo_catasto_json: 'sopralluogo_catasto_json'
});

exports.Prisma.SegnalazionestatostoricoScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  idSegnalazione: 'idSegnalazione',
  idUtente: 'idUtente',
  dataModifica: 'dataModifica',
  stato: 'stato',
  notaStato: 'notaStato'
});

exports.Prisma.SegnalazionestoricoScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  idSegnalazione: 'idSegnalazione',
  noteSegnalatore: 'noteSegnalatore',
  segnalatori: 'segnalatori',
  dataCreazione: 'dataCreazione',
  dataModifica: 'dataModifica',
  dataRichiesta: 'dataRichiesta',
  localizzazioneDichiarata: 'localizzazioneDichiarata',
  localizzazioneNote: 'localizzazioneNote',
  descrizioneAnomalia: 'descrizioneAnomalia',
  commentoAnomalia: 'commentoAnomalia',
  idEvento: 'idEvento',
  idPratica: 'idPratica',
  dataModificaStato: 'dataModificaStato',
  stato: 'stato',
  notaStato: 'notaStato',
  flgCambioStato: 'flgCambioStato',
  idUtente: 'idUtente',
  idUtenteStato: 'idUtenteStato',
  idSegnalatore: 'idSegnalatore',
  fonteSegnalazione: 'fonteSegnalazione',
  categoriaAnomalia: 'categoriaAnomalia',
  dettaglioAnomalia: 'dettaglioAnomalia',
  severitaEvento: 'severitaEvento',
  tipoEvento: 'tipoEvento',
  idLavoroAssociato: 'idLavoroAssociato',
  statoCorrenteSegnalazione: 'statoCorrenteSegnalazione',
  idSegnalazioneGetico: 'idSegnalazioneGetico',
  sottoservizi: 'sottoservizi',
  sinistri: 'sinistri',
  richiestaSopralluogo: 'richiestaSopralluogo',
  delOggettiCatasto: 'delOggettiCatasto',
  idTecnico: 'idTecnico',
  numeroProvvedimento: 'numeroProvvedimento',
  dataChiusura: 'dataChiusura',
  localizzazioneDichiarataQuartiere: 'localizzazioneDichiarataQuartiere',
  localizzazioneDichiarataCivico: 'localizzazioneDichiarataCivico',
  del: 'del',
  idTipoProvvedimento: 'idTipoProvvedimento'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SottocategoriaanomaliaScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.Sottocategoriaanomalia_sottocategorialavoroScalarFieldEnum = makeEnum({
  id: 'id',
  id_categoria_anomalia: 'id_categoria_anomalia',
  id_sottocategoria_anomalia: 'id_sottocategoria_anomalia',
  id_sottocategoria_lavoro: 'id_sottocategoria_lavoro'
});

exports.Prisma.SottocategorialavoroScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.StatoScalarFieldEnum = makeEnum({
  id: 'id',
  idEvento: 'idEvento',
  classeCorrente: 'classeCorrente',
  statoCorrente: 'statoCorrente',
  idUtente: 'idUtente',
  storiaStato: 'storiaStato'
});

exports.Prisma.StoriastatoScalarFieldEnum = makeEnum({
  id: 'id',
  statoStorico: 'statoStorico',
  stato: 'stato',
  dataStato: 'dataStato'
});

exports.Prisma.TecniciScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.TipoeventoScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.TipologiaScalarFieldEnum = makeEnum({
  id: 'id',
  proprieta: 'proprieta'
});

exports.Prisma.TipooggettoScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  tabellaNome: 'tabellaNome'
});

exports.Prisma.TipoprovvedimentoScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.TiposegnalatoreScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.TiposeveritaScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UtentiScalarFieldEnum = makeEnum({
  id: 'id',
  idAppalto: 'idAppalto',
  nome: 'nome',
  cognome: 'cognome',
  username: 'username',
  password: 'password',
  email: 'email',
  status: 'status',
  permessi: 'permessi',
  dataCreazione: 'dataCreazione',
  dataModifica: 'dataModifica',
  dataSospensione: 'dataSospensione',
  idGruppo: 'idGruppo',
  del: 'del',
  scadenzaPassword: 'scadenzaPassword',
  roles: 'roles'
});


exports.Prisma.ModelName = makeEnum({
  allegato: 'allegato',
  appalto: 'appalto',
  attrezzatura: 'attrezzatura',
  catasto_monitoraggio: 'catasto_monitoraggio',
  catastoanomalia: 'catastoanomalia',
  catastolinker: 'catastolinker',
  categoriaanomalia: 'categoriaanomalia',
  categoriaanomalia_sottocategoriaanomalia: 'categoriaanomalia_sottocategoriaanomalia',
  categoriaanomalia_sottocategorialavoro: 'categoriaanomalia_sottocategorialavoro',
  contabilita: 'contabilita',
  evento: 'evento',
  filelinker: 'filelinker',
  filtro: 'filtro',
  filtro_colonne: 'filtro_colonne',
  fonti: 'fonti',
  gruppo: 'gruppo',
  impresa: 'impresa',
  lavoro: 'lavoro',
  lavorostorico: 'lavorostorico',
  livelliservizio: 'livelliservizio',
  livelliserviziocanone: 'livelliserviziocanone',
  livelliserviziodescrizione: 'livelliserviziodescrizione',
  livelliservizioschedulatore: 'livelliservizioschedulatore',
  mezzo: 'mezzo',
  oggetto: 'oggetto',
  oggettocivetta: 'oggettocivetta',
  personale: 'personale',
  poi: 'poi',
  pratica: 'pratica',
  praticastorico: 'praticastorico',
  prezzario: 'prezzario',
  registrorichiedente: 'registrorichiedente',
  segnalatore: 'segnalatore',
  segnalazione: 'segnalazione',
  segnalazione_getico: 'segnalazione_getico',
  segnalazionestatostorico: 'segnalazionestatostorico',
  segnalazionestorico: 'segnalazionestorico',
  sottocategoriaanomalia: 'sottocategoriaanomalia',
  sottocategoriaanomalia_sottocategorialavoro: 'sottocategoriaanomalia_sottocategorialavoro',
  sottocategorialavoro: 'sottocategorialavoro',
  stato: 'stato',
  storiastato: 'storiastato',
  tecnici: 'tecnici',
  tipoevento: 'tipoevento',
  tipologia: 'tipologia',
  tipooggetto: 'tipooggetto',
  tipoprovvedimento: 'tipoprovvedimento',
  tiposegnalatore: 'tiposegnalatore',
  tiposeverita: 'tiposeverita',
  utenti: 'utenti'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
