import express from 'express';
import { ReporteDeIncendioPorFecha } from './reporteDeIncendioPorFecha';
import { Lugar } from './lugar';

import swaggerUi = require('swagger-ui-express');
import swaggerSetup from './swagger'

import bodyParser from "body-parser";

const app: express.Application = express();

app.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerSetup))
app.use(bodyParser.json())

const port = 3000;  

app.use(express.json());

let reportes:Array<ReporteDeIncendioPorFecha> = new Array<ReporteDeIncendioPorFecha>
let lugares:Array<Lugar> = new Array<Lugar>

app.get("/reporte", (_req,_res) => {
    _res.json(reportes);
})
  
  app.get("/reporte/:id", (_req,_res) => {
    _res.json(reportes.find(item => {
                  return item.id == Number(_req.params.id)
              }));
  })

app.post("/reporteDeIncendioPorFecha", (_req,_res) => {
    const p = new ReporteDeIncendioPorFecha(_req.body.fecha, _req.body.estado, _req.body.lugar, _req.body.id);
    reportes.push(p);
    _res.json(p);   
  })  

  app.delete("/reporte/:id", (_req,_res) => {
    const p = reportes.find(item => {
        return item.id == Number(_req.params.id)
    })
    if (p){
      reportes.slice(reportes.indexOf(p),1)
    }
    _res.status(404).send()
  })

  app.put("/reporte/:id", (_req,_res) => {
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
  
  app.patch("/reportes/:id", (_req,_res) => {
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

  app.get("/lugar", (_req,_res) => {
    _res.json(lugares);
  })
  
  app.get("/lugar/:id", (_req,_res) => {
    _res.json(reportes.find(item => {
                  return item.id == Number(_req.params.id)
              }));
  
  })

app.post("/añadirLugar", (_req,_res) => {
    const p = new Lugar(_req.body.nombre, _req.body.latitud, _req.body.longitud, _req.body.id);
    lugares.push(p);
    _res.json(p);   
  })  

  app.delete("/lugar/:id", (_req,_res) => {
    const p = lugares.find(item => {
        return item.id == Number(_req.params.id)
    })
    if (p){
      lugares.slice(lugares.indexOf(p),1)
    }
    _res.status(404).send()
  })

  app.put("/lugar/:id", (_req,_res) => {
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
  
  app.patch("/lugar/:id", (_req,_res) => {
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

  // mostrar incendios por lugar

  app.get("/reporteDeIncendio/:id/buscarIncendio", (_req,_res) => {
    const p = lugares.find(item => {
        return item.id == Number(_req.params.id)
    })
    const a = reportes.find(item =>{
        return item.lugar == p
    })

    _res.json(a)
  })

  // cuantos incendios hubo en una determinada fecha

  app.get("/incendios/:fecha/cantIncendiosEnUnaFecha", (_req,_res) => {
    let aux:Array<Date> = new Array<Date>
    reportes.forEach(element => {
      if(element.fecha == new Date(_req.params.fecha)){
        aux.push(element.fecha)
      }
    });
    _res.json("cantidad de incendios: " + aux.length)
  })

  // mostrar nombre por coordenadas
  app.get("/incendios/:latitud/:longitud/buscarPorCoordenadas", (_req,_res) => {
    const p = lugares.find(item => {
      return item.latitud == Number(_req.params.latitud) && item.longitud == Number(_req.params.longitud)
    })
    if(p){
      _res.json(p.nombre)
    }
  })


app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`));

  



 