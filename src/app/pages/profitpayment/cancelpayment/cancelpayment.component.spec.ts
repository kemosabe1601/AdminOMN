import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelpaymentComponent } from './cancelpayment.component';

describe('CancelpaymentComponent', () => {
  let component: CancelpaymentComponent;
  let fixture: ComponentFixture<CancelpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
