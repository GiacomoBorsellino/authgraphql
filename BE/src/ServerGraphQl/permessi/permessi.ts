// Permesso per ogni resolver
import { Roles } from "../../config/roles";

const permessi = [
    {
        operationName: "login",
        type: "mutation",
        description: "route per effettuare il login",
        checkToken: false,
        roles: [Roles.dirigentiMobilita, Roles.ufficiMobilita, Roles.amministratori, Roles.contactCenter, Roles.tecniciImpresaManutenzione, Roles.tecniciCommittenza]
    },
    {
        operationName: "getUsers",
        type: "query",
        description: "route per visualizzare lista utenti",
        checkToken: true,
        roles: [Roles.amministratori]
    },
    {
        operationName: "addUser",
        type: "mutation",
        description: "route per aggiungere un utento alla lista",
        checkToken: true,
        roles: [Roles.amministratori]
    },
    {
        operationName: "updateUser",
        type: "mutation",
        description: "route per modificare un utento alla lista",
        checkToken: true,
        roles: [Roles.amministratori]
    },
    {
        operationName: "deleteUser",
        type: "mutation",
        description: "route per rimuovere un utento alla lista",
        checkToken: true,
        roles: [Roles.amministratori]
    }
];

export { permessi };      