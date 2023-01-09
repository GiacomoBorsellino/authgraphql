const permessi = [
    {
        operationName: "login",
        type: "mutation",
        description: "route per effettuare il login",
        checkToken: false
    },
    {
        operationName: "users",
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
        description: "route per aggiungere un utento alla lista",
        checkToken: true
    },
    {
        operationName: "deleteUser",
        type: "mutation",
        description: "route per aggiungere un utento alla lista",
        checkToken: true
    }

];

export { permessi };      