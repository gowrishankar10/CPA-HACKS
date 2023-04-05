import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUploadContentComponent } from './video-upload-content.component';

describe('VideoUploadContentComponent', () => {
  let component: VideoUploadContentComponent;
  let fixture: ComponentFixture<VideoUploadContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoUploadContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoUploadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
