// import du module "routeur" d'express
import { Router } from "express";
// import de la fonction homeview de son controller
import { homeView } from "../controller/home.js";
import adminRouter from "./admin.routes.js";
import shopRouter from "./shop.routes.js"

// création d'une instance de type Router
const router = Router();

//On gère ici les requètes sur l'url de base
router.get("/", homeView) 

// ici appel au routeur secondaire 
router.use ('/admin', adminRouter)
router.use ('/shop', shopRouter)

export default router;
