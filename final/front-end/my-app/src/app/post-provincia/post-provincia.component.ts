import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-post-provincia',
  templateUrl: './post-provincia.component.html',
  styleUrls: ['./post-provincia.component.css']
})

export class PostProvinciaComponent {

  idProvincia!: number
  nombre!: string
  idPais!: string
  constructor(private router: Router, private http: AppServiceService){
 
  }



  postProvincia(){

    const data = {
      nombre: this.nombre,
      lluvias: []
    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.postProvincia(this.idPais,data, {headers}).subscribe(
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
