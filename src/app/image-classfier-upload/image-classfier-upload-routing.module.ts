import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageClassfierUploadComponent } from './image-classfier-upload.component';

const routes: Routes = [{ path: '', component: ImageClassfierUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageClassfierUploadRoutingModule { }
