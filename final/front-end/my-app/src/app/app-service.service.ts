import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('/api/getData')
  }
  postLLuvia(idPais: any, idProvincia: any, body: any, headers: any){
    return this.http.post("http://localhost:4000/paises/" + idPais+ "/provincias/" + idProvincia + "/lluvias", body, headers)
  }
  postPais( body: any, headers: any){
    return this.http.post("http://localhost:4000/paises", body, headers)
  }
  postProvincia(idPais: any, body: any, headers: any){
    return this.http.post("http://localhost:4000/paises/" + idPais+ "/provincias", body, headers)
  }
  getpaises(headers: any){
    return this.http.get("http://localhost:4000/paises", headers)
  }
  getProvincia(idPais: any, headers: any){
    return this.http.get("http://localhost:4000/paises/" + idPais + "/provincias", headers)
  }
  getLluvia(idPais: any, idProvincia: any, headers: any){
    return this.http.get("http://localhost:4000/paises/" + idPais + "/provincias/" + idProvincia + "/lluvias", headers)
  }
  deletePais(idPais: any, headers: any){
    return this.http.delete("http://localhost:4000/paises/" + idPais, headers)
  }
  deleteProvincia(idPais: any, idProvincia: any, headers: any){
    return this.http.delete("http://localhost:4000/paises/" + idPais + "/provincias/" + idProvincia, headers)
  }
  deleteLluvia(idPais: any, idProvincia: any, idLluvia: any, headers: any){
    return this.http.delete("http://localhost:4000/paises/" + idPais + "/provincias/" + idProvincia + "/lluvias/" + idLluvia, headers)
  }
  patchPais( idPais: any,body: any, headers: any){
    return this.http.patch("http://localhost:4000/paises/" + idPais, body, headers)
  }
  patchProvincia( idPais: any, idProvincia: any, body: any, headers: any){
    return this.http.patch("http://localhost:4000/paises/" + idPais + "/provincias/" + idProvincia, body, headers)
  }
  patchLluvia( idPais: any, idProvincia: any, idLluvia: any, body: any, headers: any){
    return this.http.patch("http://localhost:4000/paises/" + idPais + "/provincias/" + idProvincia + "/lluvias/" + idLluvia, body, headers)
  }
  getMetodo1(idPais: any, headers: any){
    return this.http.get("http://localhost:4000/paises/" + idPais + "/provincia_con_mas_lluvias", headers)
  }
  getMetodo2(idPais: any, mes: any, headers: any){
    return this.http.get("http://localhost:4000/paises/" + idPais + "/cant_de_lluvias_en_mes/" + mes, headers)
  }
}
