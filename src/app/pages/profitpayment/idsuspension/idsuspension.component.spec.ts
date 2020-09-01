import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsuspensionComponent } from './idsuspension.component';

describe('IdsuspensionComponent', () => {
  let component: IdsuspensionComponent;
  let fixture: ComponentFixture<IdsuspensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdsuspensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdsuspensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
