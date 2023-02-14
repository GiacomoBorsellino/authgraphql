
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

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.Tab00B1_grafo_rilievi_2019_punti_altimetriaScalarFieldEnum = makeEnum({
  gid: 'gid',
  id_assepuntuale: 'id_assepuntuale',
  id_elemento: 'id_elemento',
  pr_grafo: 'pr_grafo',
  sequenzaasse: 'sequenzaasse',
  x: 'x',
  y: 'y',
  quota_slm: 'quota_slm',
  toponimo_rilievo: 'toponimo_rilievo',
  elemento_rilievo: 'elemento_rilievo'
});

exports.Prisma.Tab01A_area_circolazione_veicolareScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_acvei: 'id_acvei',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  livello: 'livello',
  zona: 'zona',
  sede: 'sede',
  uso: 'uso',
  area: 'area',
  coesione_pavim: 'coesione_pavim',
  struttura_pavim: 'struttura_pavim',
  trattam_superf: 'trattam_superf',
  strato1: 'strato1',
  tessitura_lastrico: 'tessitura_lastrico',
  lav_sup_lastrico: 'lav_sup_lastrico',
  pci_min: 'pci_min',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab01B_M01_sostaScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_sosta: 'id_monit_sosta',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url'
});

exports.Prisma.Tab01B_area_sostaScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_sosta: 'id_sosta',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  categoria: 'categoria',
  subtipo: 'subtipo',
  disposizione: 'disposizione',
  materiale: 'materiale',
  colore: 'colore',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab02A_M01_monit_area_circ_pedScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_acped: 'id_monit_acped',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  sottoservizi: 'sottoservizi',
  estensione: 'estensione',
  gravita: 'gravita',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_inquadr_2: 'img_monit_inquadr_2',
  img_monit_inquadr_2_url: 'img_monit_inquadr_2_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  img_monit_dettaglio_2: 'img_monit_dettaglio_2',
  img_monit_dettaglio_2_url: 'img_monit_dettaglio_2_url',
  img_monit_dettaglio_3: 'img_monit_dettaglio_3',
  img_monit_dettaglio_3_url: 'img_monit_dettaglio_3_url',
  img_monit_dettaglio_4: 'img_monit_dettaglio_4',
  img_monit_dettaglio_4_url: 'img_monit_dettaglio_4_url'
});

exports.Prisma.Tab02A_area_circolazione_pedonaleScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_acped: 'id_acped',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  livello: 'livello',
  zona: 'zona',
  sede: 'sede',
  uso: 'uso',
  posizione: 'posizione',
  area: 'area',
  coesione_pavim: 'coesione_pavim',
  struttura_pavim: 'struttura_pavim',
  trattam_superf: 'trattam_superf',
  strato1: 'strato1',
  tessitura_lastrico: 'tessitura_lastrico',
  lav_sup_lastrico: 'lav_sup_lastrico',
  cordonato: 'cordonato',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab02B_ABAScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_aba: 'id_aba',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  gestore: 'gestore',
  percorso_tattile: 'percorso_tattile',
  nonconformita_normativa: 'nonconformita_normativa',
  id_master_acped: 'id_master_acped',
  id_master_sop1: 'id_master_sop1',
  id_master_sop2: 'id_master_sop2',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf'
});

exports.Prisma.Tab03A_M01_monit_area_circ_cicScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_accic: 'id_monit_accic',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  sottoservizi: 'sottoservizi',
  estensione: 'estensione',
  gravita: 'gravita',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_inquadr_2: 'img_monit_inquadr_2',
  img_monit_inquadr_2_url: 'img_monit_inquadr_2_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  img_monit_dettaglio_2: 'img_monit_dettaglio_2',
  img_monit_dettaglio_2_url: 'img_monit_dettaglio_2_url',
  img_monit_dettaglio_3: 'img_monit_dettaglio_3',
  img_monit_dettaglio_3_url: 'img_monit_dettaglio_3_url',
  img_monit_dettaglio_4: 'img_monit_dettaglio_4',
  img_monit_dettaglio_4_url: 'img_monit_dettaglio_4_url'
});

exports.Prisma.Tab03A_area_circolazione_ciclabileScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_accic: 'id_accic',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  livello: 'livello',
  sede: 'sede',
  uso: 'uso',
  posizione: 'posizione',
  area: 'area',
  coesione_pavim: 'coesione_pavim',
  struttura_pavim: 'struttura_pavim',
  trattam_superf: 'trattam_superf',
  strato1: 'strato1',
  tessitura_lastrico: 'tessitura_lastrico',
  lav_sup_lastrico: 'lav_sup_lastrico',
  cordonato: 'cordonato',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab05A_M01_monit_muri_sostegno_clsScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_musos_cls: 'id_monit_musos_cls',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  campagna: 'campagna',
  DR: 'DR',
  NG: 'NG',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  macchie_umidita_vst: 'macchie_umidita_vst',
  macchie_umidita_est: 'macchie_umidita_est',
  macchie_umidita_int: 'macchie_umidita_int',
  macchie_umidita_note: 'macchie_umidita_note',
  cls_dilavato_vst: 'cls_dilavato_vst',
  cls_dilavato_est: 'cls_dilavato_est',
  cls_dilavato_int: 'cls_dilavato_int',
  cls_dilavato_note: 'cls_dilavato_note',
  vespai_vst: 'vespai_vst',
  vespai_est: 'vespai_est',
  vespai_int: 'vespai_int',
  vespai_note: 'vespai_note',
  copriferro_vst: 'copriferro_vst',
  copriferro_est: 'copriferro_est',
  copriferro_int: 'copriferro_int',
  copriferro_note: 'copriferro_note',
  armatura_vst: 'armatura_vst',
  armatura_est: 'armatura_est',
  armatura_int: 'armatura_int',
  armatura_note: 'armatura_note',
  lesioni_ragnatela_vst: 'lesioni_ragnatela_vst',
  lesioni_ragnatela_est: 'lesioni_ragnatela_est',
  lesioni_ragnatela_int: 'lesioni_ragnatela_int',
  lesioni_ragnatela_note: 'lesioni_ragnatela_note',
  fessure_vert_vst: 'fessure_vert_vst',
  fessure_vert_est: 'fessure_vert_est',
  fessure_vert_int: 'fessure_vert_int',
  fessure_vert_note: 'fessure_vert_note',
  fessure_oriz_vst: 'fessure_oriz_vst',
  fessure_oriz_est: 'fessure_oriz_est',
  fessure_oriz_int: 'fessure_oriz_int',
  fessure_oriz_note: 'fessure_oriz_note',
  fessure_diagonali_vst: 'fessure_diagonali_vst',
  fessure_diagonali_est: 'fessure_diagonali_est',
  fessure_diagonali_int: 'fessure_diagonali_int',
  fessure_diagonali_note: 'fessure_diagonali_note',
  riprese_successive_deteriorate_vst: 'riprese_successive_deteriorate_vst',
  riprese_successive_deteriorate_est: 'riprese_successive_deteriorate_est',
  riprese_successive_deteriorate_int: 'riprese_successive_deteriorate_int',
  riprese_successive_deteriorate_note: 'riprese_successive_deteriorate_note',
  danni_da_urto_vst: 'danni_da_urto_vst',
  danni_da_urto_est: 'danni_da_urto_est',
  danni_da_urto_int: 'danni_da_urto_int',
  danni_da_urto_note: 'danni_da_urto_note',
  fuori_piombo_vst: 'fuori_piombo_vst',
  fuori_piombo_est: 'fuori_piombo_est',
  fuori_piombo_int: 'fuori_piombo_int',
  fuori_piombo_note: 'fuori_piombo_note',
  spanciamento_vst: 'spanciamento_vst',
  spanciamento_est: 'spanciamento_est',
  spanciamento_int: 'spanciamento_int',
  spanciamento_note: 'spanciamento_note',
  scalzamento_vst: 'scalzamento_vst',
  scalzamento_est: 'scalzamento_est',
  scalzamento_int: 'scalzamento_int',
  scalzamento_note: 'scalzamento_note',
  convogliamento_acque_assente_vst: 'convogliamento_acque_assente_vst',
  convogliamento_acque_assente_est: 'convogliamento_acque_assente_est',
  convogliamento_acque_assente_int: 'convogliamento_acque_assente_int',
  convogliamento_acque_assente_note: 'convogliamento_acque_assente_note',
  pozzetti_intasati_vst: 'pozzetti_intasati_vst',
  pozzetti_intasati_est: 'pozzetti_intasati_est',
  pozzetti_intasati_int: 'pozzetti_intasati_int',
  pozzetti_intasati_note: 'pozzetti_intasati_note',
  scarichi_corti_vst: 'scarichi_corti_vst',
  scarichi_corti_est: 'scarichi_corti_est',
  scarichi_corti_int: 'scarichi_corti_int',
  scarichi_corti_note: 'scarichi_corti_note',
  scarichi_ostruiti_vst: 'scarichi_ostruiti_vst',
  scarichi_ostruiti_est: 'scarichi_ostruiti_est',
  scarichi_ostruiti_int: 'scarichi_ostruiti_int',
  scarichi_ostruiti_note: 'scarichi_ostruiti_note',
  scarichi_danneggiati_vst: 'scarichi_danneggiati_vst',
  scarichi_danneggiati_est: 'scarichi_danneggiati_est',
  scarichi_danneggiati_int: 'scarichi_danneggiati_int',
  scarichi_danneggiati_note: 'scarichi_danneggiati_note',
  dilavamento_del_rilevato_vst: 'dilavamento_del_rilevato_vst',
  dilavamento_del_rilevato_est: 'dilavamento_del_rilevato_est',
  dilavamento_del_rilevato_int: 'dilavamento_del_rilevato_int',
  dilavamento_del_rilevato_note: 'dilavamento_del_rilevato_note',
  dissesto_del_rilevato_vst: 'dissesto_del_rilevato_vst',
  dissesto_del_rilevato_est: 'dissesto_del_rilevato_est',
  dissesto_del_rilevato_int: 'dissesto_del_rilevato_int',
  dissesto_del_rilevato_note: 'dissesto_del_rilevato_note',
  non_conformita: 'non_conformita',
  azioni_preventive: 'azioni_preventive'
});

exports.Prisma.Tab05A_M02_monit_muri_sostegno_muratureScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_musos_murature: 'id_monit_musos_murature',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  campagna: 'campagna',
  DR: 'DR',
  NG: 'NG',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  fessure_orizzontali_vst: 'fessure_orizzontali_vst',
  fessure_orizzontali_est: 'fessure_orizzontali_est',
  fessure_orizzontali_int: 'fessure_orizzontali_int',
  fessure_orizzontali_note: 'fessure_orizzontali_note',
  fessure_verticali_vst: 'fessure_verticali_vst',
  fessure_verticali_est: 'fessure_verticali_est',
  fessure_verticali_int: 'fessure_verticali_int',
  fessure_verticali_note: 'fessure_verticali_note',
  fessure_diagonali_vst: 'fessure_diagonali_vst',
  fessure_diagonali_est: 'fessure_diagonali_est',
  fessure_diagonali_int: 'fessure_diagonali_int',
  fessure_diagonali_note: 'fessure_diagonali_note',
  macchie_di_umidit__vst: 'macchie_di_umidit__vst',
  macchie_di_umidit__di_risalita_est: 'macchie_di_umidit__di_risalita_est',
  macchie_di_umidit__di_risalita_int: 'macchie_di_umidit__di_risalita_int',
  macchie_di_umidit__di_risalita_note: 'macchie_di_umidit__di_risalita_note',
  dilavamento_vst: 'dilavamento_vst',
  dilavamento_est: 'dilavamento_est',
  dilavamento_int: 'dilavamento_int',
  dilavamento_note: 'dilavamento_note',
  porzione_di_muratura_mancante_vst: 'porzione_di_muratura_mancante_vst',
  porzione_di_muratura_mancante_est: 'porzione_di_muratura_mancante_est',
  porzione_di_muratura_mancante_int: 'porzione_di_muratura_mancante_int',
  porzione_di_muratura_mancante_note: 'porzione_di_muratura_mancante_note',
  riprese_successive_deteriorate_vst: 'riprese_successive_deteriorate_vst',
  riprese_successive_deteriorate_est: 'riprese_successive_deteriorate_est',
  riprese_successive_deteriorate_int: 'riprese_successive_deteriorate_int',
  riprese_successive_deteriorate_note: 'riprese_successive_deteriorate_note',
  macchie_di_colore_scuro_vst: 'macchie_di_colore_scuro_vst',
  macchie_di_colore_scuro_est: 'macchie_di_colore_scuro_est',
  macchie_di_colore_scuro_int: 'macchie_di_colore_scuro_int',
  macchie_di_colore_scuro_note: 'macchie_di_colore_scuro_note',
  efflorescenze_vst: 'efflorescenze_vst',
  efflorescenze_est: 'efflorescenze_est',
  efflorescenze_int: 'efflorescenze_int',
  efflorescenze_note: 'efflorescenze_note',
  patina_biologica_vegetazione_vst: 'patina_biologica_vegetazione_vst',
  patina_biologica_vegetazione_est: 'patina_biologica_vegetazione_est',
  patina_biologica_vegetazione_int: 'patina_biologica_vegetazione_int',
  patina_biologica_vegetazione_note: 'patina_biologica_vegetazione_note',
  polverizzazione_vst: 'polverizzazione_vst',
  polverizzazione_est: 'polverizzazione_est',
  polverizzazione_int: 'polverizzazione_int',
  polverizzazione_note: 'polverizzazione_note',
  esfoliazione_vst: 'esfoliazione_vst',
  esfoliazione_est: 'esfoliazione_est',
  esfoliazione_int: 'esfoliazione_int',
  esfoliazione_note: 'esfoliazione_note',
  fuori_piombo_vst: 'fuori_piombo_vst',
  fuori_piombo_est: 'fuori_piombo_est',
  fuori_piombo_int: 'fuori_piombo_int',
  fuori_piombo_note: 'fuori_piombo_note',
  spanciamento_vst: 'spanciamento_vst',
  spanciamento_est: 'spanciamento_est',
  spanciamento_int: 'spanciamento_int',
  spanciamento_note: 'spanciamento_note',
  scalzamento_vst: 'scalzamento_vst',
  scalzamento_est: 'scalzamento_est',
  scalzamento_int: 'scalzamento_int',
  scalzamento_note: 'scalzamento_note',
  convogliamento_acque_assente_vst: 'convogliamento_acque_assente_vst',
  convogliamento_acque_assente_est: 'convogliamento_acque_assente_est',
  convogliamento_acque_assente_int: 'convogliamento_acque_assente_int',
  convogliamento_acque_assente_note: 'convogliamento_acque_assente_note',
  pozzetti_intasati_vst: 'pozzetti_intasati_vst',
  pozzetti_intasati_est: 'pozzetti_intasati_est',
  pozzetti_intasati_int: 'pozzetti_intasati_int',
  pozzetti_intasati_note: 'pozzetti_intasati_note',
  scarichi_corti_vst: 'scarichi_corti_vst',
  scarichi_corti_est: 'scarichi_corti_est',
  scarichi_corti_int: 'scarichi_corti_int',
  scarichi_corti_note: 'scarichi_corti_note',
  scarichi_ostruiti_vst: 'scarichi_ostruiti_vst',
  scarichi_ostruiti_est: 'scarichi_ostruiti_est',
  scarichi_ostruiti_int: 'scarichi_ostruiti_int',
  scarichi_ostruiti_note: 'scarichi_ostruiti_note',
  scarichi_danneggiati_vst: 'scarichi_danneggiati_vst',
  scarichi_danneggiati_est: 'scarichi_danneggiati_est',
  scarichi_danneggiati_int: 'scarichi_danneggiati_int',
  scarichi_danneggiati_note: 'scarichi_danneggiati_note',
  dilavamento_del_rilevato_vst: 'dilavamento_del_rilevato_vst',
  dilavamento_del_rilevato_est: 'dilavamento_del_rilevato_est',
  dilavamento_del_rilevato_int: 'dilavamento_del_rilevato_int',
  dilavamento_del_rilevato_note: 'dilavamento_del_rilevato_note',
  dissesto_del_rilevato_vst: 'dissesto_del_rilevato_vst',
  dissesto_del_rilevato_est: 'dissesto_del_rilevato_est',
  dissesto_del_rilevato_int: 'dissesto_del_rilevato_int',
  dissesto_del_rilevato_note: 'dissesto_del_rilevato_note',
  non_conformita: 'non_conformita',
  azioni_preventive: 'azioni_preventive'
});

exports.Prisma.Tab05A_M03_muri_stato_avanzamentoScalarFieldEnum = makeEnum({
  id_musos: 'id_musos',
  monitorato: 'monitorato',
  note: 'note',
  id: 'id'
});

exports.Prisma.Tab05A_muri_sostegnoScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_musos: 'id_musos',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  gestore: 'gestore',
  tipo: 'tipo',
  materiale: 'materiale',
  altezza_max: 'altezza_max',
  lunghezza: 'lunghezza',
  dist_margine: 'dist_margine',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf'
});

exports.Prisma.Tab06A_ponti_impalcatiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_ponte: 'id_ponte',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  materiale: 'materiale',
  destinazione_uso: 'destinazione_uso',
  den_uff: 'den_uff',
  den_conv: 'den_conv',
  cod_conv: 'cod_conv',
  categoria: 'categoria',
  statica: 'statica',
  impalcato: 'impalcato',
  h_intradosso: 'h_intradosso',
  parapetto_dx: 'parapetto_dx',
  parapetto_sx: 'parapetto_sx',
  marciapiede_dx: 'marciapiede_dx',
  marciapiede_sx: 'marciapiede_sx',
  rete_dx: 'rete_dx',
  rete_sx: 'rete_sx',
  interferita: 'interferita',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab06B_ponti_giuntiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_giunto: 'id_giunto',
  id_ponte: 'id_ponte',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  tipologia: 'tipologia',
  larghezza: 'larghezza',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab08A_gallerie_sottopassiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_galleria: 'id_galleria',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  den_uff: 'den_uff',
  den_conv: 'den_conv',
  cod_conv: 'cod_conv',
  h_centro: 'h_centro',
  h_ciglio_dx: 'h_ciglio_dx',
  h_ciglio_sx: 'h_ciglio_sx',
  ventilazione: 'ventilazione',
  illuminazione: 'illuminazione',
  tipologia: 'tipologia',
  struttura: 'struttura',
  marciapiede_dx: 'marciapiede_dx',
  marciapiede_sx: 'marciapiede_sx',
  interferita: 'interferita',
  gestore_interferita: 'gestore_interferita',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab100_noteScalarFieldEnum = makeEnum({
  id_note: 'id_note',
  utente: 'utente',
  indirizzo: 'indirizzo',
  tipo_oggetto: 'tipo_oggetto',
  sc: 'sc',
  sf: 'sf',
  dataora_monit: 'dataora_monit',
  note: 'note',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  stato: 'stato'
});

exports.Prisma.Tab13A_M01_monit_protezione_ambienteScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_barr_fono: 'id_monit_barr_fono',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  nastro_qnt: 'nastro_qnt',
  nastro_note: 'nastro_note',
  paletto_qnt: 'paletto_qnt',
  paletto_note: 'paletto_note',
  corrente_sup_qnt: 'corrente_sup_qnt',
  corrente_sup_note: 'corrente_sup_note',
  corrente_inf_qnt: 'corrente_inf_qnt',
  corrente_inf_note: 'corrente_inf_note',
  distanziatore_qnt: 'distanziatore_qnt',
  distanziatore_note: 'distanziatore_note',
  DSM_qnt: 'DSM_qnt',
  DSM_note: 'DSM_note',
  catadiottri_qnt: 'catadiottri_qnt',
  catadiottri_note: 'catadiottri_note',
  terminali_qnt: 'terminali_qnt',
  terminali_note: 'terminali_note',
  attenuatori_qnt: 'attenuatori_qnt',
  attenuatori_note: 'attenuatori_note',
  cordolo_piastra_qnt: 'cordolo_piastra_qnt',
  cordolo_piastra_note: 'cordolo_piastra_note',
  cordolo_tirafondi_qnt: 'cordolo_tirafondi_qnt',
  cordolo_tirafondi_note: 'cordolo_tirafondi_note',
  ammaloramento_arginello_qnt: 'ammaloramento_arginello_qnt',
  ammaloramento_arginello_note: 'ammaloramento_arginello_note',
  danni_da_urto_qnt: 'danni_da_urto_qnt',
  danni_da_urto_note: 'danni_da_urto_note',
  elem_new_jersey_qnt: 'elem_new_jersey_qnt',
  elem_new_jersey_note: 'elem_new_jersey_note',
  manicotto_qnt: 'manicotto_qnt',
  manicotto_note: 'manicotto_note',
  collegamento_base_qnt: 'collegamento_base_qnt',
  collegamento_base_note: 'collegamento_base_note',
  transizioni_qnt: 'transizioni_qnt',
  transizioni_note: 'transizioni_note',
  pannello_qnt: 'pannello_qnt',
  pannello_note: 'pannello_note',
  coes_pannello_qnt: 'coes_pannello_qnt',
  coes_pannello_note: 'coes_pannello_note',
  class_bar: 'class_bar',
  ammaloramento_arg_qnt: 'ammaloramento_arg_qnt',
  ammaloramento_arg_note: 'ammaloramento_arg_note',
  campagna: 'campagna'
});

exports.Prisma.Tab13A_protezione_ambienteScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_protez_amb: 'id_protez_amb',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  tipologia: 'tipologia',
  dist_margine: 'dist_margine',
  altezza: 'altezza',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore',
  lunghezza: 'lunghezza'
});

exports.Prisma.Tab14A_illuminazioneScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_illuminazione: 'id_illuminazione',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  dist_margine: 'dist_margine',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab17A_M01_guard_railScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_guard_rail: 'id_monit_guard_rail',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  nastro_qnt: 'nastro_qnt',
  nastro_note: 'nastro_note',
  paletto_qnt: 'paletto_qnt',
  paletto_note: 'paletto_note',
  corrente_sup_qnt: 'corrente_sup_qnt',
  corrente_sup_note: 'corrente_sup_note',
  corrente_inf_qnt: 'corrente_inf_qnt',
  corrente_inf_note: 'corrente_inf_note',
  distanziatore_qnt: 'distanziatore_qnt',
  distanziatore_note: 'distanziatore_note',
  DSM_qnt: 'DSM_qnt',
  DSM_note: 'DSM_note',
  catadiottri_qnt: 'catadiottri_qnt',
  catadiottri_note: 'catadiottri_note',
  terminali_qnt: 'terminali_qnt',
  terminali_note: 'terminali_note',
  transizioni_qnt: 'transizioni_qnt',
  transizioni_note: 'transizioni_note',
  attenuatori_qnt: 'attenuatori_qnt',
  attenuatori_note: 'attenuatori_note',
  cordolo_piastra_qnt: 'cordolo_piastra_qnt',
  cordolo_piastra_note: 'cordolo_piastra_note',
  cordolo_tirafondi_qnt: 'cordolo_tirafondi_qnt',
  cordolo_tirafondi_note: 'cordolo_tirafondi_note',
  ammaloramento_arginello_qnt: 'ammaloramento_arginello_qnt',
  ammaloramento_arginello_note: 'ammaloramento_arginello_note',
  danni_da_urto_qnt: 'danni_da_urto_qnt',
  danni_da_urto_note: 'danni_da_urto_note',
  class_bar: 'class_bar',
  campagna: 'campagna'
});

exports.Prisma.Tab17A_M02_New_JerseyScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_new_jersey: 'id_monit_new_jersey',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  elem_new_jersey_qnt: 'elem_new_jersey_qnt',
  elem_new_jersey_note: 'elem_new_jersey_note',
  corrente_sup_qnt: 'corrente_sup_qnt',
  corrente_sup_note: 'corrente_sup_note',
  manicotto_qnt: 'manicotto_qnt',
  manicotto_note: 'manicotto_note',
  catadiottri_qnt: 'catadiottri_qnt',
  catadiottri_note: 'catadiottri_note',
  collegamento_base_qnt: 'collegamento_base_qnt',
  collegamento_base_note: 'collegamento_base_note',
  cordolo_piastra_qnt: 'cordolo_piastra_qnt',
  cordolo_piastra_note: 'cordolo_piastra_note',
  cordolo_tirafondi_qnt: 'cordolo_tirafondi_qnt',
  cordolo_tirafondi_note: 'cordolo_tirafondi_note',
  ammaloramento_arg_qnt: 'ammaloramento_arg_qnt',
  ammaloramento_arg_note: 'ammaloramento_arg_note',
  danni_da_urto_qnt: 'danni_da_urto_qnt',
  danni_da_urto_note: 'danni_da_urto_note',
  transizioni_qnt: 'transizioni_qnt',
  transizioni_note: 'transizioni_note',
  class_bar: 'class_bar',
  campagna: 'campagna'
});

exports.Prisma.Tab17A_M03_muretti_ringhiereScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_muretti_ringhiere: 'id_monit_muretti_ringhiere',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  campagna: 'campagna',
  DR: 'DR',
  NG: 'NG',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  fessure_vst: 'fessure_vst',
  fessure_est: 'fessure_est',
  fessure_int: 'fessure_int',
  fessure_note: 'fessure_note',
  macchie_umidita_vst: 'macchie_umidita_vst',
  macchie_umidita_est: 'macchie_umidita_est',
  macchie_umidita_int: 'macchie_umidita_int',
  macchie_umidita_note: 'macchie_umidita_note',
  porzione_di_muratura_cls_mancante_vst: 'porzione_di_muratura_cls_mancante_vst',
  porzione_di_muratura_cls_mancante_est: 'porzione_di_muratura_cls_mancante_est',
  porzione_di_muratura_cls_mancante_int: 'porzione_di_muratura_cls_mancante_int',
  porzione_di_muratura_cls_mancante_note: 'porzione_di_muratura_cls_mancante_note',
  riprese_successive_deteriorate_vst: 'riprese_successive_deteriorate_vst',
  riprese_successive_deteriorate_est: 'riprese_successive_deteriorate_est',
  riprese_successive_deteriorate_int: 'riprese_successive_deteriorate_int',
  riprese_successive_deteriorate_note: 'riprese_successive_deteriorate_note',
  patina_biologica_vegetazione_vst: 'patina_biologica_vegetazione_vst',
  patina_biologica_vegetazione_est: 'patina_biologica_vegetazione_est',
  patina_biologica_vegetazione_int: 'patina_biologica_vegetazione_int',
  patina_biologica_vegetazione_note: 'patina_biologica_vegetazione_note',
  polverizzazione_vst: 'polverizzazione_vst',
  polverizzazione_est: 'polverizzazione_est',
  polverizzazione_int: 'polverizzazione_int',
  polverizzazione_note: 'polverizzazione_note',
  fuori_piombo_vst: 'fuori_piombo_vst',
  fuori_piombo_est: 'fuori_piombo_est',
  fuori_piombo_int: 'fuori_piombo_int',
  fuori_piombo_note: 'fuori_piombo_note',
  danni_da_urto_vst: 'danni_da_urto_vst',
  danni_da_urto_est: 'danni_da_urto_est',
  danni_da_urto_int: 'danni_da_urto_int',
  danni_da_urto_note: 'danni_da_urto_note',
  degrado_ancoraggio_vst: 'degrado_ancoraggio_vst',
  degrado_ancoraggio_est: 'degrado_ancoraggio_est',
  degrado_ancoraggio_int: 'degrado_ancoraggio_int',
  degrado_ancoraggio_note: 'degrado_ancoraggio_note',
  difetti_connessione_vst: 'difetti_connessione_vst',
  difetti_connessione_est: 'difetti_connessione_est',
  difetti_connessione_int: 'difetti_connessione_int',
  difetti_connessione_note: 'difetti_connessione_note'
});

exports.Prisma.Tab17A_M05_attenuatori_urtoScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_att_urto: 'id_monit_att_urto',
  utente: 'utente',
  dataora_monit: 'dataora_monit',
  dataora_modifica: 'dataora_modifica',
  note_gen: 'note_gen',
  img_inquadramento: 'img_inquadramento',
  img_dettaglio_1: 'img_dettaglio_1',
  img_dettaglio_2: 'img_dettaglio_2',
  img_dettaglio_3: 'img_dettaglio_3',
  img_dettaglio_4: 'img_dettaglio_4',
  img_inquadramento_url: 'img_inquadramento_url',
  img_dettaglio_1_url: 'img_dettaglio_1_url',
  img_dettaglio_2_url: 'img_dettaglio_2_url',
  img_dettaglio_3_url: 'img_dettaglio_3_url',
  img_dettaglio_4_url: 'img_dettaglio_4_url',
  elemento_vst: 'elemento_vst',
  elemento_qnt: 'elemento_qnt',
  elemento_note: 'elemento_note',
  classe: 'classe',
  tipologia: 'tipologia',
  campagna: 'campagna'
});

exports.Prisma.Tab17A_M06_disprit_stato_avanzamentoScalarFieldEnum = makeEnum({
  id_disprit: 'id_disprit',
  monitorato: 'monitorato',
  note: 'note',
  id: 'id'
});

exports.Prisma.Tab17A_dispositivi_ritenutaScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_disprit: 'id_disprit',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  gestore: 'gestore',
  dist_margine: 'dist_margine',
  lunghezza: 'lunghezza',
  tipo_barriera: 'tipo_barriera',
  gruppo_barriera: 'gruppo_barriera',
  tipo_dispositivo: 'tipo_dispositivo',
  materiale: 'materiale',
  supporto: 'supporto',
  fonoassorbente: 'fonoassorbente',
  rete_protezione: 'rete_protezione',
  dsm: 'dsm',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf'
});

exports.Prisma.Tab19A_M01_monit_griglie_caditoieScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_caditoia: 'id_monit_caditoia',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url'
});

exports.Prisma.Tab19A_griglie_caditoieScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_caditoia: 'id_caditoia',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  materiale: 'materiale',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab20A_pozzetti_sottoserviziScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_pozzetto: 'id_pozzetto',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  gestore: 'gestore',
  tipologia: 'tipologia',
  dist_margine: 'dist_margine',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf'
});

exports.Prisma.Tab24A_M01_monit_dossiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_dosso: 'id_monit_dosso',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url'
});

exports.Prisma.Tab24A_dossiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_dosso: 'id_dosso',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  materiale: 'materiale',
  segnalamento: 'segnalamento',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab27A_M01_monit_segn_vert_supportiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_supporto: 'id_monit_supporto',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  conformita_normativa: 'conformita_normativa',
  note_conformita: 'note_conformita'
});

exports.Prisma.Tab27A_segn_vert_supportiScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_supporto: 'id_supporto',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  supporto: 'supporto',
  strada_secondaria: 'strada_secondaria',
  presenza_segn_vert: 'presenza_segn_vert',
  presenza_imp_pub: 'presenza_imp_pub',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab27B_M01_monit_segn_vert_cartelliScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_pannello: 'id_monit_pannello',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  conformita_normativa: 'conformita_normativa',
  note_conformita: 'note_conformita'
});

exports.Prisma.Tab27B_segn_vert_cartelliScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_supporto: 'id_supporto',
  id_pannello: 'id_pannello',
  id_segnale: 'id_segnale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  famiglia: 'famiglia',
  codice: 'codice',
  descrizione: 'descrizione',
  testo_segnale: 'testo_segnale',
  testo_integrativo: 'testo_integrativo',
  illuminazione: 'illuminazione',
  composito: 'composito',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab27C_segn_vert_tempScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_lavoro: 'id_lavoro',
  id_segnale_temp: 'id_segnale_temp',
  quartiere: 'quartiere',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  famiglia_temp: 'famiglia_temp',
  num_segn_temp: 'num_segn_temp',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  dataora_ini_lavoro: 'dataora_ini_lavoro',
  data_attivazione: 'data_attivazione',
  dataora_fine_lavoro: 'dataora_fine_lavoro',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  rione: 'rione',
  unesco: 'unesco',
  gestore: 'gestore'
});

exports.Prisma.Tab29_imp_pubblicitariScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_supporto: 'id_supporto',
  id_segnale: 'id_segnale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab30A_M01_monit_segn_oriz_PScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_sop: 'id_monit_sop',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  conformita_normativa: 'conformita_normativa',
  note_conformita: 'note_conformita'
});

exports.Prisma.Tab30A_segn_oriz_PScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_sop: 'id_sop',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  materiale: 'materiale',
  colore: 'colore',
  strada_secondaria: 'strada_secondaria',
  area: 'area',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab30B_M01_monit_segn_oriz_LScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_sol: 'id_monit_sol',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url',
  conformita_normativa: 'conformita_normativa',
  note_conformita: 'note_conformita'
});

exports.Prisma.Tab30B_segn_oriz_LScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_sol: 'id_sol',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  posizione: 'posizione',
  tipologia: 'tipologia',
  materiale: 'materiale',
  colore: 'colore',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore',
  lunghezza: 'lunghezza'
});

exports.Prisma.Tab32A_impianti_semaforiciScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_semaforo: 'id_semaforo',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  supporto: 'supporto',
  lanterne: 'lanterne',
  gestore: 'gestore',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf'
});

exports.Prisma.Tab34A_impianti_tecnologiciScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_impianto_tec: 'id_impianto_tec',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  gestore: 'gestore',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf'
});

exports.Prisma.Tab43A_M01_monit_paraped_dissuasScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_parap: 'id_monit_parap',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url'
});

exports.Prisma.Tab43A_paraped_dissuasorisostaScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_parapedonale: 'id_parapedonale',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  modello: 'modello',
  materiale: 'materiale',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab43B_M01_monit_rastrelliereScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_monit_rastrelliera: 'id_monit_rastrelliera',
  utente: 'utente',
  sc: 'sc',
  sf: 'sf',
  sottocategoria_anomalia: 'sottocategoria_anomalia',
  fonte_monit: 'fonte_monit',
  dataora_monit: 'dataora_monit',
  note_monit: 'note_monit',
  img_monit_inquadr_1: 'img_monit_inquadr_1',
  img_monit_inquadr_1_url: 'img_monit_inquadr_1_url',
  img_monit_dettaglio_1: 'img_monit_dettaglio_1',
  img_monit_dettaglio_1_url: 'img_monit_dettaglio_1_url'
});

exports.Prisma.Tab43B_rastrelliereScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_rastrelliera: 'id_rastrelliera',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  modello: 'modello',
  materiale: 'materiale',
  num_posti: 'num_posti',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab43C_arredo_urbanoScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_oggetto: 'tipo_oggetto',
  id_arredo: 'id_arredo',
  id_originale: 'id_originale',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  civico_ini: 'civico_ini',
  tipologia: 'tipologia',
  materiale: 'materiale',
  cod_via: 'cod_via',
  rete: 'rete',
  id_elem_var: 'id_elem_var',
  strada_var: 'strada_var',
  origine: 'origine',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  simbolo: 'simbolo',
  simbolo_url: 'simbolo_url',
  sc: 'sc',
  sf: 'sf',
  gestore: 'gestore'
});

exports.Prisma.Tab45A1_indici_pavim_bitume_2020ScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_sampleunit: 'id_sampleunit',
  id_master_acvei: 'id_master_acvei',
  cod_via: 'cod_via',
  class_pgtu: 'class_pgtu',
  rete: 'rete',
  quartiere: 'quartiere',
  indir_cpt: 'indir_cpt',
  travel_tim: 'travel_tim',
  lengthsu: 'lengthsu',
  row: 'row',
  x_midpoint: 'x_midpoint',
  y_midpoint: 'y_midpoint',
  sort_num: 'sort_num',
  branchid: 'branchid',
  sectionid: 'sectionid',
  rank: 'rank',
  const_date: 'const_date',
  length: 'length',
  width: 'width',
  pid_rsp: 'pid_rsp',
  area: 'area',
  vertex_ind: 'vertex_ind',
  vertex_par: 'vertex_par',
  vertex_p_1: 'vertex_p_1',
  distance: 'distance',
  angle: 'angle',
  pid: 'pid',
  pci: 'pci',
  npt: 'npt',
  rut_s1: 'rut_s1',
  rut_s2: 'rut_s2',
  rut_s3: 'rut_s3',
  long: 'long',
  alligator: 'alligator',
  blocks: 'blocks',
  date: 'date',
  toponimo: 'toponimo',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  gestore: 'gestore'
});

exports.Prisma.Tab45A2_indici_pavim_bitume_2021ScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  tipo_ogget: 'tipo_ogget',
  quartiere: 'quartiere',
  toponimo: 'toponimo',
  livello: 'livello',
  zona: 'zona',
  sede: 'sede',
  uso: 'uso',
  area: 'area',
  strato1: 'strato1',
  tessitura_: 'tessitura_',
  lav_sup_la: 'lav_sup_la',
  cod_via: 'cod_via',
  note: 'note',
  gestore: 'gestore',
  pci2020: 'pci2020',
  class: 'class',
  pci2021: 'pci2021',
  iri2021: 'iri2021',
  rd2021: 'rd2021',
  etd2021: 'etd2021',
  id_master_acvei: 'id_master_acvei'
});

exports.Prisma.Tab45A3_indici_pavim_bitume_2022ScalarFieldEnum = makeEnum({
  id_sampleunit: 'id_sampleunit',
  id_master: 'id_master',
  id_master_acvei: 'id_master_acvei',
  tipo_oggetto: 'tipo_oggetto',
  quartiere: 'quartiere',
  toponimo: 'toponimo',
  livello: 'livello',
  zona: 'zona',
  sede: 'sede',
  uso: 'uso',
  area: 'area',
  strato1: 'strato1',
  tessitura_lastrico: 'tessitura_lastrico',
  lav_sup_lastrico: 'lav_sup_lastrico',
  cod_via: 'cod_via',
  note: 'note',
  gestore: 'gestore',
  pci_2020: 'pci_2020',
  class: 'class',
  pci_2021: 'pci_2021',
  all_2021: 'all_2021',
  rd_2021: 'rd_2021',
  cr_2021: 'cr_2021',
  iri_2021: 'iri_2021',
  rd_2021b: 'rd_2021b',
  etd_2021: 'etd_2021',
  etd_2022: 'etd_2022',
  iri_2022: 'iri_2022',
  rd_2022: 'rd_2022',
  pci_2022: 'pci_2022',
  all_2022: 'all_2022',
  cr_2022: 'cr_2022',
  rd_2022b: 'rd_2022b'
});

exports.Prisma.Tab45B1_indici_pavim_lastrico_2020ScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_sampleunit: 'id_sampleunit',
  id_master_acvei: 'id_master_acvei',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  toponimo2: 'toponimo2',
  area: 'area',
  strato1: 'strato1',
  cod_via: 'cod_via',
  cod_via2: 'cod_via2',
  rete: 'rete',
  origine: 'origine',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sup_sec_dy: 'sup_sec_dy',
  lci: 'lci',
  avvallam: 'avvallam',
  sfogliam_h: 'sfogliam_h',
  sfogliam_l: 'sfogliam_l',
  toppe: 'toppe',
  scalin_h: 'scalin_h',
  scalin_l: 'scalin_l',
  integr_h: 'integr_h',
  integr_l: 'integr_l',
  stuccature: 'stuccature',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  gestore: 'gestore'
});

exports.Prisma.Tab45B2_indici_pavim_lastrico_2021ScalarFieldEnum = makeEnum({
  id_master: 'id_master',
  id_sampleunit: 'id_sampleunit',
  quartiere: 'quartiere',
  rione: 'rione',
  unesco: 'unesco',
  toponimo: 'toponimo',
  area: 'area',
  strato1: 'strato1',
  cod_via: 'cod_via',
  rete: 'rete',
  origine: 'origine',
  note: 'note',
  img: 'img',
  img_url: 'img_url',
  sup_sec_dy: 'sup_sec_dy',
  lci: 'lci',
  avvallam: 'avvallam',
  sfogliam_h: 'sfogliam_h',
  sfogliam_l: 'sfogliam_l',
  toppe: 'toppe',
  scalin_h: 'scalin_h',
  scalin_l: 'scalin_l',
  integr_h: 'integr_h',
  integr_l: 'integr_l',
  stuccature: 'stuccature',
  data_attivazione: 'data_attivazione',
  data_dismissione: 'data_dismissione',
  gestore: 'gestore',
  id_master_acvei: 'id_master_acvei'
});

exports.Prisma.Tab_famiglia_segn_tempScalarFieldEnum = makeEnum({
  id: 'id',
  famiglia_temp: 'famiglia_temp'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});
exports.arredo_urbano_t = makeEnum({
  cestino: 'cestino',
  pensilina: 'pensilina',
  panchina: 'panchina',
  fontanella: 'fontanella',
  altro: 'altro',
  gioco: 'gioco',
  fioriera: 'fioriera'
});

exports.barriera_t = makeEnum({
  centrale_spartitraffico: 'centrale_spartitraffico',
  per_bordo_laterale: 'per_bordo_laterale',
  per_opere_d_arte: 'per_opere_d_arte',
  per_punti_singolari: 'per_punti_singolari',
  semovente_per_chiusura_varchi: 'semovente_per_chiusura_varchi',
  altro: 'altro',
  per_opere_d_arteb: 'per_opere_d_arteb'
});

exports.caditoie_t = makeEnum({
  BLG: 'BLG',
  BLU: 'BLU',
  GRF: 'GRF',
  GRI: 'GRI',
  GRT: 'GRT',
  LAP: 'LAP',
  SCO: 'SCO',
  altro: 'altro'
});

exports.catasto_segnale_orizz_lin_t = makeEnum({
  singola_continua: 'singola_continua',
  singola_tratteggiata: 'singola_tratteggiata',
  doppia_continua: 'doppia_continua',
  doppia_tratteggiata: 'doppia_tratteggiata',
  doppia_tratteggiata_a_sx: 'doppia_tratteggiata_a_sx',
  doppia_tratteggiata_a_dx: 'doppia_tratteggiata_a_dx',
  occhi_di_gatto_e_affini: 'occhi_di_gatto_e_affini',
  cordoli_separatori_di_corsia: 'cordoli_separatori_di_corsia',
  delineatori_flessibili_di_margine: 'delineatori_flessibili_di_margine',
  zig_zag: 'zig_zag',
  altro: 'altro'
});

exports.categoria_ponti_t = makeEnum({
  non_determinata: 'non_determinata',
  I_categoria: 'I_categoria',
  II_categoria: 'II_categoria',
  III_categoria__passerelle_pedonali_: 'III_categoria__passerelle_pedonali_'
});

exports.class_bar_t = makeEnum({
  N1: 'N1',
  N2: 'N2',
  H1: 'H1',
  H2: 'H2',
  H3: 'H3',
  H4: 'H4',
  null: 'null'
});

exports.coesione_pavim_t = makeEnum({
  materiale_sciolto: 'materiale_sciolto',
  materiale_legato: 'materiale_legato',
  ad_elementi: 'ad_elementi'
});

exports.colore_segnale_orizz_t = makeEnum({
  bianco: 'bianco',
  giallo: 'giallo',
  azzurro: 'azzurro',
  giallo_e_nero: 'giallo_e_nero',
  bianco_e_rosso: 'bianco_e_rosso',
  bianco_e_azzurro: 'bianco_e_azzurro',
  rosa: 'rosa',
  altro: 'altro'
});

exports.conformita_normativa_t = makeEnum({
  SI: 'SI',
  NO: 'NO',
  VERIFICARE: 'VERIFICARE'
});

exports.cordonato_t = makeEnum({
  pietra_naturale: 'pietra_naturale',
  pietra_artificiale: 'pietra_artificiale',
  cemento: 'cemento',
  altro: 'altro'
});

exports.disposiz_sosta_t = makeEnum({
  sosta_in_linea: 'sosta_in_linea',
  sosta_ortogonale: 'sosta_ortogonale',
  sosta_a_spina: 'sosta_a_spina',
  altro: 'altro'
});

exports.dosso_t = makeEnum({
  dosso_rallentatore: 'dosso_rallentatore',
  altro: 'altro'
});

exports.estensione_small_t = makeEnum({
  NULL: 'NULL'
});

exports.estensione_t = makeEnum({
  NULL: 'NULL'
});

exports.famiglia_t = makeEnum({
  limite_di_velocita: 'limite_di_velocita',
  divieto_di_sorpasso: 'divieto_di_sorpasso',
  restringimento: 'restringimento',
  fine_cantiere: 'fine_cantiere',
  strada_senza_sfondo: 'strada_senza_sfondo',
  strada_chiusa: 'strada_chiusa',
  senso_unico_alternato: 'senso_unico_alternato',
  lavori_in_corso: 'lavori_in_corso',
  pedoni_lato_opposto: 'pedoni_lato_opposto',
  passaggio_obbligato: 'passaggio_obbligato',
  pericolo_generico: 'pericolo_generico',
  strada_dissestata: 'strada_dissestata',
  divieto_di_sosta: 'divieto_di_sosta',
  lampada: 'lampada',
  transenna: 'transenna',
  altro: 'altro'
});

exports.fonte_monit_t = makeEnum({
  M: 'M',
  S: 'S',
  L: 'L'
});

exports.galleria_t = makeEnum({
  naturale: 'naturale',
  artificiale_aperta: 'artificiale_aperta',
  artificiale_chiusa: 'artificiale_chiusa',
  artificiale_finestrata: 'artificiale_finestrata',
  sottopasso_ad_uso_promiscuo: 'sottopasso_ad_uso_promiscuo',
  sottopasso_solo_veicolare: 'sottopasso_solo_veicolare',
  sottopasso_solo_ciclopedonale: 'sottopasso_solo_ciclopedonale'
});

exports.gestore_sottoservizi_t = makeEnum({
  Publiacqua: 'Publiacqua',
  Toscana_Energia: 'Toscana_Energia',
  Enel: 'Enel',
  Silfi: 'Silfi',
  Open_Fibre: 'Open_Fibre',
  Telecom: 'Telecom',
  Fastweb: 'Fastweb',
  Wind: 'Wind',
  privato: 'privato',
  altro: 'altro'
});

exports.gestore_t = makeEnum({
  Comune_Firenze_proprietario: 'Comune_Firenze_proprietario',
  Comune_Firenze_privato_uso_pubblico: 'Comune_Firenze_privato_uso_pubblico',
  ANAS: 'ANAS',
  Ferrovie_dello_Stato: 'Ferrovie_dello_Stato',
  privato: 'privato',
  altro: 'altro',
  SILFI: 'SILFI'
});

exports.giunto_t = makeEnum({
  gomma_armata: 'gomma_armata',
  pettine_in_metallo: 'pettine_in_metallo',
  modulare_in_lamelle: 'modulare_in_lamelle',
  sottopavimentazione: 'sottopavimentazione',
  tampone_a_freddo: 'tampone_a_freddo',
  altro: 'altro'
});

exports.gruppo_barriera_t = makeEnum({
  guard_rail: 'guard_rail',
  new_jersey: 'new_jersey',
  muretto: 'muretto',
  parapetto_o_ringhiera: 'parapetto_o_ringhiera',
  altro: 'altro'
});

exports.illuminazione_t = makeEnum({
  palina_globo: 'palina_globo',
  torre_faro: 'torre_faro',
  palificata: 'palificata',
  sospesa_al_centro: 'sospesa_al_centro',
  su_palo: 'su_palo',
  a_muro: 'a_muro',
  altro: 'altro'
});

exports.impalcato_ponti_t = makeEnum({
  impalcato_a_solettone: 'impalcato_a_solettone',
  impalcato_a_sezione_piena_ad_arco: 'impalcato_a_sezione_piena_ad_arco',
  impalcato_a_grigliato_di_travi: 'impalcato_a_grigliato_di_travi',
  impalcato_a_cassone: 'impalcato_a_cassone',
  impalcato_a_trave_reticolare: 'impalcato_a_trave_reticolare',
  struttura_composita_acciaio_cls: 'struttura_composita_acciaio_cls',
  altro: 'altro'
});

exports.impianto_pubblicitario_t = makeEnum({
  preinsegna: 'preinsegna',
  cartello: 'cartello',
  impianto_a_msg_variab__o_led_lumin_: 'impianto_a_msg_variab__o_led_lumin_',
  insegna: 'insegna',
  bacheca: 'bacheca'
});

exports.impianto_tecnologico_t = makeEnum({
  PMV: 'PMV',
  pilomat: 'pilomat',
  colonnina_ricarica: 'colonnina_ricarica',
  altro: 'altro'
});

exports.intensita_small_t = makeEnum({
  NULL: 'NULL'
});

exports.intensita_t = makeEnum({
  NULL: 'NULL'
});

exports.interferita_ponti_t = makeEnum({
  strada: 'strada',
  ferrovia: 'ferrovia',
  fiume: 'fiume',
  canale: 'canale',
  nessuna: 'nessuna',
  altro: 'altro'
});

exports.interferita_sottopasso_t = makeEnum({
  strada_privata: 'strada_privata',
  strada_comunale: 'strada_comunale',
  strada_provinciale: 'strada_provinciale',
  strada_regionale: 'strada_regionale',
  strada_anas: 'strada_anas',
  autostrada: 'autostrada',
  ferrovia: 'ferrovia',
  tranvia: 'tranvia',
  servizi: 'servizi',
  altro: 'altro'
});

exports.lavsup_lastrico_t = makeEnum({
  punzecchiatura: 'punzecchiatura',
  rigatura: 'rigatura',
  fiammatura: 'fiammatura',
  altro: 'altro'
});

exports.livello_t = makeEnum({
  in_sottopasso: 'in_sottopasso',
  non_in_sottopasso: 'non_in_sottopasso'
});

exports.mat_arredo_urbano_t = makeEnum({
  acciaio: 'acciaio',
  CLS: 'CLS',
  legno: 'legno',
  pietra: 'pietra',
  plastica: 'plastica',
  altro: 'altro'
});

exports.mat_caditoie_t = makeEnum({
  acciaio: 'acciaio',
  CLS: 'CLS',
  muratura: 'muratura',
  pietra: 'pietra',
  altro: 'altro'
});

exports.mat_dosso_t = makeEnum({
  plastica: 'plastica',
  CLS: 'CLS',
  conglomerato_bituminoso: 'conglomerato_bituminoso',
  altro: 'altro'
});

exports.mat_parapedonale_t = makeEnum({
  acciaio: 'acciaio',
  CLS: 'CLS',
  legno: 'legno',
  pietra: 'pietra',
  plastica: 'plastica',
  altro: 'altro'
});

exports.mat_ponti_t = makeEnum({
  calcestruzzo: 'calcestruzzo',
  ferro: 'ferro',
  legno: 'legno',
  muratura: 'muratura'
});

exports.mat_rastrelliera_t = makeEnum({
  acciaio: 'acciaio',
  CLS: 'CLS',
  legno: 'legno',
  pietra: 'pietra',
  plastica: 'plastica',
  altro: 'altro'
});

exports.materiale_disp_ritenuta_t = makeEnum({
  acciaio: 'acciaio',
  CLS: 'CLS',
  legno: 'legno',
  muratura: 'muratura',
  acciaio_e_legno: 'acciaio_e_legno',
  acciaio_e_cls: 'acciaio_e_cls',
  acciaio_e_muratura: 'acciaio_e_muratura',
  muratura_e_legno: 'muratura_e_legno',
  altro: 'altro'
});

exports.materiale_muro_t = makeEnum({
  materiale_lapideo_sciolto: 'materiale_lapideo_sciolto',
  materiale_lapideo_legato: 'materiale_lapideo_legato',
  CLS_non_armato: 'CLS_non_armato',
  CLS_armato: 'CLS_armato',
  gabbionata_metallica: 'gabbionata_metallica',
  terra_armata: 'terra_armata',
  berlinese_di_pali: 'berlinese_di_pali',
  muro_ad_elementi_cellulari: 'muro_ad_elementi_cellulari',
  altro: 'altro'
});

exports.materiale_segnale_orizz_t = makeEnum({
  vernice: 'vernice',
  strisce_adesive: 'strisce_adesive',
  altro: 'altro',
  termoplastico: 'termoplastico'
});

exports.muro_t = makeEnum({
  rivestimento_naturale: 'rivestimento_naturale',
  rivestimento_pavimentato: 'rivestimento_pavimentato',
  terrapieno: 'terrapieno',
  gabbionata_di_sostegno: 'gabbionata_di_sostegno',
  muri_di_sostegno: 'muri_di_sostegno',
  terrazzamento_agricolo: 'terrazzamento_agricolo',
  muri_d_ala: 'muri_d_ala'
});

exports.paraped_modello_t = makeEnum({
  chiodo_fiorentino: 'chiodo_fiorentino',
  philippo: 'philippo',
  altro: 'altro'
});

exports.parapedonale_t = makeEnum({
  parapedonale_a_paletto_con_catena: 'parapedonale_a_paletto_con_catena',
  parapedonale_ad_arco: 'parapedonale_ad_arco',
  parapedonale_a_transenna: 'parapedonale_a_transenna',
  dissuasore_di_sosta_a_paletto: 'dissuasore_di_sosta_a_paletto',
  dissuasore_di_sosta_a_panettone: 'dissuasore_di_sosta_a_panettone',
  dissuasore_di_sosta_ad_arco: 'dissuasore_di_sosta_ad_arco',
  paracolpi_per_pali_e_alberi: 'paracolpi_per_pali_e_alberi',
  altro: 'altro',
  catena: 'catena'
});

exports.posiz_cicloped_t = makeEnum({
  sede_riservata_isolata: 'sede_riservata_isolata',
  sede_riservata_contigua_a_sede_stradale: 'sede_riservata_contigua_a_sede_stradale',
  altro: 'altro',
  sede_ad_uso_promiscuo_veicolare: 'sede_ad_uso_promiscuo_veicolare',
  sede_ad_uso_promiscuo_ciclopedonale: 'sede_ad_uso_promiscuo_ciclopedonale'
});

exports.posizione_segnale_orizz_t = makeEnum({
  margine: 'margine',
  separazione_sensi_di_marcia: 'separazione_sensi_di_marcia',
  corsia: 'corsia',
  raccordo_per_presenza_ostacoli: 'raccordo_per_presenza_ostacoli',
  raccordo_per_variaz__largh__carreg__o_num_corsie: 'raccordo_per_variaz__largh__carreg__o_num_corsie',
  altro: 'altro'
});

exports.pozzetto_t = makeEnum({
  chiusino_in_ghisa: 'chiusino_in_ghisa',
  chiusino_in_cls: 'chiusino_in_cls',
  altro: 'altro'
});

exports.protez_ambientale_t = makeEnum({
  opere_mitigazione_impatti_visivi: 'opere_mitigazione_impatti_visivi',
  barriere_antirumore: 'barriere_antirumore',
  reti_su_opere_di_scavalcamento: 'reti_su_opere_di_scavalcamento',
  altro: 'altro'
});

exports.quartieri_t = makeEnum({
  Q1_Centro_Storico: 'Q1_Centro_Storico',
  Q2_Campo_di_Marte: 'Q2_Campo_di_Marte',
  Q3_Gavinana_Galluzzo: 'Q3_Gavinana_Galluzzo',
  Q4_Isolotto_Legnaia: 'Q4_Isolotto_Legnaia',
  Q5_Rifredi: 'Q5_Rifredi'
});

exports.rastrelliera_t = makeEnum({
  arco_inox: 'arco_inox',
  bell_italia: 'bell_italia',
  molla: 'molla',
  panchina: 'panchina',
  parapedonale_ad_arco: 'parapedonale_ad_arco',
  tipo_FI: 'tipo_FI',
  altro: 'altro'
});

exports.sede_accic_t = makeEnum({
  a_raso: 'a_raso',
  in_rilevato: 'in_rilevato',
  in_trincea: 'in_trincea',
  a_mezza_costa: 'a_mezza_costa',
  su_ponte_viadotto_cavalcavia: 'su_ponte_viadotto_cavalcavia',
  su_rampa: 'su_rampa',
  in_galleria: 'in_galleria'
});

exports.sede_acped_t = makeEnum({
  a_raso: 'a_raso',
  in_galleria_sottopassaggio_pedonale: 'in_galleria_sottopassaggio_pedonale',
  su_ponte_passerella_pedonale: 'su_ponte_passerella_pedonale',
  su_rampa: 'su_rampa',
  altro: 'altro'
});

exports.sede_acvei_t = makeEnum({
  a_raso: 'a_raso',
  in_rilevato: 'in_rilevato',
  in_trincea: 'in_trincea',
  a_mezza_costa: 'a_mezza_costa',
  su_ponte_viadotto_cavalcavia: 'su_ponte_viadotto_cavalcavia',
  su_rampa: 'su_rampa',
  in_galleria: 'in_galleria'
});

exports.segnalamento_t = makeEnum({
  nessuno: 'nessuno',
  segnale_verticale: 'segnale_verticale',
  segnale_orizzontale: 'segnale_orizzontale',
  altro: 'altro'
});

exports.segnale_orizz_pun_t = makeEnum({
  striscia_stop: 'striscia_stop',
  striscia_dare_precedenza: 'striscia_dare_precedenza',
  attraversamento_pedonale_rialzato: 'attraversamento_pedonale_rialzato',
  attraversamento_ciclopedonale: 'attraversamento_ciclopedonale',
  attraversamento_ciclabile: 'attraversamento_ciclabile',
  scritta_stop: 'scritta_stop',
  triangolo_dare_precedenza: 'triangolo_dare_precedenza',
  freccia_direzionale: 'freccia_direzionale',
  freccia_di_rientro: 'freccia_di_rientro',
  rallentatore_ottico: 'rallentatore_ottico',
  rallentatore_acustico: 'rallentatore_acustico',
  simbolo_pedone: 'simbolo_pedone',
  simbolo_bici: 'simbolo_bici',
  testo: 'testo',
  zebratura: 'zebratura',
  altro: 'altro',
  scritta_bus: 'scritta_bus',
  scritta_taxi: 'scritta_taxi',
  attraversamento_pedonale: 'attraversamento_pedonale'
});

exports.sosta_t = makeEnum({
  sost_bus: 'sost_bus',
  sost_cust: 'sost_cust',
  sost_dis: 'sost_dis',
  sost_lib: 'sost_lib',
  sost_mer: 'sost_mer',
  sost_mot: 'sost_mot',
  sost_nn_cu: 'sost_nn_cu',
  sost_pro: 'sost_pro',
  sost_res: 'sost_res',
  sost_ris: 'sost_ris',
  sost_rot: 'sost_rot',
  sost_sha: 'sost_sha',
  altro: 'altro'
});

exports.statica_ponti_t = makeEnum({
  ponte_a_travata_in_semplice_appoggio: 'ponte_a_travata_in_semplice_appoggio',
  ponte_a_travata_continua: 'ponte_a_travata_continua',
  ponte_ad_arco: 'ponte_ad_arco',
  ponte_a_telaio: 'ponte_a_telaio',
  ponte_ad_arco_trave_a_via_inferiore: 'ponte_ad_arco_trave_a_via_inferiore',
  ponte_ad_arco_trave_a_via_superiore: 'ponte_ad_arco_trave_a_via_superiore',
  ponte_ad_arco_trave_a_via_intermedia: 'ponte_ad_arco_trave_a_via_intermedia',
  ponte_a_cavalletto: 'ponte_a_cavalletto',
  ponte_strallato: 'ponte_strallato',
  ponte_sospeso: 'ponte_sospeso',
  ponte_a_travata_tipo_gerber: 'ponte_a_travata_tipo_gerber',
  altro_schema_statico: 'altro_schema_statico'
});

exports.strato_pavim_t = makeEnum({
  naturale_terra: 'naturale_terra',
  conglomerato_bituminoso_trasparente: 'conglomerato_bituminoso_trasparente',
  conglomerato_bituminoso_colorato: 'conglomerato_bituminoso_colorato',
  conglomerato_bituminoso_stampato: 'conglomerato_bituminoso_stampato',
  conglomerato_cementizio_architettonico: 'conglomerato_cementizio_architettonico',
  conglomerato_cementizio_lastre: 'conglomerato_cementizio_lastre',
  lastrico_arenaria: 'lastrico_arenaria',
  lastrico_granito: 'lastrico_granito',
  lastrico_porfido__sanpietrino_: 'lastrico_porfido__sanpietrino_',
  lastrico_finta_pietra__cemento_: 'lastrico_finta_pietra__cemento_',
  autobloccanti: 'autobloccanti',
  misto_granulare_non_legato: 'misto_granulare_non_legato',
  misto_cementato: 'misto_cementato',
  acciaio: 'acciaio',
  lastrico_serena_macigno: 'lastrico_serena_macigno',
  lastrico_serena_extradura: 'lastrico_serena_extradura',
  lastrico_serena_macigno_o_extradura: 'lastrico_serena_macigno_o_extradura',
  lastrico_pietraforte_standard: 'lastrico_pietraforte_standard',
  lastrico_pietraforte_mista_a_granito: 'lastrico_pietraforte_mista_a_granito',
  lastrico_pietraforte_albarese: 'lastrico_pietraforte_albarese',
  conglomerato_bituminoso_standard: 'conglomerato_bituminoso_standard'
});

exports.strutt_galleria_t = makeEnum({
  ad_arco: 'ad_arco',
  rettangolare: 'rettangolare'
});

exports.struttura_pavim_t = makeEnum({
  flessibile: 'flessibile',
  semirigida: 'semirigida',
  rigida_non_armata: 'rigida_non_armata',
  rigida_ad_armatura_continua: 'rigida_ad_armatura_continua',
  modulare: 'modulare',
  composita: 'composita',
  in_terra: 'in_terra'
});

exports.supancor_disp_ritenuta_t = makeEnum({
  terra: 'terra',
  muro_in_mattoni: 'muro_in_mattoni',
  muro_in_pietra: 'muro_in_pietra',
  muro_in_c_a_: 'muro_in_c_a_',
  cordolo_in_c_a_: 'cordolo_in_c_a_',
  dado_di_fondazione: 'dado_di_fondazione',
  pavimentazione_stradale: 'pavimentazione_stradale'
});

exports.tab01b_t = makeEnum({
  cordolo_danneggiato_o_distaccato: 'cordolo_danneggiato_o_distaccato',
  cordolo_non_visibile: 'cordolo_non_visibile',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente',
  sbiadita: 'sbiadita',
  sporca: 'sporca',
  termoplastica_distaccata: 'termoplastica_distaccata',
  scivolosa: 'scivolosa',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro'
});

exports.tab02a_t = makeEnum({
  dissesti: 'dissesti',
  radici: 'radici',
  dissesti_e_radici: 'dissesti_e_radici',
  manto_non_presente: 'manto_non_presente',
  non_rilevante: 'non_rilevante',
  altro: 'altro'
});

exports.tab03a_t = makeEnum({
  dissesti: 'dissesti',
  radici: 'radici',
  dissesti_e_radici: 'dissesti_e_radici',
  manto_non_presente: 'manto_non_presente',
  non_rilevante: 'non_rilevante',
  altro: 'altro'
});

exports.tab19a_t = makeEnum({
  danneggiato: 'danneggiato',
  sprofondato: 'sprofondato',
  fuori_livello: 'fuori_livello',
  intasato: 'intasato',
  rumoroso: 'rumoroso',
  tubo_portavia_danneggiato: 'tubo_portavia_danneggiato',
  presenza_vegetazione_invasiva: 'presenza_vegetazione_invasiva',
  assente: 'assente',
  altro: 'altro'
});

exports.tab24a_t = makeEnum({
  staffa_o_tassello_danneggiato: 'staffa_o_tassello_danneggiato',
  instabile_o_pericolante: 'instabile_o_pericolante',
  divelto: 'divelto',
  piegato_o_danneggiato: 'piegato_o_danneggiato',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente'
});

exports.tab27a_t = makeEnum({
  coperto_o_non_visibile: 'coperto_o_non_visibile',
  instabile_o_pericolante: 'instabile_o_pericolante',
  divelto: 'divelto',
  piegato_o_danneggiato: 'piegato_o_danneggiato',
  presenza_di_graffiti__adesivi__imbrattature: 'presenza_di_graffiti__adesivi__imbrattature',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente'
});

exports.tab27b_t = makeEnum({
  sbiadito: 'sbiadito',
  girato: 'girato',
  coperto_o_non_visibile: 'coperto_o_non_visibile',
  pellicola_scaduta: 'pellicola_scaduta',
  staffa_o_tassello_danneggiato: 'staffa_o_tassello_danneggiato',
  instabile_o_pericolante: 'instabile_o_pericolante',
  divelto: 'divelto',
  piegato_o_danneggiato: 'piegato_o_danneggiato',
  presenza_di_graffiti__adesivi__imbrattature: 'presenza_di_graffiti__adesivi__imbrattature',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente'
});

exports.tab30a_t = makeEnum({
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente',
  sbiadita: 'sbiadita',
  sporca: 'sporca',
  termoplastica_distaccata: 'termoplastica_distaccata',
  scivolosa: 'scivolosa',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro'
});

exports.tab30b_t = makeEnum({
  cordolo_danneggiato_o_distaccato: 'cordolo_danneggiato_o_distaccato',
  cordolo_non_visibile: 'cordolo_non_visibile',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente',
  sbiadita: 'sbiadita',
  sporca: 'sporca',
  termoplastica_distaccata: 'termoplastica_distaccata',
  scivolosa: 'scivolosa',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro'
});

exports.tab43a_t = makeEnum({
  coperto_o_non_visibile: 'coperto_o_non_visibile',
  instabile_o_pericolante: 'instabile_o_pericolante',
  divelto: 'divelto',
  piegato_o_danneggiato: 'piegato_o_danneggiato',
  presenza_di_graffiti__adesivi__imbrattature: 'presenza_di_graffiti__adesivi__imbrattature',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente'
});

exports.tab43b_t = makeEnum({
  coperto_o_non_visibile: 'coperto_o_non_visibile',
  instabile_o_pericolante: 'instabile_o_pericolante',
  divelto: 'divelto',
  piegato_o_danneggiato: 'piegato_o_danneggiato',
  presenza_di_graffiti__adesivi__imbrattature: 'presenza_di_graffiti__adesivi__imbrattature',
  assente: 'assente',
  non_congruo_o_non_conforme_al_NCdS: 'non_congruo_o_non_conforme_al_NCdS',
  altro: 'altro',
  elemento_integrativo_danneggiato__distaccato__assente: 'elemento_integrativo_danneggiato__distaccato__assente'
});

exports.tessitura_lastrico_t = makeEnum({
  lastre_rettangolari: 'lastre_rettangolari',
  lastre_irregolari: 'lastre_irregolari',
  cubetti: 'cubetti',
  opus_incertum: 'opus_incertum',
  altro: 'altro',
  alla_rinfusa: 'alla_rinfusa',
  a_bozzette: 'a_bozzette'
});

exports.tipo_oggetto_t = makeEnum({
  area_di_circolazione_veicolare: 'area_di_circolazione_veicolare',
  area_di_sosta: 'area_di_sosta',
  area_di_marcia_veicolare: 'area_di_marcia_veicolare',
  isole_spartitraffico: 'isole_spartitraffico',
  area_di_circolazione_pedonale: 'area_di_circolazione_pedonale',
  area_di_circolazione_ciclabile: 'area_di_circolazione_ciclabile',
  muri_di_sostegno_del_corpo_stradale: 'muri_di_sostegno_del_corpo_stradale',
  scarpate_e_pendii: 'scarpate_e_pendii',
  ponti_viadotti_sovrappassi: 'ponti_viadotti_sovrappassi',
  giunti_dei_ponti: 'giunti_dei_ponti',
  pile_dei_ponti: 'pile_dei_ponti',
  gallerie: 'gallerie',
  sottopassi: 'sottopassi',
  gallerie_e_sottopassi: 'gallerie_e_sottopassi',
  cunette_di_margine: 'cunette_di_margine',
  arginelli: 'arginelli',
  protezione_corpo_stradale: 'protezione_corpo_stradale',
  protezione_ambiente_circostante: 'protezione_ambiente_circostante',
  impianti_di_illuminazione: 'impianti_di_illuminazione',
  piazzole_di_sosta: 'piazzole_di_sosta',
  dispositivi_di_ritenuta: 'dispositivi_di_ritenuta',
  attenuatori_d_urto: 'attenuatori_d_urto',
  pertinenze_di_servizio: 'pertinenze_di_servizio',
  opere_di_continuit__idraulica: 'opere_di_continuit__idraulica',
  sottoservizi: 'sottoservizi',
  accessi: 'accessi',
  cippi: 'cippi',
  case_cantoniere: 'case_cantoniere',
  attenuatori_di_velocit_: 'attenuatori_di_velocit_',
  vegetazione_puntuale: 'vegetazione_puntuale',
  vegetazione_lineare: 'vegetazione_lineare',
  vegetazione_areale: 'vegetazione_areale',
  supporti_per_segnaletica: 'supporti_per_segnaletica',
  cartelli_per_segnaletica_verticale: 'cartelli_per_segnaletica_verticale',
  cartelli_per_segnaletica_verticale_temporanea: 'cartelli_per_segnaletica_verticale_temporanea',
  cartelli_per_impianti_pubblicitari: 'cartelli_per_impianti_pubblicitari',
  segnaletica_orizzontale_puntuale: 'segnaletica_orizzontale_puntuale',
  segnaletica_orizzontale_lineare: 'segnaletica_orizzontale_lineare',
  impianti_semaforici: 'impianti_semaforici',
  pannelli_a_messaggio_variabile: 'pannelli_a_messaggio_variabile',
  varchi_telematici: 'varchi_telematici',
  impianti_controllo_violazioni: 'impianti_controllo_violazioni',
  impianti_misurazione_traffico: 'impianti_misurazione_traffico',
  sensori_meteo: 'sensori_meteo',
  sbarre_per_controllo_accessi: 'sbarre_per_controllo_accessi',
  delimitazione_centri_abitati: 'delimitazione_centri_abitati',
  passaggi_a_livello: 'passaggi_a_livello',
  parapedonali_e_dissuasori_di_sosta: 'parapedonali_e_dissuasori_di_sosta',
  manufatti_minori_lineari: 'manufatti_minori_lineari',
  arredo_urbano: 'arredo_urbano',
  indici_prestazionali_della_pavimentazione: 'indici_prestazionali_della_pavimentazione',
  dossi_rallentatori: 'dossi_rallentatori',
  dissuasori_di_sosta_e_parapedonali: 'dissuasori_di_sosta_e_parapedonali',
  rastrelliere: 'rastrelliere',
  tombini__griglie__caditoie: 'tombini__griglie__caditoie',
  pozzetti_sottoservizi: 'pozzetti_sottoservizi',
  impianti_tecnologici: 'impianti_tecnologici',
  abbattimenti_barriere_architettoniche: 'abbattimenti_barriere_architettoniche'
});

exports.tipo_origine_t = makeEnum({
  VAR: 'VAR',
  GPS: 'GPS',
  cartografia: 'cartografia',
  rilievo_topografico: 'rilievo_topografico',
  celerimetrico_originale: 'celerimetrico_originale',
  celerimetrico_scorrimento_vertici: 'celerimetrico_scorrimento_vertici',
  celerimetrico_diviso: 'celerimetrico_diviso',
  celerimetrico_parzialmente_modificato: 'celerimetrico_parzialmente_modificato',
  altri_opendata: 'altri_opendata',
  altri_opendata___toponomastica: 'altri_opendata___toponomastica',
  altri_opendata___mobilita: 'altri_opendata___mobilita',
  altri_opendata___publiacqua: 'altri_opendata___publiacqua',
  altri_opendata___SAS: 'altri_opendata___SAS',
  as_built: 'as_built',
  celerimetrico_eliminato: 'celerimetrico_eliminato',
  altro: 'altro'
});

exports.tipo_supporto_t = makeEnum({
  palo_singolo: 'palo_singolo',
  profilato_singolo: 'profilato_singolo',
  telaio_multipalo: 'telaio_multipalo',
  portale: 'portale',
  a_bandiera: 'a_bandiera',
  a_farfalla: 'a_farfalla',
  portale_bandiera: 'portale_bandiera',
  struttura_muraria: 'struttura_muraria',
  altre_strutture_esistenti: 'altre_strutture_esistenti',
  pavimentazione_stradale: 'pavimentazione_stradale',
  altro: 'altro',
  palo_illuminazione: 'palo_illuminazione',
  palo_semaforico: 'palo_semaforico',
  doppio_sostegno_monofacciale: 'doppio_sostegno_monofacciale',
  doppio_sostegno_bifacciale: 'doppio_sostegno_bifacciale'
});

exports.trattsup_pavim_t = makeEnum({
  trattamento_superficiale_splimastic_seal: 'trattamento_superficiale_splimastic_seal',
  trattamento_superficiale_slurry_seal: 'trattamento_superficiale_slurry_seal',
  trattamento_superficiale_di_irruvidimento: 'trattamento_superficiale_di_irruvidimento'
});

exports.uso_ponti_t = makeEnum({
  ponte_ad_uso_promiscuo: 'ponte_ad_uso_promiscuo',
  ponte_solo_veicolare: 'ponte_solo_veicolare',
  ponte_solo_ciclopedonale: 'ponte_solo_ciclopedonale'
});

exports.uso_t = makeEnum({
  privato: 'privato',
  pubblico: 'pubblico'
});

exports.zona_acped_t = makeEnum({
  area_a_porticato: 'area_a_porticato',
  galleria_pedonale_sottopassaggio: 'galleria_pedonale_sottopassaggio',
  passaggio_pedonale: 'passaggio_pedonale',
  percorsi_a_gradinate: 'percorsi_a_gradinate',
  su_aree_solo_pedonali: 'su_aree_solo_pedonali',
  su_marciapiede: 'su_marciapiede',
  vialetto: 'vialetto',
  altro: 'altro'
});

exports.zona_acvei_t = makeEnum({
  tronco_carreggiata: 'tronco_carreggiata',
  tronco_ordinario: 'tronco_ordinario',
  svincolo: 'svincolo',
  slargo: 'slargo',
  piazza: 'piazza',
  incrocio: 'incrocio',
  parcheggio: 'parcheggio',
  area_a_traffico_non_strutturato: 'area_a_traffico_non_strutturato'
});

exports.Prisma.ModelName = makeEnum({
  tab00B1_grafo_rilievi_2019_punti_altimetria: 'tab00B1_grafo_rilievi_2019_punti_altimetria',
  tab01A_area_circolazione_veicolare: 'tab01A_area_circolazione_veicolare',
  tab01B_area_sosta: 'tab01B_area_sosta',
  tab02A_area_circolazione_pedonale: 'tab02A_area_circolazione_pedonale',
  tab02B_ABA: 'tab02B_ABA',
  tab03A_area_circolazione_ciclabile: 'tab03A_area_circolazione_ciclabile',
  tab05A_muri_sostegno: 'tab05A_muri_sostegno',
  tab06A_ponti_impalcati: 'tab06A_ponti_impalcati',
  tab06B_ponti_giunti: 'tab06B_ponti_giunti',
  tab08A_gallerie_sottopassi: 'tab08A_gallerie_sottopassi',
  tab13A_protezione_ambiente: 'tab13A_protezione_ambiente',
  tab14A_illuminazione: 'tab14A_illuminazione',
  tab17A_dispositivi_ritenuta: 'tab17A_dispositivi_ritenuta',
  tab19A_griglie_caditoie: 'tab19A_griglie_caditoie',
  tab20A_pozzetti_sottoservizi: 'tab20A_pozzetti_sottoservizi',
  tab24A_dossi: 'tab24A_dossi',
  tab27A_segn_vert_supporti: 'tab27A_segn_vert_supporti',
  tab27B_segn_vert_cartelli: 'tab27B_segn_vert_cartelli',
  tab27C_segn_vert_temp: 'tab27C_segn_vert_temp',
  tab29_imp_pubblicitari: 'tab29_imp_pubblicitari',
  tab30A_segn_oriz_P: 'tab30A_segn_oriz_P',
  tab30B_segn_oriz_L: 'tab30B_segn_oriz_L',
  tab32A_impianti_semaforici: 'tab32A_impianti_semaforici',
  tab34A_impianti_tecnologici: 'tab34A_impianti_tecnologici',
  tab43A_paraped_dissuasorisosta: 'tab43A_paraped_dissuasorisosta',
  tab43B_rastrelliere: 'tab43B_rastrelliere',
  tab43C_arredo_urbano: 'tab43C_arredo_urbano',
  tab45A1_indici_pavim_bitume_2020: 'tab45A1_indici_pavim_bitume_2020',
  tab45A2_indici_pavim_bitume_2021: 'tab45A2_indici_pavim_bitume_2021',
  tab45A3_indici_pavim_bitume_2022: 'tab45A3_indici_pavim_bitume_2022',
  tab45B1_indici_pavim_lastrico_2020: 'tab45B1_indici_pavim_lastrico_2020',
  tab45B2_indici_pavim_lastrico_2021: 'tab45B2_indici_pavim_lastrico_2021',
  tab_famiglia_segn_temp: 'tab_famiglia_segn_temp',
  tab01B_M01_sosta: 'tab01B_M01_sosta',
  tab02A_M01_monit_area_circ_ped: 'tab02A_M01_monit_area_circ_ped',
  tab03A_M01_monit_area_circ_cic: 'tab03A_M01_monit_area_circ_cic',
  tab05A_M01_monit_muri_sostegno_cls: 'tab05A_M01_monit_muri_sostegno_cls',
  tab05A_M02_monit_muri_sostegno_murature: 'tab05A_M02_monit_muri_sostegno_murature',
  tab05A_M03_muri_stato_avanzamento: 'tab05A_M03_muri_stato_avanzamento',
  tab100_note: 'tab100_note',
  tab13A_M01_monit_protezione_ambiente: 'tab13A_M01_monit_protezione_ambiente',
  tab17A_M01_guard_rail: 'tab17A_M01_guard_rail',
  tab17A_M02_New_Jersey: 'tab17A_M02_New_Jersey',
  tab17A_M03_muretti_ringhiere: 'tab17A_M03_muretti_ringhiere',
  tab17A_M05_attenuatori_urto: 'tab17A_M05_attenuatori_urto',
  tab17A_M06_disprit_stato_avanzamento: 'tab17A_M06_disprit_stato_avanzamento',
  tab19A_M01_monit_griglie_caditoie: 'tab19A_M01_monit_griglie_caditoie',
  tab24A_M01_monit_dossi: 'tab24A_M01_monit_dossi',
  tab27A_M01_monit_segn_vert_supporti: 'tab27A_M01_monit_segn_vert_supporti',
  tab27B_M01_monit_segn_vert_cartelli: 'tab27B_M01_monit_segn_vert_cartelli',
  tab30A_M01_monit_segn_oriz_P: 'tab30A_M01_monit_segn_oriz_P',
  tab30B_M01_monit_segn_oriz_L: 'tab30B_M01_monit_segn_oriz_L',
  tab43A_M01_monit_paraped_dissuas: 'tab43A_M01_monit_paraped_dissuas',
  tab43B_M01_monit_rastrelliere: 'tab43B_M01_monit_rastrelliere'
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