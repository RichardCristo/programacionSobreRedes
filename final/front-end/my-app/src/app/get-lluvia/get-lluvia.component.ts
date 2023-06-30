import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-lluvia',
  templateUrl: './get-lluvia.component.html',
  styleUrls: ['./get-lluvia.component.css']
})
export class GetLluviaComponent {

  verTabla: boolean;
  lluviasLista: Array<{
    _id: number,
    mm_de_agua: number,
    fecha: Date
  }>;
  idPais!:number
  idProvincia!:number
  constructor(private http: AppServiceService){
    this.verTabla = false
    this.lluviasLista = []
  }

  public getLluvia(){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.getLluvia(this.idPais,this.idProvincia,{headers}).subscribe(
      response => {
        console.log(response);
        this.lluviasLista = JSON.parse(JSON.stringify(response))
        this.verTabla = true;
      },
      error => {
        console.log(localStorage.getItem("token"))
        console.log(error);
      }
    )
  }

}
