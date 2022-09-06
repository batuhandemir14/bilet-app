import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BasketModel } from '../model/basket';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  baskets:BasketModel[] = [];
  values = '';
  onKey(value: string) {
    this.values = value;
  }

  constructor(
    private cartService:CartService,
    private toastrService:ToastrService
    ) {
    
   }

  ngOnInit(): void {
    this.baskets = this.cartService.baskets;
  }

}
