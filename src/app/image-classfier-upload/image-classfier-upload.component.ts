import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';
import { Prediction } from '../prediction';

@Component({
  selector: 'app-image-classfier-upload',
  templateUrl: './image-classfier-upload.component.html',
  styleUrls: ['./image-classfier-upload.component.css'],
})
export class ImageClassfierUploadComponent implements OnInit {
  @ViewChild('img') imageEl: ElementRef;

  predictions: Prediction[];
  imgSrc: string;
  model: any;
  loading: boolean;
  constructor() {}

  async ngOnInit() {
    this.loading = true;
    this.model = await mobilenet.load();
    this.loading = false;
  }

  async fileChangeEvent(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (res: any) => {
        this.imgSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);
      };
    }
  }
}
