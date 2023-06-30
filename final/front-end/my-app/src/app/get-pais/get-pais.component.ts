import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-pais',
  templateUrl: './get-pais.component.html',
  styleUrls: ['./get-pais.component.css']
})
export class GetPaisComponent {

  verTabla: boolean;
  paisesLista: Array<{
    _id: number,
    nombre: string,
    provincias: []
  }>;
  constructor(private http: AppServiceService){
    this.verTabla = false
    this.paisesLista = []
  }

  public getPaises(){
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.getpaises({headers}).subscribe(
      response => {
        console.log(response);
        this.paisesLista = JSON.parse(JSON.stringify(response))
        this.verTabla = true;
      },
      error => {
        console.log(localStorage.getItem("token"))
        console.log(error);
      }
    )
  }

}
