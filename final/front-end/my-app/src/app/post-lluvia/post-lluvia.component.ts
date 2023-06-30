import { Component } from '@angular/core';
import { Lluvia } from '../lluvia/lluvia';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-post-lluvia',
  templateUrl: './post-lluvia.component.html',
  styleUrls: ['./post-lluvia.component.css']
})

export class PostLluviaComponent {
  mm_de_agua!: number;
  fecha!: Date
  idPais!: number
  idProvincia!:number

  constructor(private router: Router, private http: AppServiceService){

  }

  postLluvia(){

    const data = {
      mm_de_agua: this.mm_de_agua,
      fecha: this.fecha
    }
    var headers = new HttpHeaders({
      'Authorization': `${localStorage.getItem("token")}`
    })

    this.http.postLLuvia(this.idPais, this.idProvincia, data, {headers}).subscribe(
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
