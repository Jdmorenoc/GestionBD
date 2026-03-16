import { Router } from "express";
import { createClient } from "redis";
import apuestaController from "../controllers/apuesta.controller.js";

const router = Router();
router.get("/apuesta", (req , res )=>{
    res.send("Hola apuesta");
})

export default router;

router.get("/save", apuestaController.save_dos)


router.get("/get", apuestaController.getApuesta)

router.get("/update", apuestaController.update)