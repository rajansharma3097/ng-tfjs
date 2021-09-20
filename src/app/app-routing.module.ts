import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'image-classfier-upload',
    loadChildren: () =>
      import('./image-classfier-upload/image-classfier-upload.module').then(
        (m) => m.ImageClassfierUploadModule
      ),
  },
  {
    path: 'image-classfier-webcam',
    loadChildren: () =>
      import('./image-classfier-webcam/image-classfier-webcam.module').then(
        (m) => m.ImageClassfierWebcamModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
