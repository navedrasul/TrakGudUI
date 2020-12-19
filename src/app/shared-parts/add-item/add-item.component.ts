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
  products = [
    {
      prodId: 1,
      name: 'prod A',
    },
    {
      prodId: 2,
      name: 'prod B',
    },
    {
      prodId: 3,
      name: 'prod C',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      prodId: new FormControl(),
      price: new FormControl(),
      qty: new FormControl()
    });
  }

  onSubmit(): void {
    const item = this.addForm.value;
    console.log('Adding item: ', item);
  }
}
