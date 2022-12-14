import { AfterContentChecked,  Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketModel } from '../model/basket';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, AfterContentChecked {

  baskets:BasketModel[] = [];
  total: number = 0;
  

  constructor(
    private cartService:CartService,
    private router:Router,
    private route: ActivatedRoute,
  ) {
    
   }

  ngOnInit(): void {
    this.baskets = this.cartService.baskets;
   
  }

  ngAfterContentChecked(): void {
    this.total = this.cartService.total;
  }

  
  

  

  deleteProduct(basket: BasketModel) {

    this.cartService.deleteProduct(basket);


  }
 
  changeData(basket: BasketModel) {
    this.cartService.changeData(basket);

  }

  addControl(){

    this.router.navigate(['/control']);
  }

}
