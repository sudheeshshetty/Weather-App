import { Component } from '@angular/core';
import {Weather} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Weather]
})
export class AppComponent {
  city:string='';
  constructor(private weather:Weather){}
  search():void{
    console.log("called");
    this.weather.searchWeather(this.city).subscribe(data=>{
      console.log(data);
    })
  }
}
