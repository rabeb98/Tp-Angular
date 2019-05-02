import { Component, OnInit  ,ViewEncapsulation, ViewChild, ElementRef, PipeTransform, Pipe} from '@angular/core';
import { LocalisationService } from '../_services';
import { Localisation } from '../_models';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css']
})
export class LocalisationComponent implements OnInit {

  localisation:Localisation = new Localisation ();
  localisations: Array<Localisation> = new Array<Localisation>();
  constructor(private localisationService:LocalisationService) {
    this.localisationService.getAll().subscribe(res =>
    {
      this.localisations = res;
    });
  }

  ngOnInit() {

  }
  updateLocalisation(){this.localisationService.add(this.localisation).subscribe(res =>
      console.log(res)
  );
    this.localisationService.getAll().subscribe(result =>
    {
      this.localisations = result;
    });

  }



}
