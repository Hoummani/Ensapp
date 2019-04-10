import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

  meteo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private http:Http,public loadingctrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }




  /*url:http://api.openweathermap.org/data/2.5/forecast?q=casablancaAPPID=a4578e39643716894ec78b28a71c7110*/
  onSubmit(dataForm){
    /*
    let loading=this.loadingctrl.create({
      content:"Please wait ...!"
    });*/
    //loading.present();
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="+dataForm.ville+"&APPID=a4578e39643716894ec78b28a71c7110").map(resp=>resp.json()).subscribe(data=>{
    this.meteo=data;
    //loading.dismiss();
    },err=>{
      //loading.dismiss();
      console.log(err);
    });

  }

}
