import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  theme:string='';
  isC:boolean=false;
  isT:boolean=false;
  isP:boolean=false;
  constructor() {
  }

  ngOnInit() {
  }

  select(){
    if (this.theme==="color") {this.isC=true;}
    if (this.theme==="size"){this.isT=true;}
    if (this.theme==="police"){this.isP=true;}
  }

}
