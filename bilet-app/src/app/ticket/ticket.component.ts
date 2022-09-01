import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasketModel } from 'src/app/model/basket';
import { TicketModel } from "src/app/model/TicketModel";
import { CartService } from '../services/cart.service';




@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  tickets: TicketModel[] = [

    { id: 1, name: "Antalya Akvaryum", price: 250, imageUrl: "https://erspublic.blob.core.windows.net/test/16f72307-307a-9705-8dcc-283b88049000.jpg", info: "Dünyanın en büyük akvaryum komplekslerinden biri olan Antalya Aquarium, ilham, eğlence ve eğitimi bir arada sunuyor. 40 tematik akvaryumun ardından 131 metrelik uzunluğu ve 3 metrelik genişliği ile dünyanın en büyük tünel akvaryumu Antalya Aquarium’da sizleri bekliyor!" },
    { id: 2, name: "Olympos Teleferik", price: 200, imageUrl: "https://portalv3.s3.eu-central-1.amazonaws.com/156/MyHotelFiles/dac20359-ff09-47b5-95ab-836aad519e1d_olympos-teleferik2.jpg", info: "Dünyanın en uzun ikinci, Avrupa'nın ise en uzun Teleferiği olan Olympos Teleferik; Akdeniz'i ve 2365 Metre yüksekliğindeki Tahtalı Dağı'nın zirvesini birleştirmektedir. Tesisimiz her gün 09:30-19:00 arası hizmet vermektedir. İlk çıkış saat 10:00'da son iniş saat 18:30'dadır." },
    { id: 3, name: "Ters Ev", price: 150, imageUrl: "https://erspublic.blob.core.windows.net/test/17fd4c49-5b79-413-8b93-d1a244d3e000.jpg", info: "Bu evde bir terslik var !! Ters Ev sadece iç mekanı değil, dışında bulunan objelerle de ziyaretçilerin dikkatini çekiyor.Günlük hayatta kullanılan eşyaları ziyaretçileri tavandan sarkarak karşılaması ile birlikte tüm yüzeyler eğimli olarak tasarlandı.Her gün Saat 10:00-20:00 arası ziyarete açıktır." },
    { id: 4, name: "DinoPark", price: 100, imageUrl: "https://erspublic.blob.core.windows.net/test/17c97554-2342-5389-8890-d05c5bb41000.jpg", info: "Dinozor Park Turu, Fantastik Aile Aktiviteleri, Macera Parkuru, Dinosera (Dino gülbahçesi), Kontak Park Turu (Çocukların temas halinde olabileceği kanatlı hayvanat bahçesi), Fosil müzesi ve kazı alanı, Lavanta bahçesi, Deepfear korku tünelini kapsar. 4-12 yaş arası çocuk biletine tabiidir." },
    { id: 5, name: "Kum Heykel Müzesi", price: 60, imageUrl: "https://erspublic.blob.core.windows.net/test/18079735-1da6-5267-8b0c-06d347b29000.jpg", info: "10 bin metrekare alanda, yaklaşık 10 bin ton nehir kumu kullanılarak, profesyonel kum heykel sanatçılarının yarattığı Space Adventure temalı muhteşem eserler her gün 09:00-23:00 saatleri arasında ziyaret edilebilir." },
    { id: 6, name: "Kanyon", price: 175, imageUrl: "https://erspublic.blob.core.windows.net/test/181d4a11-a33f-8735-8d26-8e9dfd7b9000.jpg", info: "Dağların içinden çıkan buz gibi berrak sularının içerisinde hem serinleyecek, hemde doğanın sizin için hazırladığı setleri suyla mücadele ederek aşarken unutulmaz bir macera yaşayacaksınız. " },
    { id: 7, name: "Denizaltı Nemo", price: 500, imageUrl: "https://portalv3.s3.eu-central-1.amazonaws.com/257/MyHotelFiles/7d8ee7d3-1929-4f3f-8bcb-3d6465c16f21_1554806716663.jpg", info: "Antalya Kaleiçi Yat Limanı'ndan başlayan Denizaltı Nemo Turu; Pazartesi-Salı-Çarşamba-Perşembe-Cumartesi-Pazar Günleri sefer yapmaktadır. 35 Mt derinlikte Ortalama 60 Dk.sürmektedir." },
    { id: 8, name: "Keşif Dalışı", price: 1000, imageUrl: "https://erspublic.blob.core.windows.net/test/1803df56-8155-9182-8fd2-548f278f4000.jpg", info: "Birebir eğitmen eşliğinde 30 dakikalık özel bir dalış programıdır. The Marmara otel sahilinde yapılmaktadır. Haftanın 7 günü 08.30-18.00 saatleri arasında keşif turlarımıza katılabilirsiniz." }

  ];
















  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }


  ngOnInit(): void {

  }

  addBasket(ticket: TicketModel) {


    let basketModel = new BasketModel();
    basketModel.ticket = ticket;
    basketModel.quantity = parseInt((<HTMLInputElement>document.getElementById("quantity-" + ticket.id)).value);
    (<HTMLInputElement>document.getElementById("quantity-" + ticket.id)).value = "1";
    this.cartService.addBasket(basketModel)

    this.router.navigate(['/basket']);




  }





}