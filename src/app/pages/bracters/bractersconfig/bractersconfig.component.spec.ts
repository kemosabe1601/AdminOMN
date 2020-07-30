import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BractersconfigComponent } from './bractersconfig.component';

describe('BractersconfigComponent', () => {
  let component: BractersconfigComponent;
  let fixture: ComponentFixture<BractersconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BractersconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BractersconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
