import { Lugar } from "../clases/lugar";
import bodyParser from "body-parser";
import { Router } from "express";
export const rutaLugar = Router();
import { lugares } from "../..";
import BD from "../controladores/BD";

rutaLugar.get("/", BD.getLugares)

rutaLugar.get("/:id", BD.getUnLugar)

rutaLugar.post("/añadirLugar", BD.añadirLugar)  

rutaLugar.delete("/:id", BD.borrarLugar)

rutaLugar.put("/:id", BD.ponerLugares)

rutaLugar.patch("/:id", BD.ponerLugar)

// mostrar nombre por coordenadas
rutaLugar.get("/incendios/:latitud/:longitud/buscarPorCoordenadas", (_req,_res) => {
    const p = lugares.find(item => {
      return item.latitud == Number(_req.params.latitud) && item.longitud == Number(_req.params.longitud)
    })
    if(p){
      _res.json(p.nombre)
    }
})