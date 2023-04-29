// importation du module express
import express from "express";
import router from "./router/index.routes.js"

// création d'une instance de type express
const app = express();

// définition du port de communication de l'application
const PORT = process.env.Port || 9000

app.use(router);


// pour test du serveur :
app.get("/", (req, res) => {
    res.send("serveur ok ");
});



// lancement du server
app.listen (PORT, (err) =>{
    err ? console.log (err)
        : console.log (`listening at http://localhost:${PORT}`)
}); 