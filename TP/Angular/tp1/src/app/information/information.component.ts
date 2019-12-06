import { Component, OnInit } from '@angular/core';
import { Personne } from "../personne";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../cv.service";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
  providers: [CvService]
})
export class InformationComponent implements OnInit {
  personne: Personne;
  personnes: Personne[];
  constructor(private router:ActivatedRoute, private route:Router, private cvService:CvService) {}

  ngOnInit() {
    this.router.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params.id);
      }
    )
  }

  delete(){
    this.cvService.deletePersonne(this.personne);
    this.personnes=this.cvService.getPersonnes();
    console.log(this.personnes);
    this.route.navigate(['cv']);
    console.log('hay');
    console.log(this.personnes);
  }

  update(){
    const id = this.personne.id;
    this.route.navigate(['update',id]);
  }
}
