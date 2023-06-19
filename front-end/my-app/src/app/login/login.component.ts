import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usuario : string=""
  pass: string=""

  constructor(private http : HttpClient) { 
    
  }

  login() {
    let data  = {
      nombre: this.usuario,
      passw: this.pass
    }
    this.http.post("/api/login", data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
    }
}
