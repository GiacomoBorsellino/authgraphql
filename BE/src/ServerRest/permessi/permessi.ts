// Permesso per ogni resolver
import { Roles } from "../../config/roles";

const permessi = [
    {
        route: "/1/apiTest",
        type: "GET",
        description: "route di test",
        roles: [Roles.dirigentiMobilita, Roles.ufficiMobilita, Roles.amministratori, Roles.contactCenter, Roles.tecniciImpresaManutenzione, Roles.tecniciCommittenza]
    },
];

export { permessi };      