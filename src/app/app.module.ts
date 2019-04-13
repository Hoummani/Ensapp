
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { PlacesPage } from '../pages/places/places';
import { MeteoPage } from '../pages/meteo/meteo';
import { GalleryService } from '../services/gallery.service';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { PlacesService } from '../services/places.service';
import { NewPlacePage } from '../pages/new-place/new-place';



import {IonicStorageModule} from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation';

import { DetailPlacePage } from '../pages/detail-place/detail-place';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    PlacesPage,
    DetailPlacePage,
    NewPlacePage,
    DetailImagePage,
    MeteoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name:'ensappv3Db',
      driverOrder:['indexeddb','sqlite','websql']
    }),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    PlacesPage,
    NewPlacePage,
    DetailPlacePage,
    DetailImagePage,
    MeteoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlacesService,
    Geolocation,
    GalleryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
