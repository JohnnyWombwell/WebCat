import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})

export class ImageCardComponent implements OnInit {
  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 12
  };

  constructor() { }

  public imageSourceUrl: string;

  ngOnInit() {
    this.generateImageSourceUrl();
  }

  generateImageSourceUrl(): void {
    this.imageSourceUrl = this.image.api +
                      this.image.message + 
                      '?size=' + this.image.fontsize +
                      '&ts=' + Date.now();
  }
}

class CatImage {
  message: string;
  api: string;
  fontsize: number;
}
