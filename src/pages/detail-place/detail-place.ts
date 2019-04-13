import { Place } from './../../models/place.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';


import { GoogleMap, GoogleMapsEvent } from '@ionic-native/google-maps';


/**
 * Generated class for the DetailPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-place',
  templateUrl: 'detail-place.html',
})
export class DetailPlacePage {

  public place:Place;

  map:GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform) {
    this.place=this.navParams.get('place');
    this.platform.ready().then(()=>{
      this.loadMap();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }

  loadMap(){
    this.map=new GoogleMap('map',{
      'controls':{
        'compass':true,
        'myLocationButton':true,
        'indoorPicker':true,
        'zoom':true
      },
      'gestures':{
        'scroll':true,
        'tilt':true,
        'rotate':true,
        'zoom':true
      },
      'camera':{
        target:{
          lat:this.place.location.latitude,
          lng:this.place.location.longitude
        },
        zoom:18,
        tilt:30,
        bearing:50
      }
    });
    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=>{
      console.log('Ready !');
    });
  }

}
