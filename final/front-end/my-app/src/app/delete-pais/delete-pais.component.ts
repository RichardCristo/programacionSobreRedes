import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-delete-pais',
  templateUrl: './delete-pais.component.html',
  styleUrls: ['./delete-pais.component.css']
})
export class DeletePaisComponent {

  idPais!: number
  constructor(private router: Router, private http: AppServiceService){
 
  }

  deletePais(){

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.deletePais(this.idPais, {headers}).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(localStorage.getItem("token"))
        console.log(error);
      }
    )
  }
}
