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
    photo:'assets/imgs/ensas.png'
  };

  constructor(public navCtrl: NavController) {

  }

  onLoginWithFacebook(){
    console.log('Login with facebook !');
  }

  onLoginWithGoogle(): Promise<any>{

    //return new Promise((resolve, reject) => {
      /*this.googlePlus.login({
          'scopes': 'profile',
          'webClientId': 'YOUR_APP_ID'
      }).then(res => {

      // call your backend api here
            resolve(res);
          },err => {
            this.helper.showError(err);
              reject(err);
          });
      }).catch(err => {
          Console.log(err);
      });*/
      return new Promise((resolve,reject)=>{

      })

  }

}
