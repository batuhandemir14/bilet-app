import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketModel } from '../model/basket';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit, AfterContentChecked {
  

  baskets:BasketModel[] = [];
  total: number = 0;
  values = '';
  onKey(value: string) {
    this.values += value + ' | ';
  }

  constructor(
    private cartService:CartService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.baskets = this.cartService.baskets;
  }

  ngAfterContentChecked(): void {
    this.total = this.cartService.total;
  }

  addPay() {

    this.router.navigate(['/order']);

}

}
