import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherProvider {

  apiKey : '9b1c82411877670358dd824c2aa85600';
  url;

  constructor(private http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?appid=9b1c82411877670358dd824c2aa85600&q=';
  }

  getWeather(city){
    console.log("from getweather : ",this.http.get(this.url+city));
    return this.http.get(this.url+city);
  }
}
