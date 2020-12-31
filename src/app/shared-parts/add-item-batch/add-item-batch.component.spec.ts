import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemBatchComponent } from './add-item-batch.component';

describe('AddItemBatchComponent', () => {
  let component: AddItemBatchComponent;
  let fixture: ComponentFixture<AddItemBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
