import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageClassfierUploadRoutingModule } from './image-classfier-upload-routing.module';
import { ImageClassfierUploadComponent } from './image-classfier-upload.component';


@NgModule({
  declarations: [ImageClassfierUploadComponent],
  imports: [
    CommonModule,
    ImageClassfierUploadRoutingModule
  ]
})
export class ImageClassfierUploadModule { }
