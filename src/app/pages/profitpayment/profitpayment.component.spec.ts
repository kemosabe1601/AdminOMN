import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitpaymentComponent } from './profitpayment.component';

describe('ProfitpaymentComponent', () => {
  let component: ProfitpaymentComponent;
  let fixture: ComponentFixture<ProfitpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
