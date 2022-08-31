import { Component, OnInit } from '@angular/core';
import { BasketModel } from 'src/app/model/basket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  baskets:BasketModel[] = []
  total: any;
  getBaskets(event:any){
    this.baskets = event.data;
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
