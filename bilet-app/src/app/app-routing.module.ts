import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"basket", component:BasketComponent },
  { path: "control", component:ControlComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
