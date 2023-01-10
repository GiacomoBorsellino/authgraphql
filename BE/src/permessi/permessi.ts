// Permesso per ogni resolver
const permessi = [
    {
        operationName: "login",
        type: "mutation",
        description: "route per effettuare il login",
        checkToken: false
    },
    {
        operationName: "getUrsers",
        type: "query",
        description: "route per visualizzare lista utenti",
        checkToken: true
    },
    {
        operationName: "addUser",
        type: "mutation",
        description: "route per aggiungere un utento alla lista",
        checkToken: true
    },
    {
        operationName: "updateUser",
        type: "mutation",
        description: "route per modificare un utento alla lista",
        checkToken: true
    },
    {
        operationName: "deleteUser",
        type: "mutation",
        description: "route per rimuovere un utento alla lista",
        checkToken: true
    }
];

export { permessi };      