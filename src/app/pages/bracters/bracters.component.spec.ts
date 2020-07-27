import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BractersComponent } from './bracters.component';

describe('BractersComponent', () => {
  let component: BractersComponent;
  let fixture: ComponentFixture<BractersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BractersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BractersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
