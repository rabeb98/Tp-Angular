import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../personne";
import {EmbaucheService} from "../embauche.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  constructor(private embaucheService:EmbaucheService,private router:Router) {
  }
  embaucher(){
    this.embaucheService.setPersonnes(this.personne);
  }
  naviguer(){
    const id = this.personne.id;
    this.router.navigate(['/info',id]);
  }
  ngOnInit() {
  }


}
