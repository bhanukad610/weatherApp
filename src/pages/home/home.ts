import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather : any;
  location : {
    city : string
  }

  constructor(public navCtrl: NavController, 
    private weatherProvider : WeatherProvider,
    private storage : Storage) {

  }
/*
"{"coord":{"lon":79.85,"lat":6.93},"weather":[{"id":801,"main":"Clouds","description":"few clouds",
"icon":"02d"}],"base":"stations","main":{"temp":301.15,"pressure":1010,"humidity":78,"temp_min":301.15,
"temp_max":301.15},"visibility":10000,"wind":{"speed":2.6,"deg":350},"clouds":{"all":20},"dt":1545912600,
"sys":{"type":1,"id":9098,"message":0.0056,"country":"LK","sunrise":1545871801,"sunset":1545914015},
"id":1248991,"name":"Colombo","cod":200}"
<div class="icon"><img src="http://openweathermap.org/img/w/{{weather.weather.icon}}.png" alt=""></div>
*/

  ionViewWillEnter(){

    this.storage.get('location').then((val) => {
      if (val != null){
        this.location = JSON.parse(val);
      }else{
        this.location = {
          "city" : "colombo"
        };
      }
      
      this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
        this.weather = weather.json();
        console.log("from ionViewWillEnter : ",weather);
      });

    });

    
    
  }

}
