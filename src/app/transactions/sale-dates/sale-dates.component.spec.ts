import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleDatesComponent } from './sale-dates.component';

describe('SaleDatesComponent', () => {
  let component: SaleDatesComponent;
  let fixture: ComponentFixture<SaleDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleDatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
