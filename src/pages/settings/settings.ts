import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage} from '../home/home';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  city : string;
  reg : boolean = false;
  url;
  user = {} as User;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage : Storage,
    private angularFireAuth : AngularFireAuth){

      this.storage.get('location').then((val) => {
        if (val != null){
          let location = JSON.parse(val);
          this.city = location.city;
        }else{
          this.city = 'Colombo';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  saveForm(){
    let city = {
      city : this.city
    }

    
    this.storage.set('location', JSON.stringify(city));
    this.navCtrl.push(HomePage);
  }

  async register(user : User){
    try{
      const result = await this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.reg = true;
      console.log(result);
      user.uid = result.user.uid;
      this.storage.set('user', JSON.stringify(user));

    }catch(error){
      console.log(error);
    }
    
  }


}