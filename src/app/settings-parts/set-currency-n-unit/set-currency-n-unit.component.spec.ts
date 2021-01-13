import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCurrencyNUnitComponent } from './set-currency-n-unit.component';

describe('SetCurrencyNUnitComponent', () => {
  let component: SetCurrencyNUnitComponent;
  let fixture: ComponentFixture<SetCurrencyNUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCurrencyNUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCurrencyNUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
