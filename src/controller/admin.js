export const adminView = (req,res) => {
    
    res .status(200)  
        .send (" ici la page admin de base '/admin '")
     ;

}

export const addProduct = (req, res) => {
    res .status(200)
        .send ("ici la page  d'ajout de produits")
}