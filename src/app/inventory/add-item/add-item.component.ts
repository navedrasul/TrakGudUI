import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addForm: FormGroup;

  item: any = {};
  products: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      prodId: new FormControl(),
      price: new FormControl(),
      qty: new FormControl()
    });
  }

}
