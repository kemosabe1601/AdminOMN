import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageManageComponent } from './message-manage.component';

describe('MessageManageComponent', () => {
  let component: MessageManageComponent;
  let fixture: ComponentFixture<MessageManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
