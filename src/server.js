import express from "express";
import router from "./router/index.routes.js";
import check from "./middlewares/check.js"

const app = express();
const PORT = process.env.Port || 9000

app
  .use(check) // middleWare personnalisé de recupération de données
  .use(router);

app.listen (PORT, (err) =>{
    err ? console.log (err)
        : console.log (`listening at http://localhost:${PORT}`)
}); 