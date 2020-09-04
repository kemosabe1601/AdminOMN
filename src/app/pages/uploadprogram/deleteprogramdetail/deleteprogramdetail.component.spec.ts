import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprogramdetailComponent } from './deleteprogramdetail.component';

describe('DeleteprogramdetailComponent', () => {
  let component: DeleteprogramdetailComponent;
  let fixture: ComponentFixture<DeleteprogramdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteprogramdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprogramdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
