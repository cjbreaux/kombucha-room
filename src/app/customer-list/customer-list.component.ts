import { Component, OnInit, Input} from '@angular/core';
import { Kombucha } from '../model/kombucha.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() childKegList: Kombucha[];


  priceColor(bootch) {
    if ( bootch.price < 4 ) {
      return "green-price"
    } else if (bootch.price >= 4 && bootch.price <= 6) {
      return "blue-price"
    } else {
      return "red-price"
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
