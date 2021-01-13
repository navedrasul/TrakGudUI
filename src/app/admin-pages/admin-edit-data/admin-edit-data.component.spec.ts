import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDataComponent } from './admin-edit-data.component';

describe('AdminEditDataComponent', () => {
  let component: AdminEditDataComponent;
  let fixture: ComponentFixture<AdminEditDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
