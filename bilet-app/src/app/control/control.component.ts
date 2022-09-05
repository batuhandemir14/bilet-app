import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  total: number = 0;
  

  constructor(
    private cartService:CartService,
    private router:Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.total = this.cartService.total;
  }

  tckimlikkontorolu(tcno:any) {
    var tckontrol,toplam; tckontrol = tcno; tcno = tcno.value; toplam = Number(tcno.substring(0,1)) + Number(tcno.substring(1,2)) +
    Number(tcno.substring(2,3)) + Number(tcno.substring(3,4)) +
    Number(tcno.substring(4,5)) + Number(tcno.substring(5,6)) +
    Number(tcno.substring(6,7)) + Number(tcno.substring(7,8)) +
    Number(tcno.substring(8,9)) + Number(tcno.substring(9,10));
    const strtoplam = String(toplam); const onunbirlerbas = strtoplam.substring(strtoplam.length,strtoplam.length-1);
  
    if(onunbirlerbas == tcno.substring(10,11)) {
      this.router.navigate(['/payment']);

    } else{
      alert("Hatalı kimlik numarası girdiniz");
    }
  }

  openPayment(){
    this.cartService.total = this.cartService.total*2
    this.router.navigate(['/payment']);
    
  }

 
  }

