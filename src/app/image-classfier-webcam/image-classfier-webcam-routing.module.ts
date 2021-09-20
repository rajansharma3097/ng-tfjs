import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageClassfierWebcamComponent } from './image-classfier-webcam.component';

const routes: Routes = [{ path: '', component: ImageClassfierWebcamComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageClassfierWebcamRoutingModule { }
