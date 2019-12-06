import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { HeaderComponent } from './header/header.component';
import { InformationComponent } from './information/information.component';
import {FormsModule} from "@angular/forms";
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    DetailComponent,
    ListComponent,
    ItemComponent,
    DefaultImagePipe,
    EmbaucheComponent,
    HeaderComponent,
    InformationComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
