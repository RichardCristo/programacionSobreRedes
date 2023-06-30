import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-metodo1',
  templateUrl: './metodo1.component.html',
  styleUrls: ['./metodo1.component.css']
})
export class Metodo1Component {
  verTabla: boolean;
  lista: Array<{
  
    _id: number,
    nombre: string,
    lluvias: []
  }>;
  idPais!:number
  constructor(private http: AppServiceService){
    this.verTabla = false
    this.lista = []
  }

  public getMetodo1(){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.getMetodo1(this.idPais, {headers}).subscribe(
      response => {
        console.log(response);
        this.lista = JSON.parse(JSON.stringify(response))
        this.verTabla = true;
      },
      error => {
        console.log(localStorage.getItem("token"))
        console.log(error);
      }
    )
  }

}
