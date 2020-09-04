import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadprogramComponent } from './uploadprogram.component';

describe('UploadprogramComponent', () => {
  let component: UploadprogramComponent;
  let fixture: ComponentFixture<UploadprogramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadprogramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
