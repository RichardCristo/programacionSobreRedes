import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-delete-provincia',
  templateUrl: './delete-provincia.component.html',
  styleUrls: ['./delete-provincia.component.css']
})
export class DeleteProvinciaComponent {

  idPais!: number
  idProvincia!: number
  constructor(private router: Router, private http: AppServiceService){
 
  }

  deleteProvincia(){

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.deleteProvincia(this.idPais,this.idProvincia, {headers}).subscribe(
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
