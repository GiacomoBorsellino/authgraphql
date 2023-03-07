// Permesso per ogni resolver
import { Roles } from "../../config/roles";

const permessi = [
  {
    operationName: "login",
    type: "mutation",
    description: "route per effettuare il login",
    checkToken: false,
    roles: [
      Roles.dirigentiMobilita,
      Roles.ufficiMobilita,
      Roles.amministratori,
      Roles.contactCenter,
      Roles.tecniciImpresaManutenzione,
      Roles.tecniciCommittenza,
    ],
  },
  {
    operationName: "getColumns",
    type: "query",
    description: "route per visualizzare colonne",
    checkToken: true,
    roles: [
      Roles.dirigentiMobilita,
      Roles.ufficiMobilita,
      Roles.amministratori,
      Roles.contactCenter,
      Roles.tecniciImpresaManutenzione,
      Roles.tecniciCommittenza,
    ],
  },
  {
    operationName: "getUsers",
    type: "query",
    description: "route per visualizzare lista utenti",
    checkToken: true,
    roles: [Roles.amministratori],
  },
  {
    operationName: "addUser",
    type: "mutation",
    description: "route per aggiungere un utento alla lista",
    checkToken: true,
    roles: [Roles.amministratori],
  },
  {
    operationName: "updateUser",
    type: "mutation",
    description: "route per modificare un utento alla lista",
    checkToken: true,
    roles: [Roles.amministratori],
  },
  {
    operationName: "deleteUser",
    type: "mutation",
    description: "route per rimuovere un utento alla lista",
    checkToken: true,
    roles: [Roles.amministratori],
  },
  {
    operationName: "getSegnalazioni",
    type: "query",
    description: "route per visualizzare lista segnalazioni",
    checkToken: true,
    roles: [Roles.amministratori],
  },
  {
    operationName: "getCountSegnaleticaTemporanea",
    type: "query",
    description:
      "route per visualizzare numero segnaletica verticale temporanea",
    checkToken: true,
    roles: [
      Roles.dirigentiMobilita,
      Roles.ufficiMobilita,
      Roles.amministratori,
      Roles.contactCenter,
      Roles.tecniciImpresaManutenzione,
      Roles.tecniciCommittenza,
    ],
  },
  {
    operationName: "getCountSegnalazioni",
    type: "query",
    description: "route per visualizzare numero Segnalazioni",
    checkToken: true,
    roles: [
      Roles.dirigentiMobilita,
      Roles.ufficiMobilita,
      Roles.amministratori,
      Roles.contactCenter,
      Roles.tecniciImpresaManutenzione,
      Roles.tecniciCommittenza,
    ],
  },
];

export { permessi };
