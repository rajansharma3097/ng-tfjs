import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageClassfierWebcamComponent } from './image-classfier-webcam.component';

describe('ImageClassfierWebcamComponent', () => {
  let component: ImageClassfierWebcamComponent;
  let fixture: ComponentFixture<ImageClassfierWebcamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageClassfierWebcamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageClassfierWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
