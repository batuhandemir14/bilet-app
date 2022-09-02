import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ControlComponent } from './control/control.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"basket", component:BasketComponent },
  { path: "control", component:ControlComponent},
  { path: "payment", component:PaymentComponent},
  { path: "order", component:OrderComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
