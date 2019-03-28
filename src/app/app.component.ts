import { Component } from '@angular/core';
import { Kombucha } from './model/kombucha.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Booch Room!';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  masterKegList : Kombucha[] = [
    new Kombucha ('Radiate', 'Soma',5.50 , 'Cherry Chai'),
    new Kombucha ('Thrive', 'Soma',3.50 , 'Lemon Ginger'),

    new Kombucha ('Uplift', 'Brew DR',6.50 , 'Peppermint Green Tea'),
    new Kombucha ('Superberry', 'Brew DR',7.50 , 'Elderberry Hibiscus'),

    new Kombucha ('Coconut lime', 'humm',5.50 , 'Coconut lime'),
    new Kombucha ('Ginger Juniper', 'humm',6.50 , 'Ginger Juniper')
  ];
  //when selectedBooch was set to null, it wouldn't show up properly after login
  selectedBooch: Kombucha = this.masterKegList[0];
  addNewBooch(name: string, brand: string, price: number, flavor: string): void {
    this.masterKegList.push(new Kombucha(name,brand,price,flavor));
  }

  editBooch(clickedBooch) {
    this.selectedBooch = clickedBooch;
    console.log(clickedBooch);
  }

  servePint(clickedBooch) {
    clickedBooch.pints--;
    if (clickedBooch.pints < 122) {
      clickedBooch.lowPints = true;
      console.log(clickedBooch);
    }
  }

  // priceColor(bootch) {
  //   if ( bootch.price < 4 ) {
  //     return "green-price"
  //   } else if (bootch.price >= 4 && bootch.price <= 6) {
  //     return "blue-price"
  //   } else {
  //     return "red-price"
  //   }
  // }

  employee: boolean = false;

  login() {
    this.employee = true;
  }


}
