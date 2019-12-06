import { Injectable } from '@angular/core';
import {Personne} from "./personne";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  personnes:Personne[]=[];

  constructor() {}

  setPersonnes(p:Personne){
    this.personnes.push(p);
  }

  getPersonnes():Personne[]{
    return this.personnes;
  }
}
