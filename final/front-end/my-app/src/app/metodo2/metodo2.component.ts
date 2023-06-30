import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-metodo2',
  templateUrl: './metodo2.component.html',
  styleUrls: ['./metodo2.component.css']
})
export class Metodo2Component {
  idPais!:number
  mes!: number
  cantidad: string
  constructor(private http: AppServiceService){
    this.cantidad = ""
  }

  public getMetodo2(){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.getMetodo2(this.idPais, this.mes, {headers}).subscribe(
      response => {
        console.log(response);
        this.cantidad = JSON.stringify(response) 
      },
      error => {
        console.log(localStorage.getItem("token"))
        console.log(error);
      }
    )
  }
}
