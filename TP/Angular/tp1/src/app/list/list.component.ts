import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../personne";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personnes: Personne[];
  @Output() sendPersonneToCv = new EventEmitter();

  constructor() {
  }


  ngOnInit() {
  }

  sendItem(personne: Personne) {
    this.sendPersonneToCv.emit(personne);
  }

}
