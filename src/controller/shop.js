export const shopView = (req,res) => {
    // res -> retourne une reponse au client
    res
        .status(200) // -> la requête est réussie
        .send (" ici la page shop de base '/shop '")
     ;

}