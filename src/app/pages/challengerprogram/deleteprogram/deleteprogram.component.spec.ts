import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprogramComponent } from './deleteprogram.component';

describe('DeleteprogramComponent', () => {
  let component: DeleteprogramComponent;
  let fixture: ComponentFixture<DeleteprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
