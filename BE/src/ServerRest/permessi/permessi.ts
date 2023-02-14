// Permesso per ogni resolver
import { Roles } from "../../config/roles";

const permessi = [
  {
    route: "/1/apiTestDb1",
    type: "GET",
    description: "route di test",
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
    route: "/1/apiTestDb2",
    type: "GET",
    description: "route di test 2",
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
