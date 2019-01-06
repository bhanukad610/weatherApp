import { Component } from '@angular/core';
import { NavController, UrlSerializer } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import { User } from '../../models/user';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather : any;
  location : {
    city : string
  }
  temp : any;
  user = {} as User;
  uid;
  report;
  email : string;

  constructor(public navCtrl: NavController, 
    private weatherProvider : WeatherProvider,
    private storage : Storage,
    private angularFireDatabase : AngularFireDatabase) {

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
        }
      }
      
      this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
        this.weather = weather.json();
        this.storage.get('user').then((val) => {
          if (val != null){
            this.user = JSON.parse(val);
          }
        
        this.report = {
          "uid" : this.user.uid,
          "city" : this.location.city,
          "temp" : weather.json().main.temp,
          "description" : weather.json().weather[0].description,
          "humidity" : weather.json().main.humidity,
          "wind speed" : weather.json().wind.speed,
          "pressure" : weather.json().main.pressure
        }
        this.angularFireDatabase.list("/report/").push(this.report);
        console.log("from ionViewWillEnter : ",this.report);
      });
      });

    });

    
    
  }

}
