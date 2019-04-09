import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ensaContact={
    name:'Ensa Safi',
    email:'ensa.safi@gmail.com',
    photo:'assets/imgs/elections5.jpeg'
  };

  constructor(public navCtrl: NavController) {

  }

}
