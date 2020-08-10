import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoManageComponent } from './video-manage.component';

describe('VideoManageComponent', () => {
  let component: VideoManageComponent;
  let fixture: ComponentFixture<VideoManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
