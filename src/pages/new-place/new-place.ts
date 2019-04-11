import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacesService } from '../../services/places.service';
import { Place } from '../../models/place.model';
import { PlacesPage } from '../places/places';

/**
 * Generated class for the NewPlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public placesService:PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPlacePage');
  }

  onAddPace(place:Place){
    this.placesService.addPlace(place);
    this.navCtrl.pop();
  }

}
