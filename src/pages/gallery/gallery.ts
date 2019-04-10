import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


import { GalleryService } from '../../services/gallery.service';
import { DetailImagePage } from '../detail-image/detail-image';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  searchWord:string="";
  key:string="12146863-2692853cca0922115bb6c253b";
  key1:string="5832566-81dc7429a63c86e3b707d0429";
  pixaUrl:string="https://pixabay.com/api/?key=";
  images:any={hits:[]};
  size:number=10;
  page:number=1;
  currentPage:number=1;
  totalPages:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public galleryService:GalleryService,public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }


  onSearch(){


    this.images.hits=[];
    this.doSearch();

  }
  doSearch(){

    let loading=this.loadingCtrl.create({
      content:"Please wait ...!"
    });
    loading.present();
    this.galleryService.chercher(this.searchWord,this.size,this.page)
    .subscribe(data=>{
      this.totalPages=data.totalHits/this.size;
      if(this.totalPages%this.size!=0) ++this.totalPages;
      data.hits.forEach(element => {
        this.images.hits.push(element);
      });
      loading.dismiss();
    },
    err=>{
      loading.dismiss();
      console.log(err);
    });

  }

  doInfinite(infinix){
    if(this.currentPage<this.totalPages){
      ++this.currentPage;
      console.log(this.currentPage+"/"+this.totalPages);
      this.doSearch();
      infinix.complete();
    }

  }

  onDetaill(item){
    this.navCtrl.push(DetailImagePage,{image:item});
  }

}
