import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlComponent } from './control/control.component';
import { OrderComponent } from './order/order.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
declare var $: any;
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaymentComponent,
    TicketComponent,
    BasketComponent,
    HomeComponent,
    ControlComponent,
    OrderComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton:true,
      progressBar:true,
    
    }
    )
    

    

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
