import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Prediction } from '../prediction';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-image-classfier-webcam',
  templateUrl: './image-classfier-webcam.component.html',
  styleUrls: ['./image-classfier-webcam.component.css'],
})
export class ImageClassfierWebcamComponent implements OnInit {
  @ViewChild('video') video: ElementRef;
  predictions: Prediction[];
  model: any;
  loading = true;
  constructor() {}

  async ngOnInit() {
    console.log('loading mobilenet model...');
    this.model = await mobilenet.load();
    console.log('Sucessfully loaded model');
    this.loading = false;

    setInterval(async () => {
      this.predictions = await this.model.classify(this.video.nativeElement);
      await tf.nextFrame();
    }, 3000);
  }

  async ngAfterViewInit() {
    const vid = this.video.nativeElement;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;
        })
        .catch((err0r) => {
          console.log('Something went wrong!');
        });
    }
  }
}
