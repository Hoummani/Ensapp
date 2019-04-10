import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService{


  public key:string="12146863-2692853cca0922115bb6c253b";
  public key1:string="5832566-81dc7429a63c86e3b707d0429";
  public pixaUrl:string="https://pixabay.com/api/?key=";

  constructor(private http:Http){

  }


  chercher(query:string,size:number,page:number){
    return this.http.get(this.pixaUrl+this.key1+"&q="+query+"&per_page="+size+"&page="+page)
    .map(resp=>resp.json());
  }

}
