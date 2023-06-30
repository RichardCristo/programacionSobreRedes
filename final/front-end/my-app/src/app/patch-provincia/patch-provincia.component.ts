import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-patch-provincia',
  templateUrl: './patch-provincia.component.html',
  styleUrls: ['./patch-provincia.component.css']
})

export class PatchProvinciaComponent {

  idPais!: number
  idProvincia!: number
  nombre!: string
  constructor(private router: Router, private http: AppServiceService){
 
  }

  patchProvincia(){

    const data = {
      nombre: this.nombre,
    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.patchProvincia(this.idPais, this.idProvincia, data, {headers}).subscribe(
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
