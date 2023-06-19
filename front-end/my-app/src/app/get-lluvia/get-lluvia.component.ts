import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-get-lluvia',
  templateUrl: './get-lluvia.component.html',
  styleUrls: ['./get-lluvia.component.css']
})

export class GetLluviaComponent {
  apiResponse: string = "";

  paises(){
    let _headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem("token") || " "
    });
    this.http.get( "/api/paises",{ headers: _headers }).subscribe(
      (response: any) => {
        console.log(response)
        this.paises = response;
      },error => {
        console.log(error.message);
      }
    )
  }
}

