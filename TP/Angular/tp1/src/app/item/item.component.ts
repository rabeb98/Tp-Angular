import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../personne";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() personne: Personne;
  @Output() selectItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  itemSelected() {
    this.selectItem.emit(
      this.personne
    );
  }

}
