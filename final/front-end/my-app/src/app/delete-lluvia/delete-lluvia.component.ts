import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-delete-lluvia',
  templateUrl: './delete-lluvia.component.html',
  styleUrls: ['./delete-lluvia.component.css']
})
export class DeleteLluviaComponent {

  idPais!: number
  idProvincia!: number
  idLluvia!: number
  constructor(private router: Router, private http: AppServiceService){
 
  }

  deleteLluvia(){

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.deleteLluvia(this.idPais, this.idProvincia, this.idLluvia, {headers}).subscribe(
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
