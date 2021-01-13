import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCompanyInfoComponent } from './set-company-info.component';

describe('SetCompanyInfoComponent', () => {
  let component: SetCompanyInfoComponent;
  let fixture: ComponentFixture<SetCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetCompanyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
