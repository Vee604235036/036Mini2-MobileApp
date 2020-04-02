import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';


@Injectable()
export class ApikeyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApikeyProvider Provider');
  }

  data_dorm(){
    let url = 'http://192.168.1.19/todoslim3/public/ranted';
    return this.http.get(url);

  }

  data_apart(){
    let url = 'http://192.168.1.19/todoslim3/public/apart';
    return this.http.get(url);
  }

  data_condo(){
    let url = 'http://192.168.1.19/todoslim3/public/condo';
    return this.http.get(url);
  }

  data_manshion(){
    let url = 'http://192.168.1.19/todoslim3/public/manshion';
    return this.http.get(url);
  }

  data_do(){
    let url = 'http://192.168.1.19/todoslim3/public/do';
    return this.http.get(url);
  }

  

  data_sea(query){
   let url = 'http://192.168.1.19/todoslim3/public/search/'+ query;
   return this.http.get(url);
  }

  lod3(){
    let url = 'http://192.168.1.19/todoslim3/public/ren3';
    return this.http.get(url);
  }

  lod34(){
    let url = 'http://192.168.1.19/todoslim3/public/ren34';
    return this.http.get(url);
  }
  lod45(){
    let url = 'http://192.168.1.19/todoslim3/public/ren45';
    return this.http.get(url);
  }
  lod5(){
    let url = 'http://192.168.1.19/todoslim3/public/ren5';
    return this.http.get(url);
  }

  showroom(dorm_name){
    let url = 'http://192.168.1.19/todoslim3/public/room/' + dorm_name;
    return this.http.get(url);
  }

  show_com(dorm_id){
    let url = 'http://192.168.1.19/todoslim3/public/review/' + dorm_id;
    return this.http.get(url);

  }
}
