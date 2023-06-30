import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-patch-lluvia',
  templateUrl: './patch-lluvia.component.html',
  styleUrls: ['./patch-lluvia.component.css']
})
export class PatchLluviaComponent {

  idPais!: number
  idProvincia!: number
  idLluvia!: number
  fecha!: Date
  mm_de_agua!: number
  constructor(private router: Router, private http: AppServiceService){
 
  }

  patchLluvia(){

    const data = {
      mm_de_agua: this.mm_de_agua,
      fecha: this.fecha
    }

    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.patchLluvia(this.idPais, this.idProvincia, this.idLluvia, data, {headers}).subscribe(
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
