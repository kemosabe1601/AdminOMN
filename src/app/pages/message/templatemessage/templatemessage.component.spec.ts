import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatemessageComponent } from './templatemessage.component';

describe('TemplatemessageComponent', () => {
  let component: TemplatemessageComponent;
  let fixture: ComponentFixture<TemplatemessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatemessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatemessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
