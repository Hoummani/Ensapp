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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    PlacesPage,
    DetailImagePage,
    MeteoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    PlacesPage,
    DetailImagePage,
    MeteoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GalleryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
