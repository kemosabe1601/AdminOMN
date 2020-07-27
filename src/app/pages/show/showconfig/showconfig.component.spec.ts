import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowconfigComponent } from './showconfig.component';

describe('ShowconfigComponent', () => {
  let component: ShowconfigComponent;
  let fixture: ComponentFixture<ShowconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
