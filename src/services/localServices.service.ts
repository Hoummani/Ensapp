import { Injectable } from "@angular/core";
import { Place } from "../models/place.model";
import {Storage} from "@ionic/storage";

@Injectable()
export class LocalServices{

  constructor(public storage:Storage){

  }
  locations:Array<Place>=[];
  addLocation(loc:Place){
    this.locations.push(loc);
    this.saveLocations();
  }

  getLocations(){
    return this.storage.get('locations')
    .then((data)=>{
    this.locations=data!=null?data:[];
    return this.locations.slice();
    })
  }

  saveLocations(){
    try {
    this.storage.set('locations',this.locations);
    }
    catch (e){
    console.log(e);
    }
  }


  updateLocations(locations:Array<Place>){
    this.locations=locations;
    this.saveLocations();
  }



  searchForLocation(keyword:string){
    let result:Array<Place>=[];
    this.locations.forEach((p)=>{
    if(p.keywords.indexOf(keyword)>=0)
    result.push(p);
    });
    return result;
  }



  addNewPhoto(photo:string,timestamp:number){
    for(let i=0;i<this.locations.length;i++){
    if(this.locations[i].timestamp==timestamp){
    this.locations[i].photos.push(photo);
    break;
    }
    }
    this.saveLocations();
  }

  private places:Array<Place>=[
    {title:"A"},{title:"B"},{title:"C"}
  ];


}
