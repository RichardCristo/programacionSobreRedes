import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-patch-pais',
  templateUrl: './patch-pais.component.html',
  styleUrls: ['./patch-pais.component.css']
})

export class PatchPaisComponent {

  idPais!: number
  nombre!: string
  constructor(private router: Router, private http: AppServiceService){
 
  }

  patchPais(){

    const data = {
      nombre: this.nombre,
    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.patchPais(this.idPais,data, {headers}).subscribe(
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
