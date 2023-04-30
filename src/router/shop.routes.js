import { Router } from "express";
import { shopView } from "../controller/shop.js";

const router = Router();

// route de base /shop 
router.get ("/", shopView) 

export default router;