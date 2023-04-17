import { Lugar } from "./lugar";
import bodyParser from "body-parser";
import { Router } from "express";
export const rutaLugar = Router();
import { lugares } from ".";

rutaLugar.get("/lugar", (_req,_res) => {
    _res.json(lugares);
  })

rutaLugar.get("/lugar/:id", (_req,_res) => {
    _res.json(lugares.find(item => {
                  return item.id == Number(_req.params.id)
              }));
  
  })

rutaLugar.post("/añadirLugar", (_req,_res) => {
    const p = new Lugar(_req.body.nombre, _req.body.latitud, _req.body.longitud, _req.body.id);
    lugares.push(p);
    _res.json(p);   
  })  

rutaLugar.delete("/lugar/:id", (_req,_res) => {
    const p = lugares.find(item => {
        return item.id == Number(_req.params.id)
    })
    if (p){
      lugares.slice(lugares.indexOf(p),1)
    }
    _res.status(404).send()
  })

rutaLugar.put("/lugar/:id", (_req,_res) => {
    const p = lugares.find(item => {
                  return item.id == Number(_req.params.id)
              })
    if (p){
      p.id = _req.body.id
      p.nombre = _req.body.nombre
      p.latitud = _req.body.latitud
      p.longitud = _req.body.longitud
    }
    _res.json(p);   
  })

  rutaLugar.patch("/lugar/:id", (_req,_res) => {
    const p = lugares.find(item => {
      return item.id == Number(_req.params.id)
  })
  if (!p){
      _res.send(404)
      return
    }
  if(_req.body.id != null){
    p.id = _req.body.id
  }
  if(_req.body.latitud != null){
    p.latitud = _req.body.latitud
  }
  if(_req.body.longitud != null){
    p.longitud = _req.body.longitud
  }
  if(_req.body.nombre != null){
    p.nombre = _req.body.nombre
  }
    _res.json(p); 
})

// mostrar nombre por coordenadas
rutaLugar.get("/incendios/:latitud/:longitud/buscarPorCoordenadas", (_req,_res) => {
    const p = lugares.find(item => {
      return item.latitud == Number(_req.params.latitud) && item.longitud == Number(_req.params.longitud)
    })
    if(p){
      _res.json(p.nombre)
    }
})
