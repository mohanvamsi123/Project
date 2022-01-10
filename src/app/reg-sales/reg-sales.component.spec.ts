import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSalesComponent } from './reg-sales.component';

describe('RegSalesComponent', () => {
  let component: RegSalesComponent;
  let fixture: ComponentFixture<RegSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
