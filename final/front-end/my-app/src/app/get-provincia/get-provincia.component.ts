import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-provincia',
  templateUrl: './get-provincia.component.html',
  styleUrls: ['./get-provincia.component.css']
})

export class GetProvinciaComponent {
  verTabla: boolean;
  provinciasLista: Array<{
    _id: number,
    nombre: string,
    lluvias: []
  }>;
  idPais!:number
  constructor(private http: AppServiceService){
    this.verTabla = false
    this.provinciasLista = []
  }

  public getProvincia(){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.getProvincia(this.idPais, {headers}).subscribe(
      response => {
        console.log(response);
        this.provinciasLista = JSON.parse(JSON.stringify(response))
        this.verTabla = true;
      },
      error => {
        console.log(localStorage.getItem("token"))
        console.log(error);
      }
    )
  }

}
