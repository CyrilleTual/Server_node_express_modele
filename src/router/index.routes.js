// import du module "routeur" d'express
import { Router } from "express";
// import de la fonction homeview de son controller
import { homeView } from "../controller/home.js";

// création d'une instance de type Router
// va permerttre d'utiliser les methodes Http
const router = Router();

//On gère ici les requètes sur l'url de base
//-> vont aboutir à la page home
router.get("/", homeView) 

export default router;
