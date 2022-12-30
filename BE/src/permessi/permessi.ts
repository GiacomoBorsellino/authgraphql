const permessi = [
    {
        route: "login",
        description: "route per effettuare il login",
        checkToken: false
    },
    {
        route: "users",
        description: "route per visualizzare lista utenti",
        checkToken: true
    }
];

export { permessi };      