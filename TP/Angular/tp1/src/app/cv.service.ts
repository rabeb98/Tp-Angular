import { Injectable } from '@angular/core';
import { Personne } from "./personne";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnes:Personne[];
  constructor() {
    this.personnes=[
      new Personne(1,'Khalid','Chepman',40,'rotating_card_profile3.png',11111,'astronaut'),
      new Personne(2,'Leila','Stone',23, 'rotating_card_profile.png', 22222, 'coach' ),
      new Personne(3,'Josh','Mercer', 29, '  ', 33333, 'professor' ),
    ];
  }



  getPersonneById(id:number):Personne{
    const index = this.personnes.findIndex(personne => personne.id == id);
    if (index == -1) {
      return null;
    }
    return this.personnes[index];
  }

  deletePersonne(personne: Personne) {
    this.personnes = this.personnes.filter(obj => obj !== personne);
    console.log(this.personnes);
  }

  getPersonnes(): Personne[]{
    return this.personnes;
  }

  setPersonne(id:number,personne:Personne){
    const index = this.personnes.findIndex(personne => personne.id == id);
    this.personnes[index]=personne;
  }

}
