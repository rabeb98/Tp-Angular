import { Injectable } from '@angular/core';
import { Openinghour } from '../_models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OpeninghourService {

  url:string= "http://localhost:5555/openinghours/";
  constructor(private http: HttpClient) {
  }

  getAll(){
    return this.http.get<Array<Openinghour>>(this.url);
  }
  addOpeninghour(o:Openinghour){
    return this.http.post(this.url,o);
  }

}
