export class Place{

  title:string;
  country?:string;
  city?:string;
  photos?:any;
  timestamp?:number;
  keywords?:string;
  location?:{
    longitude:number,
    latitude:number
  };
selected?:boolean;
}
