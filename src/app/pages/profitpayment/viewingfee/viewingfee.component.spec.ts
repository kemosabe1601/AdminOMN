import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewingfeeComponent } from './viewingfee.component';

describe('ViewingfeeComponent', () => {
  let component: ViewingfeeComponent;
  let fixture: ComponentFixture<ViewingfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewingfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewingfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
