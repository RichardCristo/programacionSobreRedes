import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../register/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  usuario!: string
  pass!: string

  constructor(private http : HttpClient) { 
    
  }

  login() {
    const data: Usuario = {
      nombre: this.usuario,
      passw: this.pass
      }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post("/api/login", data, {headers}).subscribe((response:any) => {
        localStorage.setItem("token", response.v)
        console.log(localStorage.getItem("token"))
      },
      error => {
        console.log(error);
      })}
}
