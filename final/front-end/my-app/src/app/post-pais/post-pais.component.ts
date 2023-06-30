import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-post-pais',
  templateUrl: './post-pais.component.html',
  styleUrls: ['./post-pais.component.css']
})



export class PostPaisComponent {

  idPais!: number
  nombre!: string
  constructor(private router: Router, private http: AppServiceService){
 
  }



  postPais(){

    const data = {
      nombre: this.nombre,
      provincia: []
    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.postPais(data, {headers}).subscribe(
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
