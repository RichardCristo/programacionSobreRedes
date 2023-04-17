import express from 'express';
import { ReporteDeIncendioPorFecha } from './reporteDeIncendioPorFecha';
import { Lugar } from './lugar';

import swaggerUi = require('swagger-ui-express');
import swaggerSetup from './swagger'

import bodyParser from "body-parser";
import { rutaReporte } from './rutaReporte';
import { rutaLugar } from './rutaLugar';

import mongoose from 'mongoose';
const dbUrl =' mongodb://localhost:27017/tpAdmin';

mongoose.connect(dbUrl, ).then(() =>{
  console.log("Conectado")
}).catch((error)=>{
  console.log("No conectado", error)
});

const app: express.Application = express();


app.use("/documentation",swaggerUi.serve, swaggerUi.setup(swaggerSetup))
app.use(bodyParser.json())

const port = 3000;  

app.use(express.json());

export let reportes:Array<ReporteDeIncendioPorFecha> = new Array<ReporteDeIncendioPorFecha>
export let lugares:Array<Lugar> = new Array<Lugar>

app.get("/reporte", rutaReporte)
  
app.get("/reporte/:id", rutaReporte)

app.post("/reporteDeIncendioPorFecha", rutaReporte)  

app.delete("/reporte/:id", rutaReporte)

app.put("/reporte/:id", rutaReporte)
  
app.patch("/reportes/:id", rutaReporte)

app.get("/lugar", rutaLugar)
  
app.get("/lugar/:id", rutaLugar)

app.post("/añadirLugar", rutaLugar)  

app.delete("/lugar/:id", rutaLugar)

app.put("/lugar/:id", rutaLugar)
  
app.patch("/lugar/:id", rutaLugar)

// mostrar incendios por lugarto
app.get("/reporteDeIncendio/:id/buscarIncendio", rutaReporte)

// cuantos incendios hubo en una determinada fecha
app.get("/incendios/:fecha/cantIncendiosEnUnaFecha", rutaReporte)

// mostrar nombre por coordenadas
app.get("/incendios/:latitud/:longitud/buscarPorCoordenadas", rutaLugar)


app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`));

  



 