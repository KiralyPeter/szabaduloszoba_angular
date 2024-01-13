import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NyitooldalComponent } from './nyitooldal/nyitooldal.component';
import { FoglalasokComponent } from './foglalasok/foglalasok.component';
import { UjfoglalasComponent } from './ujfoglalas/ujfoglalas.component';

const routes: Routes = [
  {path:'home', component:NyitooldalComponent},
  {path:'foglalasok', component:FoglalasokComponent},
  {path:'ujfoglalas', component:UjfoglalasComponent},
  {path:'', component:NyitooldalComponent},
  {path:'**', component:NyitooldalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
