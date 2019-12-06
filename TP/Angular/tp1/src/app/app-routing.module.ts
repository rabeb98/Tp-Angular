import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvComponent } from "./cv/cv.component";
import { EmbaucheComponent } from "./embauche/embauche.component";
import { InformationComponent } from "./information/information.component";
import { UpdateComponent } from "./update/update.component"

const routes: Routes = [
  {path: 'cv', component: CvComponent},
  {path: 'embauche', component: EmbaucheComponent},
  {path: 'info/:id', component: InformationComponent},
  {path: 'update/:id', component: UpdateComponent},
  {path: '',   redirectTo: '/cv', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
