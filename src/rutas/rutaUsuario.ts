import { Router } from "express";
export const router = Router();
import BD from "../controladores/BD";

router.post("/registrar", (req, res) => {
    res.json({message: "Registrar el usuario"});
});

router.post("/login", (req, res) => {
    res.json({message: "Login usuario"});
});

router.post("/current", (req, res) => {
    res.json({message: "Informacion del usuario"});
});

module.exports = router;