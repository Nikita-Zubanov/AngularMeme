import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

import { AdService } from '../ad/ad.service';

@Component({
  selector: 'winner',
  template: `
        <div class="winner-class">
            <img [src]="imageData.src" >
        </div>`,
  styleUrls: ['./winner.css'],
})
export class WinnerComponent implements OnInit {
  imageData: any;

  constructor(
    private adService: AdService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  setImageData() {
    var index = Math.round(Math.random() * 10);
    while (index > 5) {
      index = Math.round(Math.random() * 10);
    }
    this.imageData = this.adService.getImageData()[index];
  }

  setBackgroundColor() {
    this.renderer.setStyle(
      this.elementRef.nativeElement.firstElementChild,
      'background-color',
      this.imageData.backgroundColor
    );
  }

  ngOnInit() {
    this.setImageData();
    this.setBackgroundColor();
  }
}
