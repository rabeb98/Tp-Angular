import { Component, OnInit } from '@angular/core';
import { OpeninghourService } from '../_services';
import { Openinghour } from '../_models';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  openinghours:Array<Openinghour> = new Array<Openinghour>();
  constructor(private openinghourService:OpeninghourService) {this.openinghourService.getAll().subscribe(res =>
  {
    this.openinghours = res;
  });
  }

  ngOnInit() {
  }

}
