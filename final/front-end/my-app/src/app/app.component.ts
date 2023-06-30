import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-app';

  constructor (private service : AppServiceService) { }

  ngOnInit(){
    this.getDataFromAPI();
  }

  getDataFromAPI () {
    this.service.getData().subscribe((response) => {
      console.log('pedito is ', response)
    }, (error) => {
      console.log('error is ', error);
    })
  }
}
