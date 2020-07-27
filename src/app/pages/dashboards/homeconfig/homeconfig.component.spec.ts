import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeconfigComponent } from './homeconfig.component';

describe('HomeconfigComponent', () => {
  let component: HomeconfigComponent;
  let fixture: ComponentFixture<HomeconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
