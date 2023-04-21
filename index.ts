import express from 'express';
import { ReporteDeIncendioPorFecha } from './src/clases/reporteDeIncendioPorFecha';
import { Lugar } from './src/clases/lugar';

import swaggerUi = require('swagger-ui-express');
import swaggerSetup from './swagger'

import bodyParser from "body-parser";
import { rutaReporte } from './src/rutas/rutaReporte';
import { rutaLugar } from './src/rutas/rutaLugar';

import mongoose from 'mongoose';
const dbUrl ='mongodb://localhost:27017/tpAdmin';

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

app.use("/reporte", rutaReporte)

app.use("/lugar", rutaLugar)
  
// mostrar incendios por lugarto
app.get("/reporteDeIncendio/:id/buscarIncendio", rutaReporte)

// cuantos incendios hubo en una determinada fecha
app.get("/incendios/:fecha/cantIncendiosEnUnaFecha", rutaReporte)

// mostrar nombre por coordenadas
app.get("/incendios/:latitud/:longitud/buscarPorCoordenadas", rutaLugar)


app.listen(port, () => console.log(`Escuchando en el puerto ${port}!`));