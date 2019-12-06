import { Component, OnInit } from '@angular/core';
import { Personne } from "../personne";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../cv.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  personne: Personne;

  constructor(private router:ActivatedRoute, private route:Router, private cvService:CvService) {}

  ngOnInit() {
    this.router.params.subscribe(
      (params) => {
        this.personne = this.cvService.getPersonneById(params.id);
      }
    )
  }

  update(){
    this.cvService.setPersonne(this.personne.id,this.personne);
    console.log(this.personne.name);
    this.route.navigate(['cv']);
  }
}
