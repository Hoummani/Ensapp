import { Injectable } from "@angular/core";
import { Place } from "../models/place.model";

@Injectable()
export class PlacesService{

  private places:Array<Place>=[
    {title:"A"},{title:"B"},{title:"C"}
  ];



  addPlace(place:Place){
    this.places.push(place);
  }


  getAllPlaces(){
    return this.places;
  }
}
