import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryconfigComponent } from './categoryconfig.component';

describe('CategoryconfigComponent', () => {
  let component: CategoryconfigComponent;
  let fixture: ComponentFixture<CategoryconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
