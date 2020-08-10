import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionSPComponent } from './production-sp.component';

describe('ProductionSPComponent', () => {
  let component: ProductionSPComponent;
  let fixture: ComponentFixture<ProductionSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
