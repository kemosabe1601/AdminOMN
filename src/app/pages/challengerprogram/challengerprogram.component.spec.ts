import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerprogramComponent } from './challengerprogram.component';

describe('ChallengerprogramComponent', () => {
  let component: ChallengerprogramComponent;
  let fixture: ComponentFixture<ChallengerprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
