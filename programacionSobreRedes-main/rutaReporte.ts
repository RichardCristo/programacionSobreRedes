import { ReporteDeIncendioPorFecha } from "./reporteDeIncendioPorFecha";
import bodyParser from "body-parser";
import { Router } from "express";
export const rutaReporte = Router();
import { reportes } from ".";
import { lugares } from ".";


rutaReporte.get("/reporte", (_req,_res) => {
    _res.json(reportes);
})

rutaReporte.get("/reporte/:id", (_req,_res) => {
    _res.json(reportes.find(item => {
                  return item.id == Number(_req.params.id)
              }));
  })

rutaReporte.post("/reporteDeIncendioPorFecha", (_req,_res) => {
    const p = new ReporteDeIncendioPorFecha(_req.body.fecha, _req.body.estado, _req.body.lugar, _req.body.id);
    reportes.push(p);
    _res.json(p);   
  })  

rutaReporte.delete("/reporte/:id", (_req,_res) => {
    const p = reportes.find(item => {
        return item.id == Number(_req.params.id)
    })
    if (p){
      reportes.slice(reportes.indexOf(p),1)
    }
    _res.status(404).send()
  })

rutaReporte.put("/reporte/:id", (_req,_res) => {
    const p = reportes.find(item => {
                  return item.id == Number(_req.params.id)
              })
    if (p){
      p.id = _req.body.id
      p.fecha = _req.body.fecha
      p.estado = _req.body.estado
      p.lugar = _req.body.lugar
    }
    _res.json(p);   
  })

rutaReporte.patch("/reportes/:id", (_req,_res) => {
    const p = reportes.find(item => {
   return item.id == Number(_req.params.id)
})
if (!p){
   _res.send(404)
   return
 }
if(_req.body.id != null){
 p.id = _req.body.id
}
if(_req.body.fecha != null){
 p.fecha = _req.body.fecha
}
if(_req.body.estado != null){
 p.estado = _req.body.estado
}
if(_req.body.lugar != null){
 p.lugar = _req.body.lugar
}
 _res.json(p); 
})

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