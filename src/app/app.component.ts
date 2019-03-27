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
  kegList : Kombucha[] = [
    new Kombucha ('Radiate', 'Soma',5.50 , 'Cherry Chai'),
    new Kombucha ('Thrive', 'Soma',3.50 , 'Lemon Ginger'),

    new Kombucha ('Uplift', 'Brew DR',6.50 , 'Peppermint Green Tea'),
    new Kombucha ('Superberry', 'Brew DR',7.50 , 'Elderberry Hibiscus'),

    new Kombucha ('Coconut lime', 'humm',5.50 , 'Coconut lime'),
    new Kombucha ('Ginger Juniper', 'humm',6.50 , 'Ginger Juniper')
  ];
  selectedBooch: Kombucha = null;
  addNewBooch(name: string, brand: string, price: number, flavor: string): void {
    this.kegList.push(new Kombucha(name,brand,price,flavor));
  }
  editBooch(clickedBooch) {
    this.selectedBooch = clickedBooch;
  }
  servePint(clickedBooch) {
    clickedBooch.pints--;
  }
}
