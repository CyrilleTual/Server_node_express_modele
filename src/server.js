import express from "express";
import router from "./router/index.routes.js"

const app = express();
const PORT = process.env.Port || 9000

app.use(router);

app.listen (PORT, (err) =>{
    err ? console.log (err)
        : console.log (`listening at http://localhost:${PORT}`)
}); 