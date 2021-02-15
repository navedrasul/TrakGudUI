import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainDialogComponent } from './plain-dialog.component';

describe('PlainDialogComponent', () => {
  let component: PlainDialogComponent;
  let fixture: ComponentFixture<PlainDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlainDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
