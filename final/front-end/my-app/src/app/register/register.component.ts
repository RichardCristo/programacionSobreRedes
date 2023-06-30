import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario : string=""
  pass: string=""

  constructor(private http : HttpClient) { 
    
  }

  register() {
    let data  = {
      nombre: this.usuario,
      passw: this.pass
    }
    this.http.post("/api/signin", data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      })
    }
  }

