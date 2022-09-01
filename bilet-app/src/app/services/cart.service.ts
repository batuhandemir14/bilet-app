import { Injectable } from '@angular/core';
import { BasketModel } from '../model/basket';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  

  baskets:BasketModel[] = []
  total:number =  0;

  constructor() { }

  addBasket(model:BasketModel){
   this.baskets.push(model);
  
    

  //  this.router.navigate(['/basket']);

}
deleteProduct(basket: BasketModel) {

  let index = this.baskets.indexOf(basket);
  this.baskets.splice(index, 1);
  this.calc();


}
calc() {
  this.total = 0
  this.baskets.forEach(element => {
    this.total = this.total + (element.ticket.price * element.quantity);

  });

  

}

changeData(basket: BasketModel) {
  let quantity: number = parseInt((<HTMLInputElement>document.getElementById("basketQuantity-" + basket.ticket.id)).value);

  let index = this.baskets.indexOf(basket);
  this.baskets.splice(index,1);

  basket.quantity = quantity;
  this.baskets.push(basket);
  this.calc();
  
}
}
