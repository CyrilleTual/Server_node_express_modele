import { Router } from "express";
import { addProduct, adminView } from "../controller/admin.js";

const router = Router();

// ici on est sur l'url /admin
// on fait appel à la fonction adminView
// du contrôleur admin.js
router.get ("/", adminView) //

//ici url /admin/addProduct
router.get ("/addProduct", addProduct)

export default router;