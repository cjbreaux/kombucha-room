import { Component, OnInit, Input } from '@angular/core';
import { Kombucha } from '../model/kombucha.model';

@Component({
  selector: 'app-edit-booch',
  templateUrl: './edit-booch.component.html',
  styleUrls: ['./edit-booch.component.css']
})
export class EditBoochComponent implements OnInit {
  @Input() childSelectedBooch: Kombucha;

  constructor() { }

  ngOnInit() {
  }

}
