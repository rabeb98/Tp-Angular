import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs'
import { OpeninghourService } from '../_services';
import { Openinghour } from '../_models';


import {UserService} from "../_services";
import {a} from "@angular/core/src/render3";
@Component({
  selector: 'app-openinghours',
  templateUrl: './openinghours.component.html',
  styleUrls: ['./openinghours.component.css']
})
export class OpeninghoursComponent implements OnInit {
    openinghour:Openinghour = new Openinghour ();
    openinghours:Array<Openinghour> = new Array<Openinghour>();
    constructor(private openinghourService:OpeninghourService) {
        this.openinghourService.getAll().subscribe(res =>
        {
            this.openinghours = res;
        });
    }

  ngOnInit() {
  }
    updateOpeninghour(){
        this.openinghourService.addOpeninghour(this.openinghour).subscribe(res =>
            console.log(res));
        this.openinghourService.getAll().subscribe(result =>
        {
            this.openinghours = result;
        });

    }
}
