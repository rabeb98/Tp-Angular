import { Component, OnInit } from '@angular/core';
import {Personne} from '../personne';
import { CvService } from "../cv.service";


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedPersonne: Personne;
  personnes:Personne[];
  constructor(private cvService:CvService) {}

  ngOnInit() {
    this.personnes = this.cvService.getPersonnes();
    console.log(this.personnes);
  }

  selectPersonne(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
