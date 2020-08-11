import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfProductionComponent } from './self-production.component';

describe('SelfProductionComponent', () => {
  let component: SelfProductionComponent;
  let fixture: ComponentFixture<SelfProductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfProductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
