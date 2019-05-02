import { Injectable } from '@angular/core';
import { Localisation } from '../_models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  url:string= "http://localhost:5555/localisations/";
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get<Array<Localisation>>(this.url);
  }
  add(l:Localisation){
    return this.http.post(this.url,l);
  }
}
