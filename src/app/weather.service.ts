import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class Weather{
  constructor(private http:Http){}

  searchWeather(city:string):Observable<any>{
    const weather_url="http://samples.openweathermap.org/data/2.5/weather?q="+city+"&appid=39afc12796a84076e584817de42b34ae";
    console.log(weather_url);
    return this.http.get(weather_url)
            .map((data)=>console.log(data))
  }
}
