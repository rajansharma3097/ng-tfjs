import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageClassfierWebcamRoutingModule } from './image-classfier-webcam-routing.module';
import { ImageClassfierWebcamComponent } from './image-classfier-webcam.component';


@NgModule({
  declarations: [ImageClassfierWebcamComponent],
  imports: [
    CommonModule,
    ImageClassfierWebcamRoutingModule
  ]
})
export class ImageClassfierWebcamModule { }
