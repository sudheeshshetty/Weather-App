import { Component } from '@angular/core';
import {Weather} from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Weather]
})
export class AppComponent {
  lat:number;
  long:number;
  city:string='';
  climate:any='';
  icon:string='';
  description:string='';
  image_url:string=''
  constructor(private weather:Weather){}
  search():void{
    this.weather.searchWeather(this.city).subscribe(data=>{
      this.climate=data.weather[0].main;
      this.description=data.weather[0].description;
      this.icon=data.weather[0].icon;
      this.image_url="http://openweathermap.org/img/w/"+this.icon+".png";
      this.long=data.coord.lon;
      this.lat=data.coord.lat;
    })
  }
}
