import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { RainbowDirective } from './rainbow.directive';
import { ClassComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    RainbowDirective,
    ClassComponent
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
