import { ReporteDeIncendioPorFecha } from "../clases/reporteDeIncendioPorFecha";
import bodyParser from "body-parser";
import { Router } from "express";
export const rutaReporte = Router();
import { reportes } from "../..";
import { lugares } from "../..";
import BD from "../controladores/BD";


rutaReporte.get("/", BD.getReportes)

rutaReporte.get("/:id", BD.getUnReporte)

rutaReporte.post("/", BD.añadirReporte)  

rutaReporte.delete("/:id", BD.borrarReporte)

rutaReporte.put("/:id", BD.ponerReportes)

rutaReporte.patch("/:id", BD.ponerReporte)

// mostrar incendios por lugar
rutaReporte.get("/reporteDeIncendio/:id/buscarIncendio", (_req,_res) => {
    const p = lugares.find(item => {
        return item.id == Number(_req.params.id)
    })
    const a = reportes.find(item =>{
        return item.lugar == p
    })

    _res.json(a)
})

// cuantos incendios hubo en una determinada fecha
rutaReporte.get("/incendios/:fecha/cantIncendiosEnUnaFecha", (_req,_res) => {
    let aux:Array<Date> = new Array<Date>
    reportes.forEach(element => {
      if(element.fecha == new Date(_req.params.fecha)){
        aux.push(element.fecha)
      }
    });
    _res.json("cantidad de incendios: " + aux.length)
})